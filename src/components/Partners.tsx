"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Myntra", src: "/assets/partners/myntra.jpg" },
  { name: "Amazon", src: "/assets/partners/amazon.jpg" },
  { name: "Flipkart", src: "/assets/partners/flipkart.jpg" },
  { name: "Noon", src: "/assets/partners/noon.jpg" },
  { name: "Ajio", src: "/assets/partners/ajio.jpg" },
  { name: "Shoppers Stop", src: "/assets/partners/shoppers-stop.jpg" },
  { name: "FirstCry", src: "/assets/partners/firstcry.jpg" },
  { name: "Hopscotch", src: "/assets/partners/hopscotch.jpg" },
];

export default function Partners() {
  return (
    <section className="pt-0 pb-16 md:pb-32 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-12 md:pt-24"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-6 block">
            Network
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Trusted Retail Partners
          </h2>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex whitespace-nowrap gap-16 md:gap-32 px-6 md:px-12 items-center">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="relative w-[180px] h-[100px] flex-shrink-0 transition-all duration-500 opacity-60 hover:opacity-100"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="180px"
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap gap-16 md:gap-32 px-6 md:px-12 items-center">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="relative w-[180px] h-[100px] flex-shrink-0 transition-all duration-500 opacity-60 hover:opacity-100"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="180px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

