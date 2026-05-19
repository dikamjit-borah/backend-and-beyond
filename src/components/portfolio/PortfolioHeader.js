import React from "react";
import { motion } from "framer-motion";
import { projects } from "./PortfolioData";

const PortfolioHeader = ({
  current, timerKey, isPaused, isInView,
  isAnimating, next, isHovered, isMobile,
  showMobileInfo, setShowMobileInfo
}) => (
  <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 w-full pt-8 sm:pt-12 md:pt-16">
    {isMobile && (
      <motion.button
        onClick={() => setShowMobileInfo(!showMobileInfo)}
        className="absolute top-4 right-4 font-barlow text-[0.6rem] font-bold uppercase tracking-widest px-3 py-1 z-30"
        style={{ background: 'var(--ink)', color: 'var(--cream)' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        whileTap={{ scale: 0.95 }}
      >
        {showMobileInfo ? 'Hide' : 'Info'}
      </motion.button>
    )}

    <motion.div
      className="w-full"
      animate={{
        opacity: isMobile ? (showMobileInfo ? 1 : 0) : (isHovered ? 1 : 0),
        y:       isMobile ? (showMobileInfo ? 0 : 24) : (isHovered ? 0 : 24),
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <motion.h2
          className="font-barlow text-xs font-bold uppercase tracking-widest mb-4 sm:mb-8"
          style={{ color: 'var(--text-sub)' }}
        >
          Projects in 2025 that left our clients smiling:
        </motion.h2>

        {/* Circular timer */}
        <motion.div
          className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-4 sm:mb-8 cursor-pointer flex-shrink-0"
          animate={{
            opacity: isMobile ? 1 : (isHovered ? 0.9 : 1),
            scale:   isMobile ? 1 : (isHovered ? 0.9 : 1),
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          onClick={next}
        >
          <div className="absolute inset-0 rounded-full" style={{ border: '2px solid rgba(45,10,107,0.2)' }} />
          <motion.svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full rotate-[-90deg]">
            <motion.circle
              key={timerKey}
              cx="50" cy="50" r="40"
              fill="none"
              strokeWidth="4"
              stroke="var(--accent)"
              strokeLinecap="round"
              strokeDasharray={251.2}
              initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: isPaused ? 251.2 : 0 }}
              transition={isPaused ? { duration: 0 } : { duration: 4, ease: "linear" }}
              onAnimationComplete={() => {
                if (!isPaused && isInView && !isAnimating) next();
              }}
            />
          </motion.svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-barlow text-[8px] sm:text-[10px] font-bold" style={{ color: 'var(--ink)' }}>
              {current + 1}/{projects.length}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export default PortfolioHeader;
