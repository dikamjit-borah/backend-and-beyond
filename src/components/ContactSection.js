import React, { useState, useRef, useEffect } from "react";
// Add Formspree hook
import { useForm } from "@formspree/react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  ContactLabel,
  ContactLeftSide,
  ContactForm
} from "./contact";

const ContactSection = ({ darkMode = false }) => {
  // Animation controls and refs
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const contactCardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  // Start animations when section is in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Use Formspree hook
  const [state, handleSubmit] = useForm("xkgboyjn");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
    privacyPolicy: false,
  });

  // Reset form fields after successful submission
  React.useEffect(() => {
    if (state.succeeded) {
      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
        privacyPolicy: false,
      });
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-12 md:py-24 bg-black"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <ContactLabel />

      {/* Main content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-20">
        <motion.div
          className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16"
          variants={itemVariants}
        >
          {/* Left Side - Heading and Description */}
          <ContactLeftSide isInView={isInView} />

          {/* Right Side - Contact Form */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ContactForm 
              state={state}
              handleSubmit={handleSubmit}
              formData={formData}
              handleChange={handleChange}
              itemVariants={itemVariants}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
