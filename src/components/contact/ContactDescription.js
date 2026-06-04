import React from "react";
import { motion } from "framer-motion";

const ContactDescription = () => (
  <motion.p
    className="font-jost text-sm md:text-base mb-8 leading-relaxed"
    style={{ color: 'rgba(250,248,244,0.45)' }}
    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
    transition={{ duration: 0.6, delay: 0.5 }}
  >
    Tell us what you are working on. We reply within one business day and can usually scope a project on the first call.
  </motion.p>
);

export default ContactDescription;
