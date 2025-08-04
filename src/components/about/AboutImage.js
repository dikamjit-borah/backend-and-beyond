import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../images/about.avif";

const AboutImage = () => {
  return (
    <motion.div 
      className="mt-4 max-w-[20rem] sm:max-w-[25rem] w-full"
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
      }}
      transition={{ duration: 0.7, delay: 1.0 }}
    >
      <img 
        src={aboutImage} 
        alt="Design workspace with notes and sketches" 
        className="rounded-lg w-full h-auto"
      />
    </motion.div>
  );
};

export default AboutImage;
