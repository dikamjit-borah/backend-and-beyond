import React from "react";
import { motion } from "framer-motion";

const ServicesLabel = () => (
  <motion.div
    className="flex items-center gap-3 mb-6"
    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <span style={{ display: 'inline-block', width: '20px', height: '1.5px', background: 'var(--accent)', flexShrink: 0 }} />
    <span className="font-barlow text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
      What We Do
    </span>
  </motion.div>
);

export default ServicesLabel;
