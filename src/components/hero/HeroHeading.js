import React from "react";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

const HeroHeading = ({ changingWords, mobileWords }) => {
  return (
    <motion.div
      className="font-boowie font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-0 md:mb-6 text-left leading-tight"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      style={{
        minHeight: '70px',
        lineHeight: '1.1',
      }}
    >
      {/* Static part of the heading */}
      <div className="bg-gradient-to-r from-blue-300 via-blue-100 to-white bg-clip-text text-transparent">
        <span className="hidden sm:inline">We Empower Modern Enterprises with</span>
        <span className="sm:hidden">Empowering Enterprises with</span>
        {" "}
      </div>

      {/* Container for the changing text with typewriter effect */}
      <TypewriterText 
        words={changingWords}
        mobileWords={mobileWords}
      />
    </motion.div>
  );
};

export default HeroHeading;
