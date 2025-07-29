import React from "react";
import { motion } from "framer-motion";

const CTAButton = ({ onClick, children, className = "" }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold mb-8 md:mb-12 text-sm sm:text-base tracking-wide w-auto max-w-xs sm:max-w-none ${className}`}
      style={{
        background: 'linear-gradient(135deg, #ffffffc9 0%, #3b82f6 25%, #3b82f6 75%, #ffffffd9 100%)',
        boxShadow: '0 4px 14px rgba(59, 130, 246, 0.5)',
        position: 'relative',
        overflow: 'hidden'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 6px 20px rgba(59, 130, 246, 0.7)'
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton;
