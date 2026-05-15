"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function ContactCTA() {
  return (
    <section id="contact" className="py-32 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      
      {/* Background glowing effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ccff00] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#ccff00] font-mono text-sm tracking-widest uppercase mb-6"
        >
          Take the first step
        </motion.h2>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight"
        >
          Ready to Elevate <br />
          <span className="text-zinc-600">Your Game?</span>
        </motion.h3>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
        >
          <Link 
            href="/book" 
            className="group relative inline-flex items-center justify-center bg-[#ccff00] text-black font-bold text-lg px-10 py-5 rounded-full overflow-hidden transition-all hover:scale-105 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Session
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
          </Link>
          <a 
            href="https://wa.me/919289965675" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-white font-medium text-lg px-10 py-5 rounded-full border border-zinc-700 hover:bg-zinc-900 transition-colors w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-8"
        >
          <a href="#" className="p-4 bg-zinc-900 rounded-full hover:bg-zinc-800 hover:text-[#ccff00] transition-colors">
            <InstagramIcon />
          </a>
          <a href="#" className="p-4 bg-zinc-900 rounded-full hover:bg-zinc-800 hover:text-[#ccff00] transition-colors">
            <YoutubeIcon />
          </a>
          <a href="https://wa.me/919289965675" target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 rounded-full hover:bg-zinc-800 hover:text-[#ccff00] transition-colors">
            <MessageCircle className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
