"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function MediaGallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800&auto=format&fit=crop", title: "Action Shots", size: "lg" },
    { src: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=800&auto=format&fit=crop", title: "Training Students", size: "sm" },
    { src: "https://images.unsplash.com/photo-1530915365347-230afbb1ef66?q=80&w=800&auto=format&fit=crop", title: "Tennis Centre", size: "sm" },
    { src: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop", title: "Private Sessions", size: "lg" }
  ];

  return (
    <section id="media" className="py-32 bg-zinc-950 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center space-y-4 mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ccff00] font-mono text-sm tracking-widest uppercase"
          >
            Gallery & Media
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            Moments on <span className="text-zinc-600">Court.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[300px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group ${img.size === "lg" ? "md:row-span-2" : ""}`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <img 
                src={img.src} 
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-white font-display font-bold text-xl">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured In / Newspaper section placeholder */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-32 text-center"
        >
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-12">Featured In Publications</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            <div className="text-2xl font-display font-bold text-zinc-300">National News</div>
            <div className="text-2xl font-display font-bold text-zinc-300">Sports Daily</div>
            <div className="text-2xl font-display font-bold text-zinc-300">Local Press</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
