import React from "react";
import { motion } from "framer-motion";

const ContactDescription = () => (
  <motion.p
    className="font-barlow text-sm md:text-base mb-8 leading-relaxed"
    style={{ color: 'rgba(250,248,244,0.45)' }}
    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
    transition={{ duration: 0.6, delay: 1.1 }}
  >
    Ready to transform your vision into reality? Let's discuss your project and explore how we can bring your ideas to life with cutting-edge technology and thoughtful design.
  </motion.p>
);

export default ContactDescription;
