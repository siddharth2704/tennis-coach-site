import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

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

    return NextResponse.json({ success: true, booking: data[0] });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
