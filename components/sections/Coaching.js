"use client";

import { motion } from "framer-motion";
import { Target, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: <Target className="w-6 h-6 text-black" />,
    title: "Technical Clarity",
    description: "Break down complex strokes into precise, actionable steps to build a flawless technique."
  },
  {
    icon: <Shield className="w-6 h-6 text-black" />,
    title: "Unshakeable Confidence",
    description: "Develop the mental resilience required to stay calm and perform under competitive pressure."
  },
  {
    icon: <Zap className="w-6 h-6 text-black" />,
    title: "Structured Development",
    description: "Customized training plans for all age groups—from building fundamentals to elite refinement."
  }
];

export default function Coaching() {
  return (
    <section id="coaching" className="py-32 bg-black relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center space-y-4 mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ccff00] font-mono text-sm tracking-widest uppercase"
          >
            Coaching Philosophy
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            Built for <span className="text-zinc-600">Evolution.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-zinc-900/50 border border-zinc-800 p-10 rounded-3xl hover:bg-zinc-900 transition-colors group"
            >
              <div className="w-14 h-14 bg-[#ccff00] rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-display font-bold text-white mb-4">{feature.title}</h4>
              <p className="text-zinc-400 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center border-t border-zinc-800 pt-16"
        >
          <div>
            <p className="text-5xl font-display font-bold text-white">2+</p>
            <p className="text-zinc-500 mt-2 font-mono text-sm">Years Coaching</p>
          </div>
          <div>
            <p className="text-5xl font-display font-bold text-white">All</p>
            <p className="text-zinc-500 mt-2 font-mono text-sm">Age Groups</p>
          </div>
          <div>
            <p className="text-5xl font-display font-bold text-white">100%</p>
            <p className="text-zinc-500 mt-2 font-mono text-sm">Commitment</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
