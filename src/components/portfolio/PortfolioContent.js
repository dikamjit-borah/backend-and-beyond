import React from "react";
import { motion } from "framer-motion";
import { projects } from "./PortfolioData";

const PortfolioContent = ({ 
  current, 
  isAnimating, 
  previousIndex, 
  direction, 
  isHovered, 
  isMobile,
  showMobileInfo
}) => {
  return (
    <motion.div 
      className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 w-full pb-8 sm:pb-12 md:pb-16"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isMobile ? (showMobileInfo ? 1 : 0) : (isHovered ? 1 : 0)
      }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <motion.div 
        className="max-w-full sm:max-w-2xl relative" 
        style={{ position: 'relative', overflow: 'hidden', minHeight: '120px' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: isMobile ? (showMobileInfo ? 1 : 0) : (isHovered ? 1 : 0), 
          y: isMobile ? (showMobileInfo ? 0 : 30) : (isHovered ? 0 : 30) 
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {isAnimating && previousIndex !== null && (
          <div className={`absolute w-full ${direction > 0 ? 'slide-out-left' : 'slide-out-right'}`}>
            <h3 className="font-boowie text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-2 sm:mb-3 md:mb-4 drop-shadow-xl">
              {projects[previousIndex].title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-white/90 drop-shadow-lg mb-1 sm:mb-2 font-neutraface">
              {projects[previousIndex].description}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/90 drop-shadow-lg mb-1 sm:mb-2 leading-relaxed font-neutraface">
              {projects[previousIndex].description2}
            </p>
          </div>
        )}
        <motion.div 
          className={`${isAnimating ? (direction > 0 ? 'slide-in-right' : 'slide-in-left') : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3 
            className="font-boowie text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-2 sm:mb-3 md:mb-4 drop-shadow-xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {projects[current].title}
          </motion.h3>
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-white/90 drop-shadow-lg mb-1 sm:mb-2 font-neutraface"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {projects[current].description}
          </motion.p>
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-white/90 drop-shadow-lg mb-1 sm:mb-2 leading-relaxed font-neutraface"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {projects[current].description2}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioContent;
