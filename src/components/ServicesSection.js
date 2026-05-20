import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  ServicesLabel,
  ServicesHeading,
  ServicesList,
} from './services';

const ServicesSection = () => {
  const controls = useAnimation();
  const ref       = React.useRef(null);
  const isInView  = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      id="services"
      className="relative min-h-screen flex items-center justify-center py-12 md:py-24 overflow-hidden"
      style={{ background: 'var(--ink)' }}
      initial="hidden"
      animate={controls}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      transition={{ duration: 0.5 }}
    >
      {/* Faint watermark */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-8 font-epilogue font-black uppercase pointer-events-none select-none hidden lg:block"
        style={{
          fontSize: '100px',
          color: 'rgba(250,248,244,0.025)',
          letterSpacing: '0.05em',
          lineHeight: 1,
        }}
      >
        SERVICES
      </span>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 relative z-10 w-full">
        <ServicesLabel />
        <motion.div
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ServicesHeading isInView={isInView} />
          <ServicesList />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
