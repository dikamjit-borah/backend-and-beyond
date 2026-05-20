import React from "react";
import { motion } from "framer-motion";

const ServicesHeading = ({ isInView }) => (
  <motion.h2
    className="font-boowie text-3xl md:text-4xl lg:text-6xl mb-10 md:mb-14 leading-tight"
    style={{ color: 'var(--cream)' }}
    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <motion.span
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      Smart Systems.
    </motion.span>
    <br />
    <motion.span
      style={{ color: 'rgba(250,248,244,0.55)' }}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      Seamless Scale.
    </motion.span>
  </motion.h2>
);

export default ServicesHeading;
