import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  AboutBadge,
  AboutHeading,
  AboutImage,
  AboutContent,
  AboutStats,
  AboutLogos
} from "./about";

const AboutSection = ({ darkMode }) => {
  // Animation controls
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-12 md:py-24 bg-[#0D0D0D] text-white"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-12 lg:gap-6">
          {/* Left column with heading and image */}
          <motion.div 
            className="flex flex-col items-left w-full lg:w-2/5"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AboutBadge />
            <AboutHeading />
            <AboutImage />
          </motion.div>
          
          {/* Right column with content */}
          <motion.div 
            className="flex flex-col items-start w-full lg:w-3/5 pl-0 lg:pl-8 pt-2 mt-4 md:mt-8 lg:mt-0"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AboutContent />
            <AboutStats isInView={isInView} />
            <AboutLogos />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
