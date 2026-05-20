import React from "react";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

const HeroHeading = ({ changingWords, mobileWords }) => (
  <motion.div
    className="font-boowie mb-6 md:mb-8 text-left"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
    style={{
      lineHeight: '1.02',
      color: 'var(--ink)',
      letterSpacing: '-0.02em',
    }}
  >
    <div style={{ fontSize: 'clamp(2rem, 4.5vw, 4.5rem)' }}>
      <span className="hidden sm:inline">We Empower Modern Enterprises with </span>
      <span className="sm:hidden">Empowering Enterprises with </span>
      <TypewriterText words={changingWords} mobileWords={mobileWords} />
    </div>
  </motion.div>
);

export default HeroHeading;
