import Link from "next/link";
import { Check } from "lucide-react";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 w-full">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter">
          Training <span className="text-[#ccff00]">Programs</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Choose the program that fits your goals. All sessions are one hour unless specified otherwise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 1-on-1 Coaching */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col hover:border-[#ccff00]/50 transition duration-300">
          <h3 className="text-2xl font-bold mb-2">Private Session</h3>
          <p className="text-zinc-400 mb-6 flex-1">Intensive 1-on-1 coaching focusing entirely on your specific needs and development.</p>
          <div className="mb-6">
            <span className="text-4xl font-extrabold">$80</span>
            <span className="text-zinc-500">/hour</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-zinc-300"><Check className="text-[#ccff00] w-5 h-5" /> Video analysis included</li>
            <li className="flex items-center gap-3 text-zinc-300"><Check className="text-[#ccff00] w-5 h-5" /> Personalized tactical plan</li>
            <li className="flex items-center gap-3 text-zinc-300"><Check className="text-[#ccff00] w-5 h-5" /> Flexible scheduling</li>
          </ul>
          <Link href="/book" className="w-full py-4 rounded-xl font-bold text-center border border-[#ccff00] text-[#ccff00] hover:bg-[#ccff00] hover:text-black transition">
            Book Now
          </Link>
        </div>

        {/* Monthly Plan (Featured) */}
        <div className="bg-black border-2 border-[#ccff00] rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(204,255,0,0.15)]">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ccff00] text-black px-4 py-1 rounded-full text-sm font-bold tracking-wider">
            MOST POPULAR
          </div>
          <h3 className="text-2xl font-bold mb-2">Pro Monthly Plan</h3>
          <p className="text-zinc-400 mb-6 flex-1">Comprehensive monthly development program with regular consistent training.</p>
          <div className="mb-6">
            <span className="text-4xl font-extrabold">$280</span>
            <span className="text-zinc-500">/month</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-zinc-300"><Check className="text-[#ccff00] w-5 h-5" /> 4 private sessions per month</li>
            <li className="flex items-center gap-3 text-zinc-300"><Check className="text-[#ccff00] w-5 h-5" /> Off-court fitness plan</li>
            <li className="flex items-center gap-3 text-zinc-300"><Check className="text-[#ccff00] w-5 h-5" /> Match play analysis</li>
            <li className="flex items-center gap-3 text-zinc-300"><Check className="text-[#ccff00] w-5 h-5" /> Priority booking</li>
          </ul>
          <Link href="/book" className="w-full py-4 rounded-xl font-bold text-center bg-[#ccff00] text-black hover:bg-white transition shadow-[0_0_15px_rgba(204,255,0,0.4)]">
            Book Plan
          </Link>
        </div>

        {/* Group Sessions */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col hover:border-[#ccff00]/50 transition duration-300">
          <h3 className="text-2xl font-bold mb-2">Group Clinic</h3>
          <p className="text-zinc-400 mb-6 flex-1">High-energy group training focusing on drilling, footwork, and live-ball situations.</p>
          <div className="mb-6">
            <span className="text-4xl font-extrabold">$40</span>
            <span className="text-zinc-500">/session</span>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-zinc-300"><Check className="text-[#ccff00] w-5 h-5" /> Max 4 players per court</li>
            <li className="flex items-center gap-3 text-zinc-300"><Check className="text-[#ccff00] w-5 h-5" /> High-intensity drilling</li>
            <li className="flex items-center gap-3 text-zinc-300"><Check className="text-[#ccff00] w-5 h-5" /> Competitive match play</li>
          </ul>
          <Link href="/book" className="w-full py-4 rounded-xl font-bold text-center border border-[#ccff00] text-[#ccff00] hover:bg-[#ccff00] hover:text-black transition">
            Book Clinic
          </Link>
        </div>
      </div>
    </div>
  );
}
