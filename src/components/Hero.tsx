"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
      <div className="max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl mb-8 tracking-wide uppercase"
        >
          CEO House of Brands • Global E-commerce Pioneer
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12"
        >
          BRIDGING <br className="hidden md:block" />
          <span className="text-gray-500">CULTURES</span> THROUGH <br className="hidden md:block" />
          TIME & FASHION
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base border-t border-white/10 pt-8"
        >
          <div>
            <span className="block text-gray-500 mb-1">EXPERIENCE</span>
            20+ Years
          </div>
          <div>
            <span className="block text-gray-500 mb-1">REACH</span>
            100K+ Customers Served
          </div>
          <div>
            <span className="block text-gray-500 mb-1">PRESENCE</span>
            3 Global Offices
          </div>
        </motion.div>
      </div>
    </section>
  );
}

