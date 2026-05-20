import React from "react";
import { motion } from "framer-motion";

const AboutBadge = () => (
  <motion.div
    className="mb-4 flex items-center gap-3"
    variants={{ hidden: { opacity: 0, y: -16 }, visible: { opacity: 1, y: 0 } }}
    transition={{ duration: 0.4, delay: 0.3 }}
  >
    <span style={{ display: 'inline-block', width: '20px', height: '1.5px', background: 'var(--accent)', flexShrink: 0 }} />
    <span className="font-jost text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
      Our Ethos
    </span>
  </motion.div>
);

export default AboutBadge;
