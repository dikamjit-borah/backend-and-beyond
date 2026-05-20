import React from "react";
import { motion } from "framer-motion";

const HeroBadge = () => (
  <motion.div
    className="mb-4 flex items-center gap-3"
    initial={{ opacity: 0, y: -16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <span style={{ display: 'inline-block', width: '28px', height: '2px', background: 'var(--accent)', flexShrink: 0 }} />
    <span
      className="font-jost text-xs font-bold uppercase tracking-widest"
      style={{ color: 'var(--accent)' }}
    >
      <span className="hidden sm:inline">Software Engineering & AI Studio</span>
      <span className="sm:hidden">Software Engineering & AI Studio</span>
    </span>
  </motion.div>
);

export default HeroBadge;
