"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-[#0a0a0a] text-[#ededed] pt-40 pb-12 px-6 md:px-12 border-t border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Huge CTA */}
        <div className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] font-bold leading-[0.8] tracking-tighter mb-8"
          >
            LET'S <br />
            <span className="text-gray-600 hover:text-white transition-colors duration-500 cursor-default">BUILD</span> <br />
            FUTURE.
          </motion.h2>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
            <a
              href="mailto:care@houseofbrands.in"
              className="group flex items-center gap-4 text-2xl md:text-3xl border-b border-white/20 pb-2 hover:border-white transition-colors"
            >
              care@houseofbrands.in
              <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-gray-500">+852 5494 3024</span>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-12 gap-12 border-t border-white/10 pt-12">

          {/* Brand / Address */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-xl font-bold tracking-tight">HOUSE OF BRANDS FASHION LLP</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              3RD FLOOR, 5 AND 6, E-BLOCK,<br />
              MANGOLPURI INDUSTRIAL AREA, PHASE II,<br />
              New Delhi, Delhi, 110083
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2 md:col-start-7">
            <span className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-6">Socials</span>
            <ul className="space-y-4">
              {["LinkedIn", "Instagram", "Facebook"].map((social) => (
                <li key={social}>
                  <a href="#" className="block text-lg hover:text-gray-400 transition-colors">{social}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2">
            <span className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-6">Sitemap</span>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('about')} className="block text-lg hover:text-gray-400 transition-colors text-left">About</button></li>
              <li><button onClick={() => scrollToSection('work')} className="block text-lg hover:text-gray-400 transition-colors text-left">Work</button></li>
              <li><button onClick={() => scrollToSection('expertise')} className="block text-lg hover:text-gray-400 transition-colors text-left">Expertise</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="block text-lg hover:text-gray-400 transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-white transition-colors"
            >
              <span className="p-4 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-500">
                <ArrowUpRight className="w-5 h-5 -rotate-45" />
              </span>
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mt-24 pt-8 border-t border-white/5 text-xs text-gray-600 uppercase tracking-wider">
          <span>© {new Date().getFullYear()} Rajan Mehta</span>
          <span>Designed & Developed for Excellence</span>
        </div>
      </div>
    </footer>
  );
}

