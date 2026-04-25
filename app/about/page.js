import { Award, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 w-full space-y-20">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter">
          About <span className="text-[#ccff00]">The Coach</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          Over 10 years of professional coaching experience, transforming players of all levels through technical precision and strategic thinking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="aspect-square bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 relative">
          {/* Using a placeholder image for the coach portrait */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">The Journey</h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Starting as a competitive junior player, I transitioned into coaching to share my passion for the tactical and mental aspects of tennis. After competing at the collegiate level, I acquired multiple elite certifications to ensure my students receive the most up-to-date and scientifically backed training methods.
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-[#ccff00]/30">
                <Award className="text-[#ccff00]" />
              </div>
              <div>
                <h4 className="font-bold text-white">USPTA Elite Professional</h4>
                <p className="text-sm text-zinc-500">Certified 2015</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-[#ccff00]/30">
                <Target className="text-[#ccff00]" />
              </div>
              <div>
                <h4 className="font-bold text-white">High-Performance Coaching</h4>
                <p className="text-sm text-zinc-500">USTA Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800 text-center">
        <Zap className="w-16 h-16 text-[#ccff00] mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">Coaching Philosophy</h2>
        <p className="text-xl text-zinc-300 italic max-w-3xl mx-auto">
          "Tennis is a game of problem-solving under pressure. My approach focuses on building robust biomechanics, developing tactical awareness, and fostering mental resilience so players can perform their best when it matters most."
        </p>
      </div>
    </div>
  );
}
