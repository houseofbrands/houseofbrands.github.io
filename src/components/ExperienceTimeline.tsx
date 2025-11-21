"use client";

import { motion } from "framer-motion";

const history = [
  {
    period: "The Foundation",
    title: "Learning from Giants",
    description: "Honing skills in design, sourcing, and retail strategies with global leaders.",
    brands: ["Maxima", "Timex", "Danish Design", "Jacob Jensen", "Lee Cooper", "Kappa"]
  },
  {
    period: "The Expansion",
    title: "Building House of Brands",
    description: "Establishing independent manufacturing capabilities in India & China.",
    brands: ["Manufacturing", "Supply Chain", "Global Logistics"]
  },
  {
    period: "The Present",
    title: "Myntra Strategic Partner",
    description: "Leading design and development for India's top private labels.",
    brands: ["Roadster", "Wrogn", "House of Pataudi", "Dressberry", "Mast & Harbour"]
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4 block">
            23 Years of Excellence
          </span>
          <h2 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            From mastering international craftsmanship to building a manufacturing powerhouse.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-white/10" />

          {history.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pt-8 md:pt-16"
            >
              {/* Dot */}
              <div className="absolute top-7 md:top-0 left-0 md:left-0 w-3 h-3 bg-white rounded-full transform md:-translate-y-1/2 md:-translate-x-1/2 ring-4 ring-black" />
              
              <span className="text-gray-500 text-sm font-mono mb-2 block">{item.period}</span>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.brands.map((brand, i) => (
                  <span key={i} className="text-xs border border-white/20 px-2 py-1 rounded-full text-gray-300">
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

