import React from "react";
import { motion } from "framer-motion";

const HeroDescription = () => {
  return (
    <motion.p
      className="font-neutraface text-sm sm:text-base md:text-lg text-gray-500 mb-6 md:mb-8 text-left max-w-xl leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
    >
      <span className="hidden sm:inline">SaaS Solutions | AI-Powered Agents | Intelligent Dashboards & Data Interfaces | Next-Gen Data Visualization | Full-Stack Web & Mobile Applications</span>
      <span className="sm:hidden">AI-Powered Solutions | Smart Dashboards | Full-Stack Development</span>
    </motion.p>
  );
};

export default HeroDescription;
