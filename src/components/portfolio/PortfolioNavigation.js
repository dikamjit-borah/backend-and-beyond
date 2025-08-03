import React from "react";
import { motion } from "framer-motion";

const PortfolioNavigation = ({ prev, next, isInView, isHovered, isMobile }) => {
  return (
    <motion.div 
      className="absolute w-full max-w-[1400px] left-1/2 -translate-x-1/2 top-0 bottom-0 pointer-events-none px-2 sm:px-4 z-30"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isMobile ? 1 : (isHovered ? 1 : 0)
      }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <motion.button
        onClick={prev}
        className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white group rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-26 lg:h-26 flex items-center justify-center transition-all duration-300 pointer-events-auto"
        aria-label="Previous"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        initial={{ x: -20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
      >
        <motion.svg 
          width="32" 
          height="32" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
          className="sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-16 lg:h-16"
          animate={{ x: [0, -5, 0] }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.5, ease: "easeInOut" }}
        >
          <g>
            <path d="M127.107 41.149 133 47.04l-53.039 53.03L133 153.107 127.107 159l-58.925-58.926 58.925-58.925Z" 
              className="fill-white group-hover:fill-black transition-colors duration-300"
              fillRule="evenodd">
            </path>
          </g>
        </motion.svg>
      </motion.button>

      <motion.button
        onClick={next}
        className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white group rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-26 lg:h-26 flex items-center justify-center transition-all duration-300 pointer-events-auto"
        aria-label="Next"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        initial={{ x: 20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
      >
        <motion.svg 
          width="32" 
          height="32" 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
          className="sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-16 lg:h-16"
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.5, ease: "easeInOut" }}
        >
          <g>
            <path d="M72.893 41.149 67 47.04l53.039 53.03L67 153.107 72.893 159l58.925-58.926L72.893 41.149Z" 
              className="fill-white group-hover:fill-black transition-colors duration-300"
              fillRule="evenodd">
            </path>
          </g>
        </motion.svg>
      </motion.button>
    </motion.div>
  );
};

export default PortfolioNavigation;
