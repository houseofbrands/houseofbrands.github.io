"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import GlobalGallery from "@/components/GlobalGallery";
import OEMSection from "@/components/OEMSection";
import Partners from "@/components/Partners";
import BrandModal from "@/components/BrandModal";
import { motion } from "framer-motion";

// Enhanced Brands Data with Taglines & Placeholders
const brands = [
  {
    title: "Wrogn",
    category: "Youth Fashion",
    tagline: "Break the Rules. Set the Trend.",
    description: "Edgy, youth-centric designs pushing boundaries. Creating a unique identity for the bold generation.",
    detailedDescription: "Wrogn represents the rebellious spirit of today's youth. Our collection isn't just about timekeeping; it's about making a statement. From unconventional dial designs to rugged straps, every piece is crafted for those who dare to be different.",
    image: "/assets/Myntra/wrogn.jpg",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Dressberry",
    category: "Womenswear",
    tagline: "Elegance in Every Second.",
    description: "Elegant and feminine timepieces designed for modern women.",
    detailedDescription: "Dressberry watches capture the essence of modern femininity. Blending delicate aesthetics with durable craftsmanship, our timepieces are the perfect accessory for the woman who commands attention with grace.",
    image: "/assets/Myntra/dressberry.jpg",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Roadster",
    category: "Casual Wear",
    tagline: "Built for the Road Less Traveled.",
    description: "Trendy, rugged, and durable watches built for the urban explorer.",
    detailedDescription: "Inspired by the spirit of adventure, Roadster watches are engineered for durability and style. Whether you're navigating the urban jungle or exploring the great outdoors, these timepieces are your reliable companion.",
    image: "/assets/Myntra/roadster.png",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Mast & Harbour",
    category: "Smart Casual",
    tagline: "From Desk to Dinner.",
    description: "Classic and contemporary designs bridging work and leisure.",
    detailedDescription: "Mast & Harbour offers a seamless transition between professional and social settings. Our designs prioritize versatility, ensuring you look sharp whether you're in a boardroom meeting or at a weekend brunch.",
    image: "/assets/Myntra/mastharbour.jpg",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    title: "Killer",
    category: "Urban Style",
    tagline: "Attitude on Your Wrist.",
    description: "Bold and stylish watches for those who dare to stand out.",
    detailedDescription: "Killer watches are for the trendsetters. With bold faces, striking color combinations, and an unapologetic attitude, this collection is designed for the generation that refuses to blend in.",
    image: "/assets/Myntra/Killer.jpg",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    title: "Provogue",
    category: "Premium Formal",
    tagline: "The Mark of Excellence.",
    description: "Timeless and premium styles crafted for the modern consumer.",
    detailedDescription: "Provogue stands for timeless elegance. Our premium formal collection combines traditional watchmaking cues with modern reliability, offering sophisticated timepieces for the discerning gentleman.",
    image: "/assets/Myntra/provogue.png",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "House of Pataudi",
    category: "Heritage",
    tagline: "Royal Legacy, Modern Craft.",
    description: "Royal heritage meets modern aesthetics.",
    detailedDescription: "House of Pataudi watches are a tribute to India's royal heritage. Intricate detailing, classic silhouettes, and premium materials come together to create timepieces that exude nobility and grace.",
    image: "/assets/Myntra/pataudi.jpg",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Anouk",
    category: "Ethnic Fusion",
    tagline: "Culture in Contemporary Form.",
    description: "Fusion wear aesthetics translated into contemporary timepieces.",
    detailedDescription: "Anouk brings the vibrancy of ethnic fashion to the world of horology. Featuring motifs inspired by traditional Indian art forms, these watches are perfect for the modern woman who cherishes her roots.",
    image: "/assets/categories/jewelry.jpg",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    title: "Fluid Luxe",
    category: "Luxury",
    tagline: "Precision Meets Art.",
    description: "Premium craftsmanship defining the new standard of luxury.",
    detailedDescription: "Fluid Luxe represents the pinnacle of our design capabilities. Focusing on minimalism and premium materials, this collection redefines what affordable luxury means in the modern watch market.",
    image: "/assets/categories/watches.jpg",
    className: "md:col-span-1 md:row-span-1"
  }
];

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<typeof brands[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (brand: typeof brands[0]) => {
    setSelectedBrand(brand);
    setIsModalOpen(true);
  };

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-[#ededed] font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Header />

      <Hero />

      <About />

      <ExperienceTimeline />

      <GlobalGallery />

      <section id="work" className="pt-24 pb-40 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 border-b border-white/10 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
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

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(300px,auto)] gap-6 grid-flow-dense">
          {brands.map((brand, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={brand.title}
              category={brand.category}
              image={brand.image}
              onClick={() => openModal(brand)}
              className={brand.className}
            />
          ))}
        </div>
      </section>

      <OEMSection />

      <Partners />

      <Footer />

      <BrandModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        brand={selectedBrand}
      />
    </main>
  );
}
