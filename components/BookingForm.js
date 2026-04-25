"use client";

import { useState, useEffect } from 'react';
import { format, addDays, startOfToday } from 'date-fns';
import { Calendar as CalendarIcon, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const TIME_SLOTS = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  "05:00 PM", "06:00 PM"
];

export default function BookingForm() {
  const today = startOfToday();
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Generate next 14 days for date selection
  const dates = Array.from({ length: 14 }).map((_, i) => addDays(today, i));

  useEffect(() => {
    async function fetchBookedSlots() {
      if (!selectedDate) return;
      
      setLoadingSlots(true);
      setSelectedTime(""); // Reset selected time when date changes
      
      try {
        const formattedDate = format(selectedDate, 'yyyy-MM-dd');
        const res = await fetch(`/api/bookings?date=${formattedDate}`);
        const data = await res.json();
        
        if (res.ok) {
          setBookedSlots(data.bookedSlots || []);
        } else {
          console.error("Failed to fetch slots:", data.error);
        }
      } catch (err) {
        console.error("Error fetching booked slots", err);
      } finally {
        setLoadingSlots(false);
      }
    }

    fetchBookedSlots();
  }, [selectedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !name || !phone) {
      setError("Please fill out all fields and select a time slot.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          date: formattedDate,
          time: selectedTime
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to book session');
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-zinc-900 border border-[#ccff00] p-8 rounded-3xl text-center max-w-lg mx-auto">
        <CheckCircle2 className="w-16 h-16 text-[#ccff00] mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
        <p className="text-zinc-300 mb-6">
          Your session for {format(selectedDate, 'MMMM d, yyyy')} at {selectedTime} has been successfully booked.
        </p>
        <p className="text-sm text-zinc-500">We will contact you shortly with further details.</p>
        <button 
          onClick={() => {
            setSuccess(false);
            setSelectedDate(today);
            setSelectedTime("");
            setName("");
            setPhone("");
          }}
          className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-[#ccff00] transition"
        >
          Book Another Session
        </button>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-3xl max-w-4xl mx-auto">
      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-xl mb-6 font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Date & Time */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CalendarIcon className="text-[#ccff00]" /> Select Date
            </h3>
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-3 min-w-max">
                {dates.map((date) => {
                  const isSelected = format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                  return (
                    <button
                      key={date.toString()}
                      type="button"
                      onClick={() => setSelectedDate(date)}
                      className={cn(
                        "flex flex-col items-center justify-center w-20 h-24 rounded-2xl border transition",
                        isSelected 
                          ? "bg-[#ccff00] border-[#ccff00] text-black" 
                          : "bg-black border-zinc-800 text-zinc-400 hover:border-[#ccff00]/50"
                      )}
                    >
                      <span className="text-sm font-medium">{format(date, 'EEE')}</span>
                      <span className={cn("text-2xl font-bold", isSelected ? "text-black" : "text-white")}>
                        {format(date, 'd')}
                      </span>
                      <span className="text-xs">{format(date, 'MMM')}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
              Select Time
              {loadingSlots && <Loader2 className="w-5 h-5 animate-spin text-[#ccff00]" />}
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {TIME_SLOTS.map((time) => {
                const isBooked = bookedSlots.includes(time);
                const isSelected = selectedTime === time;

                return (
                  <button
                    key={time}
                    type="button"
                    disabled={isBooked || loadingSlots}
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "py-3 rounded-xl text-sm font-bold transition border",
                      isBooked 
                        ? "bg-zinc-800/50 border-zinc-800 text-zinc-600 cursor-not-allowed line-through" 
                        : isSelected
                          ? "bg-[#ccff00] border-[#ccff00] text-black"
                          : "bg-black border-zinc-800 text-white hover:border-[#ccff00] hover:text-[#ccff00]"
                    )}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold mb-4">Your Details</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#ccff00] transition" 
                placeholder="John Doe" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">Phone Number</label>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#ccff00] transition" 
                placeholder="+1 (555) 000-0000" 
              />
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-800">
            <div className="flex justify-between items-center mb-6">
              <span className="text-zinc-400">Selected Session</span>
              <span className="font-bold text-white text-right">
                {selectedTime ? (
                  <>
                    {format(selectedDate, 'MMM d, yyyy')}<br />
                    <span className="text-[#ccff00]">{selectedTime}</span>
                  </>
                ) : (
                  "None selected"
                )}
              </span>
            </div>
            
            <button 
              type="submit" 
              disabled={submitting || !selectedTime || !name || !phone}
              className="w-full bg-[#ccff00] text-black font-bold py-4 rounded-xl hover:bg-white transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(204,255,0,0.3)]"
            >
              {submitting ? (
                <><Loader2 className="animate-spin w-5 h-5" /> Processing...</>
              ) : (
                "Confirm Booking"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
