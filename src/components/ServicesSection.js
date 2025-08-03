import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  ServicesLabel,
  ServicesHeading,
  ServicesList,
  ServicesDescription,
  ServicesImage
} from './services';

const ServicesSection = ({ darkMode }) => {
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
      id="services"
      className="relative min-h-screen flex items-center justify-center py-12 md:py-24 bg-black overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      transition={{ duration: 0.5 }}
    >
      <ServicesLabel />
      
      {/* Main content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 relative z-20 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16">
          {/* Left: Services List */}
          <motion.div
            className="flex flex-col justify-center w-full lg:w-2/3"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ServicesHeading isInView={isInView} />
            <ServicesList />
          </motion.div>

          {/* Right: Description and Image */}
          <motion.div
            className="flex flex-col items-center md:items-end justify-center w-full lg:w-1/3 mt-8 lg:mt-3"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <ServicesDescription isInView={isInView} />
            <ServicesImage isInView={isInView} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
