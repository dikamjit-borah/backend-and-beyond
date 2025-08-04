import React from "react";
import { motion } from "framer-motion";
import { projects } from "./PortfolioData";

const PortfolioImage = ({ 
  current, 
  isAnimating, 
  previousIndex, 
  direction 
}) => {
  return (
    <div className="relative w-full overflow-hidden" style={{ position: 'relative' }}>
      {/* Show both previous and current images during animation */}
      {isAnimating && previousIndex !== null && (
        <motion.img
          src={projects[previousIndex].image}
          alt="Previous Project"
          className={`w-full h-auto min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] object-cover object-center absolute top-0 left-0 ${
            direction > 0 ? 'slide-out-left' : 'slide-out-right'
          }`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
      <motion.img
        src={projects[current].image}
        alt="Project Background"
        className={`w-full h-auto min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] object-cover object-center ${
          isAnimating ? (direction > 0 ? 'slide-in-right' : 'slide-in-left') : ''
        }`}
        initial={{ scale: isAnimating ? 1.05 : 1 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: isAnimating ? 0.8 : 1.2, 
          ease: "easeOut" 
        }}
      />
    </div>
  );
};

export default PortfolioImage;
