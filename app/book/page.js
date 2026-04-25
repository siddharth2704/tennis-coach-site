import BookingForm from "@/components/BookingForm";

export default function Book() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 w-full">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter">
          Book a <span className="text-[#ccff00]">Session</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Select an available date and time to reserve your private coaching session.
        </p>
      </div>

      <BookingForm />
    </div>
  );
}
