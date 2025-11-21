"use client";

import { motion } from "framer-motion";
import { Cog, Glasses, Watch, Shirt, Briefcase } from "lucide-react";

const categories = [
  {
    icon: Watch,
    title: "Watches",
    description: "From classic analog designs to modern smartwatches, aligned with global trends."
  },
  {
    icon: Glasses,
    title: "Eyewear",
    description: "Fashion-forward sunglasses and optical frames blending style with functionality."
  },
  {
    icon: Shirt,
    title: "Lingerie",
    description: "Premium-quality lingerie offering a perfect balance of comfort and elegance."
  },
  {
    icon: Briefcase,
    title: "Leather Accessories",
    description: "Crafting premium leather goods including wallets, belts, and handbags."
  }
];

export default function OEMSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4 block">
              OEM Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Global Manufacturing <br /> & Private Label Solutions
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              With state-of-the-art facilities in India & China, we deliver high-quality, trend-driven products at competitive prices. Our low MOQ model empowers brands to launch with minimal risk.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Cog className="w-6 h-6 text-gray-400" />
              Why Partner With Us?
            </h3>
            <ul className="space-y-4">
              {[
                "Latest Trends at Low Prices",
                "Low MOQ – Minimal Investment",
                "Year-Round Stock Availability",
                "Deep Brand Understanding"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-gray-200 hover:border-black transition-colors duration-300"
            >
              <cat.icon className="w-8 h-8 mb-6 text-gray-400 group-hover:text-black transition-colors" />
              <h4 className="text-xl font-bold mb-3">{cat.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

