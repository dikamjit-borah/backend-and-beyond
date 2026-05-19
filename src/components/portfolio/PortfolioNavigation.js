import React, { useState } from "react";
import { motion } from "framer-motion";

const NavBtn = ({ onClick, direction, isInView, label }) => {
  const [hovered, setHovered] = useState(false);
  const isLeft = direction === 'left';
  const path   = isLeft
    ? "M127.107 41.149 133 47.04l-53.039 53.03L133 153.107 127.107 159l-58.925-58.926 58.925-58.925Z"
    : "M72.893 41.149 67 47.04l53.039 53.03L67 153.107 72.893 159l58.925-58.926L72.893 41.149Z";

  return (
    <motion.button
      onClick={onClick}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`absolute ${isLeft ? 'left-2 sm:left-4 md:left-6 lg:left-8' : 'right-2 sm:right-4 md:right-6 lg:right-8'} top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center pointer-events-auto transition-all duration-200`}
      style={{
        border: '2px solid var(--ink)',
        background: hovered ? 'var(--ink)' : 'transparent',
        transition: 'background 0.2s ease',
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ x: isLeft ? -16 : 16, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: isLeft ? -16 : 16, opacity: 0 }}
    >
      <svg width="24" height="24" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d={path}
          fillRule="evenodd"
          style={{ fill: hovered ? 'var(--cream)' : 'var(--ink)', transition: 'fill 0.2s ease' }}
        />
      </svg>
    </motion.button>
  );
};

const PortfolioNavigation = ({ prev, next, isInView, isHovered, isMobile }) => (
  <motion.div
    className="absolute w-full max-w-[1400px] left-1/2 -translate-x-1/2 top-0 bottom-0 pointer-events-none px-2 sm:px-4 z-30"
    animate={{ opacity: isMobile ? 1 : (isHovered ? 1 : 0) }}
    transition={{ duration: 0.5, delay: 0.25 }}
  >
    <NavBtn onClick={prev} direction="left"  isInView={isInView} label="Previous" />
    <NavBtn onClick={next} direction="right" isInView={isInView} label="Next" />
  </motion.div>
);

export default PortfolioNavigation;
