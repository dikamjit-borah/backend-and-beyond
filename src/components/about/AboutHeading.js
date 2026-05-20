import React from "react";
import { motion } from "framer-motion";

const AboutHeading = () => (
  <motion.div
    className="relative mb-8 md:mb-10"
    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <motion.h2
      className="font-boowie leading-none"
      style={{
        fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)',
        color: 'var(--ink)',
        letterSpacing: '-0.02em',
        lineHeight: 1.05,
      }}
      variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      Seamless tech,<br />
      elegant design &<br />
      <span style={{ color: 'var(--accent)' }}>engineered to scale.</span>
    </motion.h2>
  </motion.div>
);

export default AboutHeading;
