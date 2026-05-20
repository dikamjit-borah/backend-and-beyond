import React from "react";
import { motion } from "framer-motion";

const HeroHeading = () => (
  <motion.h1
    className="font-boowie mb-6 md:mb-8 text-left"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
    style={{
      lineHeight: '1.02',
      color: 'var(--ink)',
      letterSpacing: '-0.02em',
      fontSize: 'clamp(2rem, 4.5vw, 4.5rem)',
    }}
  >
    <span className="hidden sm:inline">
      Engineering software<br />
      that scales, adapts,<br />
      <span style={{ color: 'var(--accent)' }}>and performs.</span>
    </span>
    <span className="sm:hidden">
      Software built<br />
      to scale<br />
      <span style={{ color: 'var(--accent)' }}>and perform.</span>
    </span>
  </motion.h1>
);

export default HeroHeading;
