import React from "react";
import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "Backend Engineering",
  "AI Agent Development",
  "Custom Software",
  "Dashboard & Analytics",
  "Full-Stack Web Apps",
  "Mobile Applications",
  "Automation Pipelines",
  "API Architecture",
];

const TrustedBySection = () => {
  const text = MARQUEE_ITEMS.map((item, i) => (
    <React.Fragment key={i}>
      <span style={{ color: 'rgba(250,248,244,0.62)', letterSpacing: '0.18em' }}>{item}</span>
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
        <div className="marquee-track font-jost text-xs font-bold uppercase">
          {text}{text}
        </div>
      </div>
    </motion.div>
  );
};

export default TrustedBySection;
