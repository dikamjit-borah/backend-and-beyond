import React from "react";
import { motion } from "framer-motion";

const PortfolioGradients = ({ isHovered, isMobile }) => (
  <>
    {/* Left cream fade — always visible, protects text legibility */}
    <div
      className="absolute top-0 left-0 h-full w-2/3 pointer-events-none z-10"
      style={{ background: 'linear-gradient(to right, rgba(250,248,244,0.85) 0%, rgba(250,248,244,0.4) 60%, transparent 100%)' }}
    />

    {/* Top fade */}
    <motion.div
      className="absolute top-0 w-full h-32 pointer-events-none z-10"
      style={{ background: 'linear-gradient(to bottom, rgba(250,248,244,0.6) 0%, transparent 100%)' }}
      animate={{ opacity: isMobile ? 1 : (isHovered ? 1 : 0.4) }}
      transition={{ duration: 0.5 }}
    />

    {/* Bottom fade */}
    <motion.div
      className="absolute bottom-0 w-full h-40 pointer-events-none z-10"
      style={{ background: 'linear-gradient(to top, rgba(250,248,244,0.7) 0%, transparent 100%)' }}
      animate={{ opacity: isMobile ? 1 : (isHovered ? 1 : 0.4) }}
      transition={{ duration: 0.5 }}
    />
  </>
);

export default PortfolioGradients;
