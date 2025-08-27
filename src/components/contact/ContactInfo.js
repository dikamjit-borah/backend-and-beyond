import React from "react";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactInfo = () => {
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
      className="space-y-4"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 1.3
          }
        }
      }}
    >
      <motion.div
        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Mail size={20} className="text-blue-400" />
        <span className="text-sm">hello@backendandbeyond.com</span>
      </motion.div>
      
      <motion.div
        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
        variants={itemVariants}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex items-center space-x-2">
          <Phone size={20} className="text-blue-400" />
          <FaWhatsapp size={20} className="text-green-400" />
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-sm">(+91) 70029 36200</span>
          <span className="text-sm">(+91) 84020 89446</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
