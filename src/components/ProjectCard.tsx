"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  index: number;
}

export default function ProjectCard({ title, category, description, image, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer h-full flex flex-col"
    >
      <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[400px] overflow-hidden mb-6 bg-[#111]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      
      <div className="flex flex-col mt-auto">
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="text-3xl font-bold group-hover:text-white transition-colors">{title}</h3>
          <span className="text-xs font-medium tracking-widest text-gray-500 uppercase">{category}</span>
        </div>
        <p className="text-base text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors">{description}</p>
      </div>
    </motion.div>
  );
}
