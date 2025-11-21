"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "23+" },
  { label: "Customers Served", value: "10M+" },
  { label: "Global Offices", value: "3" },
  { label: "Unique Models", value: "800+" },
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-white/10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <span className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500 uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

