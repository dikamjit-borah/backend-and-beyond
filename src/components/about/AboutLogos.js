import React from "react";
import { motion } from "framer-motion";
import logo1 from "../../images/logo1.avif";
import logo2 from "../../images/logo2.avif";
import logo3 from "../../images/logo3.avif";
import logo4 from "../../images/logo4.avif";
import logo5 from "../../images/logo5.avif";

const AboutLogos = () => {
  return (
    <motion.div 
      className="pt-6 md:pt-8 grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 items-center opacity-70 w-full"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 0.7 }
      }}
      transition={{ duration: 1.0, delay: 1.5 }}
    >
      <motion.img 
        src={logo1} 
        alt="Client Logo" 
        className="h-16 md:h-18 w-auto filter grayscale" 
        whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0)" }}
        transition={{ duration: 0.3 }}
      />
      <motion.img 
        src={logo2} 
        alt="Client Logo" 
        className="h-16 md:h-18 w-auto filter grayscale" 
        whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0)" }}
        transition={{ duration: 0.3 }}
      />
      <motion.img 
        src={logo3} 
        alt="Client Logo" 
        className="h-16 md:h-18 w-auto filter grayscale" 
        whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0)" }}
        transition={{ duration: 0.3 }}
      />
      <motion.img 
        src={logo4} 
        alt="Client Logo" 
        className="h-16 md:h-18 w-auto filter grayscale" 
        whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0)" }}
        transition={{ duration: 0.3 }}
      />
      <motion.img 
        src={logo5} 
        alt="Client Logo" 
        className="h-16 md:h-18 w-auto filter grayscale " 
        whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0)" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default AboutLogos;
