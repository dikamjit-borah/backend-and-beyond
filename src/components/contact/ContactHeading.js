import React from "react";
import { motion } from "framer-motion";

const ContactHeading = ({ isInView }) => {
  return (
    <motion.h2
      className="font-boowie text-2xl md:text-5xl mb-6 md:mb-8 text-white leading-tight"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Let's create
      </motion.span>{" "}
      <motion.span
        className="text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        something
      </motion.span>
      <br />
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        exceptional
      </motion.span>
    </motion.h2>
  );
};

export default ContactHeading;
