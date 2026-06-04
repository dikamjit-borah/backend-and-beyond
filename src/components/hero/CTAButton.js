import React from "react";
import { motion } from "framer-motion";

const CTAButton = ({ onClick, children }) => (
  <motion.div
    className="flex items-center gap-6 mb-8 md:mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.8 }}
  >
    <motion.button
      onClick={onClick}
      className="font-jost text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors duration-200"
      style={{ background: 'var(--ink)', color: 'var(--cream)' }}
      whileHover={{ backgroundColor: '#4A1E8C' }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>

    <a
      href="/portfolio"
      className="font-jost text-xs font-semibold uppercase tracking-widest transition-opacity duration-200 flex items-center gap-2 hover:opacity-60"
      style={{ color: 'var(--text-sub)' }}
    >
      See Our Work
      <span style={{ color: 'var(--accent)' }}>→</span>
    </a>
  </motion.div>
);

export default CTAButton;
