import React from "react";
import { motion } from "framer-motion";

const ContactDescription = () => {
  return (
    <motion.p
      className="text-gray-400 text-sm md:text-lg mb-8 leading-relaxed"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay: 1.1 }}
    >
      Ready to transform your vision into reality? Let's discuss your project and explore how we can bring your ideas to life with cutting-edge technology and thoughtful design.
    </motion.p>
  );
};

export default ContactDescription;
