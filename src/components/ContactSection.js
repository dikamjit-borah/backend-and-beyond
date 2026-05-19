import React, { useState, useRef, useEffect } from "react";
import { useForm } from "@formspree/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ContactLabel, ContactLeftSide, ContactForm } from "./contact";
import ContactHeading from "./contact/ContactHeading";

const ContactSection = () => {
  const controls   = useAnimation();
  const sectionRef = useRef(null);
  const isInView   = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  const itemVariants = {
    hidden:  { y: 20, opacity: 0 },
    visible: { y: 0,  opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  const defaultFormData = {
    firstName: "", lastName: "", companyName: "",
    email: "", phone: "", message: "", referralCode: "", privacyPolicy: false,
  };

  const [state, handleSubmit] = useForm("meoloedq");
  const [formData, setFormData] = useState(defaultFormData);

  useEffect(() => {
    if (state.succeeded) setFormData(defaultFormData);
  }, [state.succeeded]);

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen py-16 md:py-24 lg:py-32"
      style={{ background: "var(--ink)" }}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Faint "CONTACT" watermark */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-8 font-epilogue font-black uppercase pointer-events-none select-none hidden lg:block"
        style={{
          fontSize: '100px',
          color: 'rgba(250,248,244,0.025)',
          letterSpacing: '0.05em',
          lineHeight: 1,
        }}
      >
        CONTACT
      </span>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 w-full">

        {/* Full-width label + heading */}
        <motion.div variants={itemVariants}>
          <ContactLabel />
          <ContactHeading isInView={isInView} />
        </motion.div>

        {/* Divider */}
        <motion.div
          className="mb-10 md:mb-14"
          style={{ borderTop: "1px solid rgba(250,248,244,0.15)" }}
          variants={itemVariants}
        />

        {/* Two columns: info left, form right */}
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16 lg:gap-24">
          <ContactLeftSide isInView={isInView} />
          <motion.div
            className="w-full md:w-1/2 flex-shrink-0"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
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
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
