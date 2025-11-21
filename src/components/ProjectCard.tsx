"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ title, category, image, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={onClick}
      className="group cursor-pointer relative"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#111] mb-4">
        <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Hover Indicator */}
        <div className="absolute top-4 right-4 z-20 bg-white text-black p-2 rounded-full opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={20} />
        </div>
      </div>
      
      {/* Typography */}
      <div className="flex flex-col items-start relative overflow-hidden">
        <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-300 transform translate-y-0">
          {title}
        </h3>
        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mt-1 group-hover:text-white transition-colors">
          {category}
        </span>
      </div>
    </motion.div>
  );
}
