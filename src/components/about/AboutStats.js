import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: "7+",  label: "Years in Business" },
  { value: "30+", label: "Projects Delivered" },
  { value: "99%", label: "Uptime Guarantee" },
  { value: "4x",  label: "Revenue Growth" },
];

const AboutStats = ({ isInView }) => (
  <motion.div
    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 mt-6 w-full"
    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
    transition={{ duration: 0.8, delay: 1.0 }}
  >
    {stats.map((stat, idx) => (
      <motion.div
        key={stat.label}
        className="text-left"
        style={{ borderTop: '2px solid var(--ink)', paddingTop: '10px' }}
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 1.1 + idx * 0.1 }}
      >
        <p className="font-epilogue text-2xl sm:text-3xl md:text-4xl font-black" style={{ color: 'var(--ink)', lineHeight: 1 }}>
          {isInView && (
            <AnimatedCounter
              value={stat.value}
              duration={2.5}
              className="font-epilogue text-2xl sm:text-3xl md:text-4xl font-black"
            />
          )}
        </p>
        <p className="font-jost text-xs font-semibold uppercase tracking-wide mt-1" style={{ color: 'var(--text-sub)' }}>
          {stat.label}
        </p>
      </motion.div>
    ))}
  </motion.div>
);

export default AboutStats;
