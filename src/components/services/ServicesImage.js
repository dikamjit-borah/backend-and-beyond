import React from "react";
import { motion } from "framer-motion";
import showcaseImg from "../../images/Showcase MD.avif";

const ServicesImage = ({ isInView }) => {
  return (
    <motion.div
      className="relative"
      variants={{
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0 }
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.7,
        duration: 0.8
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        className="absolute -top-3 md:-top-6 left-3 md:left-6 w-full h-full bg-gray-700 rounded-2xl opacity-60 z-0"
        style={{ filter: 'blur(2px)' }}
        animate={isInView ? {
          x: [0, 5, 0, -5, 0],
          y: [0, -5, 0, 5, 0],
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 12,
            ease: "easeInOut"
          }
        } : {}}
      ></motion.div>
      <motion.img
        src={showcaseImg}
        alt="Showcase"
        className="relative z-10 rounded-2xl shadow-2xl w-[280px] sm:w-[350px] md:w-[420px] border-2 md:border-4 border-gray-800 object-cover"
        style={{ aspectRatio: '16/10', background: '#222' }}
        animate={isInView ? {
          x: [0, -3, 0, 3, 0],
          y: [0, 3, 0, -3, 0],
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 10,
            ease: "easeInOut"
          }
        } : {}}
      />
    </motion.div>
  );
};

export default ServicesImage;
