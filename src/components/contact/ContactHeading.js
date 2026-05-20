import React from "react";
import { motion } from "framer-motion";

const ContactHeading = ({ isInView }) => (
  <motion.h2
    className="font-boowie leading-none mb-8 md:mb-12"
    style={{
      fontSize: "clamp(3rem, 8.5vw, 7.5rem)",
      color: "var(--cream)",
      letterSpacing: "-0.02em",
    }}
    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    <motion.span
      className="block"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      Let's build
    </motion.span>
    <motion.span
      className="block"
      style={{ color: "rgba(250,248,244,0.28)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.55 }}
    >
      something
    </motion.span>
    <motion.span
      className="block"
      style={{ color: "var(--accent)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      great.
    </motion.span>
  </motion.h2>
);

export default ContactHeading;
