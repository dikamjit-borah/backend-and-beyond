import React from "react";
import { motion } from "framer-motion";
import ContactDescription from "./ContactDescription";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";

const ContactLeftSide = () => (
  <motion.div
    className="flex flex-col justify-start w-full md:w-1/2"
    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    <ContactDescription />
    <ContactInfo />
    <SocialLinks />
  </motion.div>
);

export default ContactLeftSide;
