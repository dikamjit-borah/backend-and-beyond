import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const AboutStats = ({ isInView }) => {
  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 pt-6 md:pt-8 mt-6 md:mt-8 w-full"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.8, delay: 1.0 }}
    >
      <motion.div 
        className="text-left"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        <motion.p 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {isInView && <AnimatedCounter value="85%" duration={2.5} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white" />}
        </motion.p>
        <p className="text-xs md:text-xs text-white mt-1 font-bold font-neutraface">Client Referral Rate</p>
      </motion.div>
      <motion.div 
        className="text-left"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <motion.p 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          {isInView && <AnimatedCounter value="210+" duration={2.5} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white" />}
        </motion.p>
        <p className="text-xs md:text-xs text-white mt-1 font-bold font-neutraface">Projects Delivered</p>
      </motion.div>
      <motion.div 
        className="text-left"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        <motion.p 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          {isInView && <AnimatedCounter value="30+" duration={2.5} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white" />}
        </motion.p>
        <p className="text-xs md:text-xs text-white mt-1 font-bold font-neutraface">Industry Served</p>
      </motion.div>
      <motion.div 
        className="text-left"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <motion.p 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          {isInView && <AnimatedCounter value="100%" duration={2.5} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white" />}
        </motion.p>
        <p className="text-xs md:text-xs text-white mt-1 font-bold font-neutraface">In-House Designers</p>
      </motion.div>
    </motion.div>
  );
};

export default AboutStats;
