"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "My serve and backhand have improved tremendously. The analytical approach to coaching completely changed how I see the game.",
      author: "Sarah Jenkins",
      role: "Intermediate Player",
    },
    {
      quote: "Intense, professional, and highly effective. Reached my tournament goals within 3 months of starting the coaching program.",
      author: "Marcus O.",
      role: "Advanced Competitor",
    },
    {
      quote: "Deepshikha's coaching style is incredibly calm yet highly effective. She breaks down the hardest techniques into simple actionable steps.",
      author: "Amit Patel",
      role: "Beginner",
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-black border-t border-zinc-900 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center space-y-4 mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ccff00] font-mono text-sm tracking-widest uppercase"
          >
            Player Success
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            Voices of <span className="text-zinc-600">Victory.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl relative"
            >
              <Quote className="w-10 h-10 text-[#ccff00] opacity-20 mb-6" />
              <p className="text-zinc-300 italic mb-8 font-light leading-relaxed">
                "{test.quote}"
              </p>
              <div>
                <p className="font-bold text-white">{test.author}</p>
                <p className="text-sm text-zinc-500 font-mono mt-1">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
