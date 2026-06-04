import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  StarField,
  GeometricField,
  HeroBadge,
  HeroHeading,
  HeroDescription,
  CTAButton,
  TrustedBySection
} from "./hero";

const HeroSection = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      <div className="flex-1 flex relative min-h-screen">

        {/* Atmospheric right-side depth — very subtle ink + accent glows */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 85% 35%, rgba(45,10,107,0.055) 0%, transparent 52%),
              radial-gradient(ellipse at 68% 72%, rgba(232,93,0,0.022) 0%, transparent 38%)
            `,
            zIndex: 0,
          }}
        />

        {/* Full-screen star field masked to emerge from the right — no hard edge */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            zIndex: 1,
            maskImage: 'linear-gradient(to right, transparent 0%, transparent 42%, rgba(0,0,0,0.45) 58%, black 72%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 42%, rgba(0,0,0,0.45) 58%, black 72%)',
          }}
        >
          <StarField windowSize={windowSize} starColor="#2D0A6B" />
        </div>

        {/* Giant "&" backdrop — anchored in right zone */}
        <span
          className="font-boowie select-none pointer-events-none absolute hidden lg:block"
          style={{
            fontSize: 'clamp(180px, 20vw, 360px)',
            color: 'var(--ink)',
            opacity: 0.05,
            lineHeight: 1,
            top: '50%',
            right: '8%',
            transform: 'translateY(-50%)',
            zIndex: 2,
          }}
        >&</span>

        {/* Vertical label */}
        <div
          className="absolute bottom-16 right-8 font-jost text-xs font-bold uppercase tracking-widest hidden lg:block"
          style={{
            color: 'rgba(45,10,107,0.22)',
            writingMode: 'vertical-rl',
            letterSpacing: '0.3em',
            zIndex: 2,
          }}
        >
          Backend & Beyond — Est. 2025
        </div>

        {/* Left content panel */}
        <div
          className="relative flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 w-full lg:w-3/5 pt-24 lg:pt-0 pb-32 lg:pb-24"
          style={{ zIndex: 3 }}
        >
          {/* Vertical accent bar */}
          <motion.div
            className="absolute left-0 top-1/4 bottom-1/4 w-0.5 hidden md:block"
            style={{ background: 'var(--accent)', opacity: 0.4 }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          />

          {/* Mobile background field */}
          <div className="lg:hidden absolute inset-0 pointer-events-none overflow-hidden">
            <GeometricField />
          </div>

          <div className="relative">
            <HeroBadge />
            <HeroHeading />
            <HeroDescription />
            <CTAButton onClick={scrollToContact}>
              Start a Project →
            </CTAButton>
          </div>
        </div>
      </div>

      <TrustedBySection />
    </section>
  );
};

export default HeroSection;
