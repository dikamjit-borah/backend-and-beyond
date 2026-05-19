import React from "react";
import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "AI Agents & Automation",
  "Smart Software Systems",
  "Data Intelligence",
  "Brand & UI/UX Design",
  "Blockchain Development",
  "Full-Stack Engineering",
];

const TrustedBySection = () => {
  const text = MARQUEE_ITEMS.map((item, i) => (
    <React.Fragment key={i}>
      <span style={{ color: 'rgba(250,248,244,0.45)', letterSpacing: '0.18em' }}>{item}</span>
      <span style={{ color: 'var(--accent)', margin: '0 20px', opacity: 0.8 }}>✦</span>
    </React.Fragment>
  ));

  return (
    <motion.div
      className="w-full overflow-hidden"
      style={{ background: 'var(--ink)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.2 }}
    >
      <div className="py-3 overflow-hidden">
        <div className="marquee-track font-barlow text-xs font-bold uppercase">
          {text}{text}
        </div>
      </div>
    </motion.div>
  );
};

export default TrustedBySection;
