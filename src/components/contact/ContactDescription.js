import React from "react";
import { motion } from "framer-motion";

const ContactDescription = () => (
  <motion.p
    className="font-jost text-sm md:text-base mb-8 leading-relaxed"
    style={{ color: 'rgba(250,248,244,0.45)' }}
    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
    transition={{ duration: 0.6, delay: 0.5 }}
  >
    Tell us what you're working on. We respond within one business day and can typically scope a project within the first call.
  </motion.p>
);

export default ContactDescription;
