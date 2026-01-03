"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/assets/International/1.png",
  "/assets/International/2.jpg",
  "/assets/International/3.jpg",
  "/assets/International/4.jpg",
  "/assets/International/5.jpg",
  "/assets/International/6.jpg",
  "/assets/International/7.jpg",
  "/assets/International/8.jpg",
];

export default function GlobalGallery() {
  return (
    <section className="bg-[#0a0a0a] pt-20 md:pt-40 pb-12 md:pb-24 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-24">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4 block"
        >
          Global Network
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          A footprint across <br /> continents.
        </motion.h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        {/* Gradient Overlays for seamless edge fading */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-8 px-4">
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[300px] md:w-[500px] aspect-[16/9] bg-[#111] rounded-sm overflow-hidden transition-all duration-700 ease-out"
            >
              <Image
                src={src}
                alt={`Global Office ${index}`}
                fill
                className="object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 flex gap-8 px-4">
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[300px] md:w-[500px] aspect-[16/9] bg-[#111] rounded-sm overflow-hidden transition-all duration-700 ease-out"
            >
              <Image
                src={src}
                alt={`Global Office ${index}`}
                fill
                className="object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
