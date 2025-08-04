import React from "react";
import { motion } from "framer-motion";
import arrowImg from "../../images/arrow (1).avif";

const AboutBadge = () => {
  return (
    <motion.div 
      className="mb-4 flex items-center justify-left pl-4 sm:pl-8"
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <span className="text-xs sm:text-sm uppercase tracking-wider text-gray-400">OUR ETHOS</span>
      <img
        src={arrowImg}
        alt="Arrow"
        className="ml-2 h-6 w-auto"
      />
    </motion.div>
  );
};

export default AboutBadge;
