"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Diamond } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-[#0a0a0a] text-[#ededed] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 relative">
          
          {/* Central Divider (Desktop) */}
          <div className="hidden md:flex absolute inset-0 justify-center pointer-events-none">
            <div className="h-full w-px bg-white/10 relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] p-4 text-gray-500">
                 <Diamond size={24} strokeWidth={1} />
               </div>
            </div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-xl md:text-2xl leading-relaxed text-gray-500 font-light md:pr-12"
          >
            <p>
              I’m an architect of modern retail & <br/>
              <strong className="text-white font-medium">Global E-commerce Pioneer</strong>, designing strategies that build and run brands with partners such as <strong className="text-white font-medium">Myntra</strong> and <strong className="text-white font-medium">Flipkart</strong>.
            </p>
            
            <p>
              Currently growing <strong className="text-white font-medium">House of Brands™</strong>, my vehicle for bridging the gap between international trends and the Indian consumer.
            </p>

            <p>
              I’ve also developed over <strong className="text-white font-medium">800+ unique product lines</strong>, serving the fashion community for more than two decades.
            </p>

            <p>
              We believe in brands and products that have a point of view. Take a look at some of our work below.
            </p>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start md:pl-12"
          >
            <div className="relative w-full max-w-md aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700 bg-[#111]">
               <Image
                src="/assets/aboutme/rajan.JPG"
                alt="Rajan Mehta"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="mt-6 space-y-1">
              <h3 className="text-white text-lg font-medium tracking-wide">Rajan Mehta</h3>
              <p className="text-gray-600 text-xs font-bold tracking-widest uppercase">Founder House of Brands</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
