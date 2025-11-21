"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          RAJAN MEHTA
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <Link href="#work" className="hover:text-white transition-colors">
            WORK
          </Link>
          <Link href="#philosophy" className="hover:text-white transition-colors">
            PHILOSOPHY
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            CONTACT
          </Link>
        </nav>
        
        {/* Mobile Menu Button Placeholder */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </motion.header>
  );
}

