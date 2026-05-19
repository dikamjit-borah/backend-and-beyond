import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../images/about.avif";

const AboutImage = () => (
  <motion.div
    className="mt-4 max-w-[20rem] sm:max-w-[25rem] w-full relative group"
    variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
    transition={{ duration: 0.7, delay: 1.0 }}
  >
    <img
      src={aboutImage}
      alt="Design workspace with notes and sketches"
      className="w-full h-auto"
      style={{ display: 'block' }}
    />
    {/* Indigo hover overlay */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style={{ background: 'rgba(45,10,107,0.08)' }}
    />
  </motion.div>
);

export default AboutImage;
