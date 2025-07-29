import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  StarField,
  HeroBadge,
  HeroHeading,
  HeroDescription,
  CTAButton,
  TrustedBySection
} from "./hero";

const HeroSection = ({ darkMode }) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  // Text configurations for the typewriter effect
  const changingWords = ["Autonomous Systems", "Data-Driven Interfaces", "AI-Crafted Solutions", "Applied Intelligence"];
  const mobileWords = ["AI Systems", "Smart Interfaces", "AI Solutions", "Intelligence"];

  // Effect for window resize
  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-black"
      style={{
        background: `
          linear-gradient(120deg, #000 50%, #0f1e36 60%, #2e73e220 70%, #5c99ff40 75%, #ffffff 85%, #ffffff 87%, #3b83f660 93%, #3b83f640 100%)
        `,
      }}
    >
      {/* Star field background */}
      <StarField windowSize={windowSize} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-start justify-center px-4 sm:px-6 md:px-8 lg:px-24 max-w-4xl w-full pt-16 md:pt-0">
        <HeroBadge />
        <HeroHeading 
          changingWords={changingWords}
          mobileWords={mobileWords}
        />
        <HeroDescription />
        <CTAButton onClick={scrollToContact}>
          Get a Free Consultation
        </CTAButton>
      </div>

      {/* Trusted by section */}
      <TrustedBySection />
    </section>
  );
};

export default HeroSection;
