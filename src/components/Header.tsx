"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          RAJAN MEHTA
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
            ABOUT
          </button>
          <button onClick={() => scrollToSection('work')} className="hover:text-white transition-colors">
            WORK
          </button>
          <button onClick={() => scrollToSection('expertise')} className="hover:text-white transition-colors">
            EXPERTISE
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
            CONTACT
          </button>
        </nav>
        
        {/* Mobile Menu Button Placeholder */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </motion.header>
  );
}

