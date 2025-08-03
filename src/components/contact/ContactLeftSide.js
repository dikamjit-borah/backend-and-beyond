import React from "react";
import { motion } from "framer-motion";
import ContactHeading from "./ContactHeading";
import ContactDescription from "./ContactDescription";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";

const ContactLeftSide = ({ isInView }) => {
  return (
    <motion.div
      className="flex flex-col justify-center w-full lg:w-1/2"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <ContactHeading isInView={isInView} />
      <ContactDescription />
      <ContactInfo />
      <SocialLinks />
    </motion.div>
  );
};

export default ContactLeftSide;
