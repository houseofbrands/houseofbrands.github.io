"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface BrandModalProps {
  isOpen: boolean;
  onClose: () => void;
  brand: {
    title: string;
    category: string;
    tagline: string;
    description: string;
    detailedDescription: string;
    image: string;
  } | null;
}

export default function BrandModal({ isOpen, onClose, brand }: BrandModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!brand) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[70] pointer-events-none flex items-center justify-center p-4 md:p-8"
          >
            <div className="bg-[#111] w-full max-w-5xl max-h-[90vh] overflow-y-auto pointer-events-auto relative flex flex-col md:flex-row shadow-2xl border border-white/10">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-white hover:text-black transition-colors"
              >
                <X size={24} />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[600px]">
                <Image
                  src={brand.image}
                  alt={brand.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent md:hidden" />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left">
                <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
                  {brand.category}
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mb-2 tracking-tighter leading-none">
                  {brand.title}
                </h2>
                <p className="text-lg md:text-xl text-white/80 font-medium italic mb-8 border-l-2 border-white/20 pl-4">
                  "{brand.tagline}"
                </p>
                
                <div className="space-y-6 text-gray-400 leading-relaxed">
                  <p>{brand.description}</p>
                  <p>{brand.detailedDescription}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

