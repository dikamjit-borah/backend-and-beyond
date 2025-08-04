import React from "react";
import { motion } from "framer-motion";
import { projects } from "./PortfolioData";

const PortfolioHeader = ({ 
  current, 
  timerKey, 
  isPaused, 
  isInView, 
  isAnimating, 
  next, 
  isHovered, 
  isMobile 
}) => {
  return (
    <motion.div 
      className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 w-full pt-8 sm:pt-12 md:pt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: isMobile ? 1 : (isHovered ? 1 : 0), 
        y: isMobile ? 0 : (isHovered ? 0 : 30) 
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <motion.h2 
          className="font-boowie text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-8 drop-shadow-xl leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isMobile ? 1 : (isHovered ? 1 : 0), 
            y: isMobile ? 0 : (isHovered ? 0 : 20) 
          }}
          transition={{ 
            duration: 0.5,
            delay: 0.1
          }}
        >
          Projects That Left Our Clients Smiling:
        </motion.h2>
        
        {/* Circular Timer */}
        <motion.div 
          className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-4 sm:mb-8 cursor-pointer flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isMobile ? 1 : (isHovered ? 0.8 : 1), 
            scale: isMobile ? 1 : (isHovered ? 0.8 : 1)
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          onClick={next} // Allow clicking the timer to advance to the next slide
        >
          {/* Background circle */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
          
          {/* Progress circle */}
          <motion.svg 
            viewBox="0 0 100 100" 
            className="absolute inset-0 w-full h-full rotate-[-90deg]"
          >
            <motion.circle
              key={timerKey}
              cx="50"
              cy="50"
              r="40"
              fill="none"
              strokeWidth="4"
              stroke="white"
              strokeLinecap="round"
              strokeDasharray={251.2} // Circumference of circle with r=40: 2 * π * r
              initial={{ strokeDashoffset: 251.2 }} // Start from full offset (empty)
              animate={{ 
                strokeDashoffset: isPaused ? 251.2 : 0 // Animate to 0 offset (full circle)
              }}
              transition={isPaused ? 
                { duration: 0 } : 
                { duration: 4, ease: "linear" }
              }
              className="opacity-60"
              onAnimationComplete={() => {
                if (!isPaused && isInView && !isAnimating) {
                  next(); // Trigger slide change when animation completes
                }
              }}
            />
          </motion.svg>
          
          {/* Number in the middle */}
          <div className="absolute inset-0 flex items-center justify-center font-medium text-white">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[8px] sm:text-[10px] md:text-xs"
            >
              {current + 1}/{projects.length}
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioHeader;
