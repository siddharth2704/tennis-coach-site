"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2000&auto=format&fit=crop"
          alt="Tennis Action"
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter font-display leading-[0.9]"
          >
            Clarity.<br />
            Consistency.<br />
            <span className="text-[#ccff00]">Confidence.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light"
          >
            Elite tennis coaching by former professional & medalist, Deepshikha. Master your game with purpose and precision.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <Link 
              href="/book" 
              className="group relative inline-flex items-center justify-center bg-[#ccff00] text-black font-bold text-lg px-8 py-4 rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
            </Link>

            <a 
              href="#journey" 
              className="text-white font-medium text-lg px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              Explore Journey
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-zinc-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
      </motion.div>
    </section>
  );
}
