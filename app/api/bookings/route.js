import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { format, parseISO } from 'date-fns';

// Helper function to send WhatsApp alert with retry logic
async function sendWhatsAppAlert(bookingData) {
  const webhookUrl = process.env.WHATSAPP_WEBHOOK_URL;
  if (!webhookUrl) {
    console.log('WHATSAPP_WEBHOOK_URL not configured. Skipping alert.');
    return;
  }

  // Format date nicely (e.g., "30 April" from "2024-04-30")
  let formattedDate = bookingData.date;
  try {
    const parsedDate = parseISO(bookingData.date);
    formattedDate = format(parsedDate, 'dd MMMM');
  } catch (e) {
    // fallback to original date string if parsing fails
  }

  const payload = {
    name: bookingData.name,
    phone: bookingData.phone,
    date: formattedDate,
    time: bookingData.time,
    message: `New Booking:\nName: ${bookingData.name}\nPhone: ${bookingData.phone}\nDate: ${formattedDate}\nTime: ${bookingData.time}`
  };

  const maxRetries = 3;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('WhatsApp alert sent successfully via webhook.');
        return; // Success, exit the retry loop
      } else {
        throw new Error(`Webhook responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error(`WhatsApp alert attempt ${attempt} failed:`, error.message);
      if (attempt < maxRetries) {
        // Wait 1 second before retrying
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        console.error('All attempts to send WhatsApp alert failed.');
      }
    }
  }
}

// Fetch booked slots for a specific date
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');

  if (!date) {
    return NextResponse.json({ error: 'Date is required' }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from('bookings')
      .select('time')
      .eq('date', date);

    if (error) throw error;

    return NextResponse.json({ bookedSlots: data.map(b => b.time) });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Create a new booking
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, date, time } = body;

    if (!name || !phone || !date || !time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Attempt to insert the booking
    // Note: The unique constraint (date, time) on the Supabase table will 
    // automatically reject double bookings and throw an error.
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        { name, phone, date, time }
      ])
      .select();

    if (error) {
      // Handle unique constraint violation
      // Supabase error code for unique violation is often 23505
      if (error.code === '23505' || (error.message && error.message.toLowerCase().includes('unique'))) {
        return NextResponse.json({ error: 'This time slot is already booked. Please choose another.' }, { status: 409 });
      }
      throw error;
    }

    // Trigger WhatsApp alert asynchronously (fire-and-forget)
    sendWhatsAppAlert({ name, phone, date, time }).catch(err => {
      console.error('Unhandled error in sendWhatsAppAlert:', err);
    });

    return NextResponse.json({ success: true, booking: data[0] });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
