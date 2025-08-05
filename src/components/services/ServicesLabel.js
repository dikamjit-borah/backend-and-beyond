import React from "react";
import { motion } from "framer-motion";

const ServicesLabel = () => {
  return (
    <>
      {/* Vertical SERVICES label */}
      <motion.div
        className="absolute left-0 top-24 h-auto flex items-start z-10 hidden lg:flex"
        variants={{
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
      >
        <motion.div
          className="bg-gray-900 px-4 py-8 flex items-center"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.2em', borderRadius: '0 0.5rem 0.5rem 0' }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-white text-lg font-semibold tracking-widest">SERVICES</span>
        </motion.div>
      </motion.div>
      
      {/* Mobile section label - positioned at top */}
      <motion.div 
        className="absolute top-0 right-2 lg:hidden z-10"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="bg-gray-900 px-3 sm:px-4 py-2 sm:py-3 rounded-b-lg"
          style={{ borderRadius: '0 0 0.5rem 0.5rem' }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-white text-xs sm:text-sm font-semibold tracking-widest">SERVICES</span>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ServicesLabel;
