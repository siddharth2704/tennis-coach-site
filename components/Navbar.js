"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Journey', href: '/#journey' },
    { name: 'Coaching', href: '/#coaching' },
    { name: 'Achievements', href: '/#achievements' },
    { name: 'Media', href: '/#media' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-display font-bold text-xl tracking-[0.2em] uppercase">
            Deepshikha<span className="text-[#ccff00]">.</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest">
                {link.name}
              </Link>
            ))}
            <Link 
              href="/book" 
              className="bg-[#ccff00] text-black hover:bg-white transition-colors px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest"
            >
              Book Session
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-[#ccff00]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 absolute top-full w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-white uppercase tracking-widest border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link 
                href="/book" 
                className="block text-center bg-[#ccff00] text-black font-bold uppercase tracking-widest py-3 rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Book Session
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
