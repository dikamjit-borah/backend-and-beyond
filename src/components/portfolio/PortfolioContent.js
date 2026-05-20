import React from "react";
import { motion } from "framer-motion";
import { projects } from "./PortfolioData";

const PortfolioContent = ({
  current, isAnimating, previousIndex, direction,
  isHovered, isMobile, showMobileInfo
}) => (
  <motion.div
    className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 w-full pb-8 sm:pb-12 md:pb-16"
    animate={{
      opacity: isMobile ? (showMobileInfo ? 1 : 0) : (isHovered ? 1 : 0),
    }}
    transition={{ duration: 0.5, delay: 0.15 }}
  >
    <motion.div
      className="max-w-full sm:max-w-2xl relative"
      style={{ position: 'relative', overflow: 'hidden', minHeight: '120px' }}
      animate={{
        opacity: isMobile ? (showMobileInfo ? 1 : 0) : (isHovered ? 1 : 0),
        y:       isMobile ? (showMobileInfo ? 0 : 24) : (isHovered ? 0 : 24),
      }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Exiting slide */}
      {isAnimating && previousIndex !== null && (
        <div className={`absolute w-full ${direction > 0 ? 'slide-out-left' : 'slide-out-right'}`}>
          <div className="font-jost text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--accent)' }}>
            Case Study · {String(previousIndex + 1).padStart(2, '0')}
          </div>
          <h3 className="font-boowie text-xl sm:text-2xl md:text-3xl mb-2" style={{ color: 'var(--ink)' }}>
            {projects[previousIndex].title.replace(/^[^\w]+/, '')}
          </h3>
          <p className="font-jost text-sm leading-relaxed" style={{ color: 'var(--text-sub)' }}>
            {projects[previousIndex].description}
          </p>
        </div>
      )}

      {/* Entering slide */}
      <motion.div
        className={isAnimating ? (direction > 0 ? 'slide-in-right' : 'slide-in-left') : ''}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="font-jost text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--accent)' }}>
          Case Study · {String(current + 1).padStart(2, '0')}
        </div>
        <motion.h3
          className="font-boowie text-xl sm:text-2xl md:text-3xl mb-2"
          style={{ color: 'var(--ink)' }}
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {projects[current].title.replace(/^[^\w]+/, '')}
        </motion.h3>
        <motion.p
          className="font-jost text-sm leading-relaxed"
          style={{ color: 'var(--text-sub)' }}
          variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects[current].description}
        </motion.p>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default PortfolioContent;
