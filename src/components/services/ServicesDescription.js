import React from "react";
import { motion } from "framer-motion";

const ServicesDescription = ({ isInView }) => {
  return (
    <motion.div
      className="mb-8 md:mb-16 lg:mb-32 max-w-xs text-center md:text-left"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay: 0.9 }}
    >
      <motion.p
        className="text-gray-300 text-sm md:text-sm mb-4 md:mb-6 font-neutraface"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        We build beautifully engineered digital solutions that blend design, intelligence, and scalability.
      </motion.p>
    </motion.div>
  );
};

export default ServicesDescription;
