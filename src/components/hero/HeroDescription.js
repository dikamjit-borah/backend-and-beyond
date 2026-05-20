import React from "react";
import { motion } from "framer-motion";

const HeroDescription = () => (
  <motion.p
    className="font-jost text-sm sm:text-base mb-6 md:mb-8 text-left max-w-xl leading-relaxed"
    style={{ color: 'var(--text-sub)' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.6 }}
  >
    <span className="hidden sm:inline">We build AI agents, backend systems, and custom applications for startups and businesses that need software to do more than just run.</span>
    <span className="sm:hidden">AI agents, backend systems, and custom software — built for businesses that need results.</span>
  </motion.p>
);

export default HeroDescription;
