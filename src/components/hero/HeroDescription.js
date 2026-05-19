import React from "react";
import { motion } from "framer-motion";

const HeroDescription = () => (
  <motion.p
    className="font-barlow text-sm sm:text-base mb-6 md:mb-8 text-left max-w-xl leading-relaxed"
    style={{ color: 'var(--text-sub)' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.6 }}
  >
    <span className="hidden sm:inline">SaaS Solutions · AI-Powered Agents · Intelligent Dashboards · Next-Gen Data Visualization · Full-Stack Web & Mobile</span>
    <span className="sm:hidden">AI-Powered Solutions · Smart Dashboards · Full-Stack Development</span>
  </motion.p>
);

export default HeroDescription;
