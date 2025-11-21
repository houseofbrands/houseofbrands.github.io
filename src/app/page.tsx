"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import About from "@/components/About";
import Stats from "@/components/Stats";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import OEMSection from "@/components/OEMSection";
import Partners from "@/components/Partners";
import { motion } from "framer-motion";

const brands = [
  {
    title: "Wrogn",
    category: "Youth Fashion",
    description: "Edgy, youth-centric designs pushing boundaries. Creating a unique identity for the bold generation.",
    image: "/assets/Myntra/wrogn.jpg",
    span: "col-span-1 md:col-span-2"
  },
  {
    title: "Dressberry",
    category: "Womenswear",
    description: "Elegant and feminine timepieces designed for modern women.",
    image: "/assets/Myntra/dressberry.jpg",
    span: "col-span-1"
  },
  {
    title: "Roadster",
    category: "Casual Wear",
    description: "Trendy, rugged, and durable watches built for the urban explorer.",
    image: "/assets/Myntra/roadster.png",
    span: "col-span-1"
  },
  {
    title: "Mast & Harbour",
    category: "Smart Casual",
    description: "Classic and contemporary designs bridging work and leisure.",
    image: "/assets/Myntra/mastharbour.jpg",
    span: "col-span-1 md:col-span-2"
  },
  {
    title: "Killer",
    category: "Urban Style",
    description: "Bold and stylish watches for those who dare to stand out.",
    image: "/assets/Myntra/Killer.jpg",
    span: "col-span-1"
  },
  {
    title: "Provogue",
    category: "Premium Formal",
    description: "Timeless and premium styles crafted for the modern consumer.",
    image: "/assets/Myntra/provogue.png",
    span: "col-span-1"
  },
  {
    title: "House of Pataudi",
    category: "Heritage",
    description: "Royal heritage meets modern aesthetics.",
    image: "/assets/Myntra/pataudi.jpg",
    span: "col-span-1 md:col-span-2"
  },
  {
    title: "Anouk",
    category: "Ethnic Fusion",
    description: "Fusion wear aesthetics translated into contemporary timepieces.",
    image: "/assets/categories/jewelry.jpg",
    span: "col-span-1"
  },
  {
    title: "Fluid Luxe",
    category: "Luxury",
    description: "Premium craftsmanship defining the new standard of luxury.",
    image: "/assets/categories/watches.jpg",
    span: "col-span-1"
  }
];

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-[#ededed] font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Header />
      
      <Hero />
      
      <Stats />

      <About />

      <ExperienceTimeline />

      <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-sm text-gray-500 uppercase tracking-widest block mb-4">
              Selected Ventures
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              The Portfolio
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-lg">
            A curated collection of brands that redefine their categories through design, innovation, and market fit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className={`${brand.span || 'col-span-1'}`}>
              <ProjectCard
                index={index}
                title={brand.title}
                category={brand.category}
                description={brand.description}
                image={brand.image}
              />
            </div>
          ))}
        </div>
      </section>

      <OEMSection />
      
      <Partners />
      
      <Footer />
    </main>
  );
}
