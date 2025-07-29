import React from "react";
import { motion } from "framer-motion";

const HeroBadge = () => {
  return (
    <motion.div
      className="mb-3 md:mb-4 flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full font-semibold relative max-w-fit"
      style={{
        background: 'linear-gradient(145deg, #1f2329, #0f1217)',
        boxShadow: `
          0 6px 12px rgba(0, 0, 0, 0.6),
          0 2px 4px rgba(0, 0, 0, 0.3),
          0 1px 0 rgba(255, 255, 255, 0.05) inset,
          0 -1px 0 rgba(0, 0, 0, 0.4) inset
        `,
        border: '1px solid rgba(255, 255, 255, 0.05)',
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)'
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Left punch hole */}
      <span 
        className="inline-block w-2.5 h-2.5 md:w-3 md:h-3 rounded-full relative flex-shrink-0"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #4b5563, #1f2937)',
          boxShadow: `
            0 0 4px rgba(0, 0, 0, 0.6),
            0 2px 4px rgba(0, 0, 0, 0.5),
            0 -2px 2px rgba(0, 0, 0, 0.8) inset,
            0 2px 2px rgba(255, 255, 255, 0.15) inset
          `
        }}
      />
      
      <span className="text-xs text-gray-100 tracking-wide leading-tight">
        <span className="hidden sm:inline">Your Strategic Partner in Next-Gen Tech Innovation</span>
        <span className="sm:hidden">Next-Gen Tech Partner</span>
      </span>
      
      {/* Right punch hole */}
      <span 
        className="inline-block w-2.5 h-2.5 md:w-3 md:h-3 rounded-full relative flex-shrink-0"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #4b5563, #1f2937)',
          boxShadow: `
            0 0 4px rgba(0, 0, 0, 0.6),
            0 2px 4px rgba(0, 0, 0, 0.5),
            0 -2px 2px rgba(0, 0, 0, 0.8) inset,
            0 2px 2px rgba(255, 255, 255, 0.15) inset
          `
        }}
      />
    </motion.div>
  );
};

export default HeroBadge;
