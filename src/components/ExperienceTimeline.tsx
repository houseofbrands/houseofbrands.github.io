"use client";

import { motion } from "framer-motion";

const history = [
  {
    year: "Phase I",
    period: "Foundations",
    title: "Strategic Mastery",
    description: "Driving innovation and market penetration for global legacy brands.",
    brands: ["Maxima", "Timex", "Danish Design", "Jacob Jensen", "Lee Cooper", "Kappa"]
  },
  {
    year: "Phase II",
    period: "Expansion",
    title: "Architecting Scale",
    description: "Establishing proprietary manufacturing infrastructure across key Asian markets.",
    brands: ["Vertical Integration", "Supply Chain Optimization", "Global Logistics"]
  },
  {
    year: "Phase III",
    period: "Present",
    title: "Market Dominance",
    description: "Defining the private label landscape for India's premier fashion ecosystems.",
    brands: ["Roadster", "Wrogn", "House of Pataudi", "Dressberry", "Mast & Harbour"]
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="py-40 px-6 md:px-12 bg-[#111] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-8 block">
            23 Years of Excellence
          </span>
          <h2 className="text-4xl md:text-6xl font-bold max-w-4xl leading-[1.1]">
            From mastering international craftsmanship to architecting a global manufacturing powerhouse.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-20 relative">
          {/* Timeline Line - Hidden on Mobile, Visible on Desktop */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/20 to-transparent" />

          {history.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pt-8 border-t border-white/20 md:border-t-0"
            >
              {/* Desktop Dot */}
              <div className="hidden md:block absolute top-0 left-0 w-2 h-2 bg-white -translate-y-1/2" />
              
              <div className="mb-6">
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1 block">
                  {item.year} — {item.period}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base min-h-[3rem]">
                  {item.description}
                </p>
              </div>

              {/* Replaced Pill Boxes with Clean List */}
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-500 font-medium">
                {item.brands.map((brand, i) => (
                  <span key={i} className="hover:text-white transition-colors duration-300">
                    {brand} {i !== item.brands.length - 1 && <span className="text-gray-700 mx-1">/</span>}
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
