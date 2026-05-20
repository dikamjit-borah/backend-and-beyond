import React from "react";
import { motion } from "framer-motion";

const CTAButton = ({ onClick, onSeeWork, children }) => (
  <motion.div
    className="flex items-center gap-6 mb-8 md:mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.8 }}
  >
    <motion.button
      onClick={onClick}
      className="font-barlow text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors duration-200"
      style={{ background: 'var(--ink)', color: 'var(--cream)' }}
      whileHover={{ backgroundColor: 'var(--ink-mid)' }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>

    <motion.button
      onClick={onSeeWork}
      className="font-barlow text-xs font-semibold uppercase tracking-widest transition-colors duration-200 flex items-center gap-2"
      style={{ color: 'var(--text-sub)', background: 'transparent', border: 'none' }}
      whileHover={{ color: 'var(--accent)' }}
    >
      See Our Portfolio
      <span style={{ color: 'var(--accent)' }}>→</span>
    </motion.button>
  </motion.div>
);

export default CTAButton;
