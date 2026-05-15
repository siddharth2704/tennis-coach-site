"use client";

import { motion } from "framer-motion";

export default function Journey() {
  return (
    <section id="journey" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Large Typography */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-[#ccff00] font-mono text-sm tracking-widest uppercase">The Journey</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              18 Years of <br />
              <span className="text-zinc-600">Relentless Pursuit.</span>
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
              From a professional player competing at national and ITF levels to dedicating my life to unlocking the potential in others.
            </p>
          </motion.div>

          {/* Right Column - Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 glass p-8 md:p-12 rounded-3xl"
          >
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed font-light">
              <p>
                My tennis journey began over <span className="text-white font-medium">18 years ago</span>. As a former professional player, I learned what it takes to compete at the highest levels, earning a Silver medal at the 2020 Khelo India University Games and a Gold medal at the 2015 SGFI National School Games.
              </p>
              <p>
                Through multiple AITA titles and ITF tournaments, I built a foundation deeply rooted in high-performance tennis and resilience.
              </p>
              <p>
                Today, I channel that exact experience into coaching. I focus on technical clarity, building unshakeable confidence, and structured player development through a calm, detail-oriented approach. 
              </p>
              <p className="text-[#ccff00] font-medium text-xl italic pt-4">
                "My goal is simple: to create a positive, high-quality environment where you can continuously grow and reach your full potential."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
