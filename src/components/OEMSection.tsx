"use client";

import { motion } from "framer-motion";
import { Globe, Zap, ShieldCheck, TrendingUp } from "lucide-react";

const capabilities = [
  {
    id: "01",
    icon: Globe,
    title: "Global Infrastructure",
    description: "Proprietary manufacturing facilities across India and China, creating a seamless bridge for international trade."
  },
  {
    id: "02",
    icon: Zap,
    title: "Agile Production",
    description: "From rapid prototyping to mass scale, enabling brands to respond instantly to market shifts."
  },
  {
    id: "03",
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Rigorous vertical integration ensuring every product meets global luxury standards."
  },
  {
    id: "04",
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Data-driven design translating global macro-trends into commercially viable products."
  }
];

export default function OEMSection() {
  return (
    <section id="expertise" className="py-20 md:py-40 px-6 md:px-12 bg-[#f5f5f5] text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-start">
          
          {/* Left Column - Vision */}
          <div className="lg:col-span-5 sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-8 block">
                Strategic Capabilities
              </span>
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter mb-10">
                Vertical Integration <br /> as a Competitive Advantage.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12 font-light">
                Rajan's approach goes beyond simple manufacturing. By owning the supply chain from design to delivery, House of Brands empowers labels to scale with speed, precision, and profitability.
              </p>
              <div className="h-1 w-20 bg-black" />
            </motion.div>
          </div>

          {/* Right Column - Capabilities Grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group p-10 border-gray-300 hover:bg-white transition-colors duration-500
                    ${index % 2 === 0 ? 'border-r' : ''}
                    ${index < 2 ? 'border-b' : ''}
                    ${index === 2 || index === 3 ? 'border-b-0' : ''}
                    border-b sm:border-b-0
                  `}
                >
                  <div className="flex justify-between items-start mb-8">
                    <span className="font-mono text-sm font-bold text-gray-400 group-hover:text-black transition-colors">
                      {cap.id}
                    </span>
                    <cap.icon className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {cap.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
