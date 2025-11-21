"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Industry Leadership", value: "23 Years" },
  { label: "Global Consumer Base", value: "10M+" },
  { label: "International Offices", value: "03" },
  { label: "Product Innovations", value: "800+" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-12 relative overflow-hidden">
      
      {/* Subtle Background Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl w-full mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-12 bg-white/30" />
          <span className="text-gray-400 text-sm md:text-base tracking-[0.2em] uppercase font-medium">
            CEO House of Brands
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-12"
        >
          BRIDGING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
            CULTURES
          </span> <br />
          THROUGH <br />
          TIME & FASHION
        </motion.h1>
      </div>

      {/* Integrated Stats */}
      <div className="max-w-7xl w-full mx-auto border-t border-white/10 pt-8 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
            >
              <span className="block text-3xl md:text-4xl font-bold tracking-tighter mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
