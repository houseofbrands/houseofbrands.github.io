"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] md:aspect-square w-full max-w-md mx-auto md:max-w-none"
          >
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            <Image
              src="/assets/aboutme/rajan.JPG"
              alt="Rajan Mehta"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-8 block"
            >
              The Visionary
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-8"
            >
              Designing the future of <br className="hidden md:block"/> time & fashion.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-800 leading-relaxed"
            >
              <p>
                Rajan Mehta is a seasoned entrepreneur and industry leader with over two decades of experience in the watch and fashion accessories business. As an alumnus of IIM Calcutta, he blends strategic vision with creative innovation.
              </p>
              <p>
                Currently serving as a Partner at Myntra for Private Labels and Director of House of Brands, Rajan has been instrumental in shaping the Indian fashion landscape. He has developed over 800 unique watch models and successfully served over 10 million customers.
              </p>
              <p>
                From heritage brands like <strong>House of Pataudi</strong> to youth-centric labels like <strong>Wrogn</strong>, his expertise spans across diverse market segments, ensuring every product finds its rightful audience.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-200 pt-8"
            >
              <div>
                <h4 className="font-bold text-xl mb-2">Education</h4>
                <p className="text-gray-600">Master’s from IIM Calcutta</p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Expertise</h4>
                <p className="text-gray-600">OEM, Brand Development, Retail Strategy</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

