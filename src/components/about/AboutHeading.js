import React from "react";
import { motion } from "framer-motion";

const AboutHeading = () => {
  return (
    <motion.div 
      className="relative mb-8 md:mb-12 max-w-lg"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <motion.div 
        className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-b from-purple-900 to-black"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 0.8, delay: 0.6 }}
      ></motion.div>
      <div className="pl-5 md:pl-4">
        <motion.h2 
          className="font-boowie text-2xl sm:text-3xl md:text-3xl mb-1 md:mb-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >Seamless tech</motion.h2>
        <motion.h2 
          className="font-boowie text-2xl sm:text-3xl md:text-3xl mb-1 md:mb-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >elegant design & engineered for </motion.h2>
        <motion.h2 
          className="font-boowie text-2xl sm:text-3xl md:text-3xl mb-2 text-purple-600"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >modern businesses.</motion.h2>
      </div>
    </motion.div>
  );
};

export default AboutHeading;
