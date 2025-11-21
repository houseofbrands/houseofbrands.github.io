"use client";

import { motion } from "framer-motion";

const partners = [
  "Myntra", "Amazon", "Flipkart", "Noon", "Ajio", "Shoppers Stop", "FirstCry", "Reliance", "Hopscotch"
];

export default function Partners() {
  return (
    <section className="py-20 border-t border-white/10 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <h3 className="text-sm font-bold tracking-widest uppercase text-gray-500 text-center md:text-left">
          Trusted Retail Partners
        </h3>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <div className="animate-marquee flex whitespace-nowrap gap-16 md:gap-32 px-6 md:px-12">
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-4xl font-bold text-gray-800 hover:text-white transition-colors cursor-default select-none"
            >
              {partner}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap gap-16 md:gap-32 px-6 md:px-12">
           {[...partners, ...partners, ...partners].map((partner, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-4xl font-bold text-gray-800 hover:text-white transition-colors cursor-default select-none"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

