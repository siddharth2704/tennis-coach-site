"use client";

import { motion } from "framer-motion";

export default function MediaGallery() {
  const images = [
    { src: "/gallery/tennis pose.jpeg", title: "Action Shots", size: "lg" },
    { src: "/gallery/BTS w sharya.PNG", title: "Training Students", size: "sm" },
    { src: "/gallery/professional photo.jpeg", title: "Tennis Centre", size: "sm" },
    { src: "/gallery/playing tennis in pink .jpg", title: "Private Sessions", size: "lg" }
  ];

  const articles = [
    { src: "/gallery/TOI match.jpeg", alt: "Times of India Feature" },
    { src: "/gallery/article as little Sania.jpeg", alt: "Little Sania Feature" },
    { src: "/gallery/KIUG news eng.jpeg", alt: "KIUG English News" },
    { src: "/gallery/AITA gujarati.jpeg", alt: "AITA Gujarati Feature" }
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
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={img.src} 
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-white font-display font-bold text-xl drop-shadow-md">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured In / Newspaper section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-32 text-center"
        >
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-12">Featured In Publications</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70 hover:opacity-100 transition-opacity">
            {articles.map((article, idx) => (
              <div key={idx} className="relative aspect-[3/4] overflow-hidden rounded-xl border border-zinc-800 hover:border-zinc-500 transition-colors">
                <img src={article.src} alt={article.alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
