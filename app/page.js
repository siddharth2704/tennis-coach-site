import Link from "next/link";
import { CalendarDays, Star, Trophy, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-32 px-4 text-center min-h-[80vh]">
        <div className="absolute inset-0 bg-zinc-900 bg-[url('https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="z-10 max-w-4xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase">
            Elevate Your <span className="text-[#ccff00]">Game</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto">
            Professional tennis coaching tailored to your level. Master your technique, build stamina, and dominate the court.
          </p>
          <div className="pt-8">
            <Link 
              href="/book" 
              className="inline-block bg-[#ccff00] text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-white transition shadow-[0_0_20px_rgba(204,255,0,0.4)]"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 space-y-4">
              <Trophy className="w-12 h-12 text-[#ccff00] mx-auto" />
              <h3 className="text-xl font-bold">Proven Methodology</h3>
              <p className="text-zinc-400">Technical precision combined with tactical awareness for unmatched results.</p>
            </div>
            <div className="p-6 space-y-4">
              <Users className="w-12 h-12 text-[#ccff00] mx-auto" />
              <h3 className="text-xl font-bold">All Skill Levels</h3>
              <p className="text-zinc-400">From total beginners to aspiring pros, personalized plans for every player.</p>
            </div>
            <div className="p-6 space-y-4">
              <CalendarDays className="w-12 h-12 text-[#ccff00] mx-auto" />
              <h3 className="text-xl font-bold">Flexible Scheduling</h3>
              <p className="text-zinc-400">Easy online booking system to fit training into your busy lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <h2 className="text-4xl font-bold uppercase tracking-tight">Player <span className="text-[#ccff00]">Success</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 text-left relative">
              <Star className="w-8 h-8 text-[#ccff00] absolute top-6 right-6 opacity-20" />
              <p className="text-zinc-300 italic mb-6">"My serve and backhand have improved tremendously. The analytical approach to coaching completely changed how I see the game."</p>
              <div>
                <p className="font-bold text-white">— Sarah Jenkins</p>
                <p className="text-sm text-[#ccff00]">Intermediate Player</p>
              </div>
            </div>
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 text-left relative">
              <Star className="w-8 h-8 text-[#ccff00] absolute top-6 right-6 opacity-20" />
              <p className="text-zinc-300 italic mb-6">"Intense, professional, and highly effective. Reached my tournament goals within 3 months of starting the coaching program."</p>
              <div>
                <p className="font-bold text-white">— Marcus O.</p>
                <p className="text-sm text-[#ccff00]">Advanced Competitor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
