"use client";

import { motion } from "framer-motion";

export function Marquee() {
  return (
    <div className="w-full bg-white py-4 overflow-hidden border-b border-gray-100">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {Array(10).fill("").map((_, i) => (
             <div key={i} className="flex items-center gap-12 px-6 text-[#2CB5A0] font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                <span>Free Shipping on Orders over $50</span>
                <span className="opacity-50">•</span>
                <span>New Seasonal Colors Available</span>
                <span className="opacity-50">•</span>
                <span>Organic Ingredients</span>
                <span className="opacity-50">•</span>
             </div>
        ))}
      </motion.div>
    </div>
  );
}
