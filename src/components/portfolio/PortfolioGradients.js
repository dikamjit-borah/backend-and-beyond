import React from "react";
import { motion } from "framer-motion";

const PortfolioGradients = ({ isHovered, isMobile }) => {
  return (
    <>
      {/* Top Gradient */}
      <motion.div 
        className="absolute top-0 w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-b from-black/100 to-transparent pointer-events-none z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ 
          opacity: isMobile ? 1 : (isHovered ? 1 : 0), 
          y: isMobile ? 0 : (isHovered ? 0 : -50) 
        }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Bottom Gradient */}
      <motion.div 
        className="absolute bottom-0 w-full h-[15rem] sm:h-[18rem] md:h-[22rem] lg:h-[25rem] bg-gradient-to-t from-black/100 to-transparent pointer-events-none z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: isMobile ? 1 : (isHovered ? 1 : 0), 
          y: isMobile ? 0 : (isHovered ? 0 : 50) 
        }}
        transition={{ duration: 0.5 }}
      />
    </>
  );
};

export default PortfolioGradients;
