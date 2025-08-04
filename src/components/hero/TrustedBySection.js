import React from "react";
import { motion } from "framer-motion";

const TrustedBySection = ({ companies = ["UFTA", "CodeProjekt", "Green Heaven Adventures", "Ocean Visuals"] }) => {
  return (
    <motion.div
      className="absolute bottom-6 md:bottom-12 left-0 w-full px-4 md:px-8 lg:px-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.2 }}
    >
      <div className="flex flex-col gap-2 text-left">
        <span className="text-xs text-gray-500 tracking-widest uppercase mb-2 md:mb-4">
          <span className="hidden sm:inline">Trusted by funded startups and tech giants alike</span>
          <span className="sm:hidden">Trusted by startups & tech giants</span>
        </span>
        <div className="flex flex-wrap gap-4 md:gap-8 items-center justify-start">
          {companies.map((company, index) => (
            <motion.span
              key={company}
              className="text-gray-500 text-xs sm:text-sm font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              whileHover={{ color: "#3b82f6", scale: 1.05 }}
            >
              {company}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TrustedBySection;
