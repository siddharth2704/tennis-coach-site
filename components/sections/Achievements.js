"use client";

import { motion } from "framer-motion";
import { Medal, Trophy, Star } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#ccff00] font-mono text-sm tracking-widest uppercase"
            >
              The Record
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-white max-w-2xl leading-tight"
            >
              Forged in <span className="text-zinc-600">Competition.</span>
            </motion.h3>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 font-light max-w-sm md:text-right"
          >
            A legacy of professional excellence built on courts across the nation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 rounded-3xl border border-zinc-800 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Medal className="w-24 h-24 text-[#ccff00]" />
            </div>
            <div className="relative z-10">
              <p className="text-[#ccff00] font-mono mb-2">2015</p>
              <h4 className="text-2xl font-bold text-white mb-2">Gold Medalist</h4>
              <p className="text-zinc-400">SGFI National School Games</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 rounded-3xl border border-zinc-800 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Medal className="w-24 h-24 text-zinc-300" />
            </div>
            <div className="relative z-10">
              <p className="text-[#ccff00] font-mono mb-2">2020</p>
              <h4 className="text-2xl font-bold text-white mb-2">Silver Medalist</h4>
              <p className="text-zinc-400">Khelo India University Games</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 rounded-3xl border border-zinc-800 relative overflow-hidden group lg:col-span-2 flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10 space-y-4">
              <h4 className="text-3xl font-bold text-white">Professional Circuit</h4>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded-full text-sm font-medium flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#ccff00]" /> Multiple AITA Titles
                </span>
                <span className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded-full text-sm font-medium flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#ccff00]" /> ITF Tournaments
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
