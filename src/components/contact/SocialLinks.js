import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="flex space-x-4 mt-8"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 1.5
          }
        }
      }}
    >
      <motion.a
        href="#"
        aria-label="LinkedIn"
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-blue-400 transition-all duration-300"
        variants={itemVariants}
        whileHover={{ scale: 1.1, y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Linkedin size={16} />
      </motion.a>
      <motion.a
        href="#"
        aria-label="Twitter"
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-blue-400 transition-all duration-300"
        variants={itemVariants}
        whileHover={{ scale: 1.1, y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Twitter size={16} />
      </motion.a>
      <motion.a
        href="#"
        aria-label="Instagram"
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-blue-400 transition-all duration-300"
        variants={itemVariants}
        whileHover={{ scale: 1.1, y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Instagram size={16} />
      </motion.a>
    </motion.div>
  );
};

export default SocialLinks;
