"use client";

import { motion } from "framer-motion";
import { Globe, Zap, ShieldCheck, TrendingUp } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Proprietary manufacturing facilities across India and China, creating a seamless bridge for international trade."
  },
  {
    icon: Zap,
    title: "Agile Production",
    description: "From rapid prototyping to mass scale, enabling brands to respond instantly to market shifts."
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Rigorous vertical integration ensuring every product meets global luxury standards."
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Data-driven design translating global macro-trends into commercially viable products."
  }
];

export default function OEMSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white text-black border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Vision */}
          <div className="lg:col-span-5 sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-6 block">
                Strategic Capabilities
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                Vertical Integration <br /> as a Competitive Advantage.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Rajan's approach goes beyond simple manufacturing. By owning the supply chain from design to delivery, House of Brands empowers labels to scale with speed, precision, and profitability.
              </p>
              <div className="h-px w-24 bg-black/20" />
            </motion.div>
          </div>

          {/* Right Column - Capabilities Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-12 gap-y-16">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="mb-6 inline-block p-3 bg-gray-50 rounded-xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <cap.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
