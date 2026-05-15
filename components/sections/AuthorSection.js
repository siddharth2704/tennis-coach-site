"use client";

import { motion } from "framer-motion";
import { ShoppingCart, ExternalLink, BookOpen } from "lucide-react";

export default function AuthorSection() {
  return (
    <section id="book" className="py-32 bg-black relative border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Book Mockup/Image representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] rounded-sm bg-zinc-900 border border-zinc-800 shadow-2xl flex flex-col items-center justify-center p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-50"></div>
              
              <BookOpen className="w-16 h-16 text-zinc-700 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              
              <h3 className="text-3xl font-display font-light text-center leading-tight relative z-10 tracking-widest uppercase">
                I Wish <br />
                You Were <br />
                Not Here
              </h3>
              
              <p className="mt-8 text-zinc-500 font-mono text-xs uppercase tracking-widest relative z-10">
                By Deepshikha
              </p>
              
              {/* Decorative line */}
              <div className="absolute top-0 bottom-0 left-8 w-[1px] bg-zinc-800"></div>
            </div>
          </motion.div>

          {/* Right Column - Text content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h2 className="text-[#ccff00] font-mono text-sm tracking-widest uppercase mb-4">Published Author</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                Beyond the Court.
              </h3>
            </div>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
              <p>
                Inspired by my journey as a professional tennis player during the pandemic, <span className="text-white italic">"I Wish You Were Not Here"</span> is an exploration of personal growth, life philosophies, and the profound lessons learned through challenging times.
              </p>
              <p>
                The mindset required to succeed in sports translates directly into navigating life's obstacles. This book is a testament to resilience, capturing the mental fortitude needed both on and off the court.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="https://amzn.in/d/06dMwQMU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-zinc-200 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                Amazon
              </a>
              <a 
                href="https://dl.flipkart.com/s/SNzv62uuuN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-medium px-8 py-4 rounded-full border border-zinc-700 hover:bg-zinc-900 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Flipkart
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
