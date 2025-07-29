import React, { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
// Add Formspree hook
import { useForm } from "@formspree/react";
import { motion, useAnimation, useInView } from "framer-motion";

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
      {/* Vertical CONTACT label - Desktop only */}
      <motion.div
        className="absolute left-0 top-24 h-auto flex items-start z-10 hidden lg:flex"
        variants={{
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
      >
        <motion.div
          className="bg-gray-900 px-4 py-8 flex items-center"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.2em', borderRadius: '0 0.5rem 0.5rem 0' }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-white text-lg font-semibold tracking-widest">CONTACT</span>
        </motion.div>
      </motion.div>

      {/* Mobile section label - positioned at top */}
      <motion.div 
        className="absolute top-0 right-5 transform -translate-x-1/2 lg:hidden z-10"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="bg-gray-900 px-6 py-3 rounded-b-lg"
          style={{ borderRadius: '0 0 0.5rem 0.5rem' }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-white text-sm sm:text-base font-semibold tracking-widest">CONTACT</span>
        </motion.div>
      </motion.div>

      {/* Main content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-20">
        <motion.div
          className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16"
          variants={itemVariants}
        >
          {/* Left Side - Heading and Description */}
          <motion.div
            className="flex flex-col justify-center w-full lg:w-1/2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2
              className="font-boowie text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8 text-white leading-tight"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Let's create
              </motion.span>{" "}
              <motion.span
                className="text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                something
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                exceptional
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Ready to transform your vision into reality? Let's discuss your project and explore how we can bring your ideas to life with cutting-edge technology and thoughtful design.
            </motion.p>

            {/* Contact Info Cards */}
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
                <Phone size={20} className="text-blue-400" />
                <span className="text-sm">(+91) 70029 36200</span>
              </motion.div>
            </motion.div>

            {/* Social Links */}
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
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {state.succeeded ? (
              <motion.div
                className="flex flex-col items-center justify-center text-center py-16 px-8 border border-gray-700 rounded-lg bg-gray-900/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
              >
                <motion.svg 
                  className="w-16 h-16 mb-6 text-green-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </motion.svg>
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.3
                    }
                  }
                }}
              >
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  variants={itemVariants}
                >
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-300">First Name</label>
                    <motion.input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                      whileFocus={{
                        borderColor: "#60A5FA",
                        boxShadow: "0 0 0 2px rgba(96, 165, 250, 0.25)"
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-300">Last Name</label>
                    <motion.input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                      whileFocus={{
                        borderColor: "#60A5FA",
                        boxShadow: "0 0 0 2px rgba(96, 165, 250, 0.25)"
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-3 text-gray-300">Company</label>
                  <motion.input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    whileFocus={{
                      borderColor: "#60A5FA",
                      boxShadow: "0 0 0 2px rgba(96, 165, 250, 0.25)"
                    }}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-3 text-gray-300">Email</label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    whileFocus={{
                      borderColor: "#60A5FA",
                      boxShadow: "0 0 0 2px rgba(96, 165, 250, 0.25)"
                    }}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-3 text-gray-300">Phone</label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    whileFocus={{
                      borderColor: "#60A5FA",
                      boxShadow: "0 0 0 2px rgba(96, 165, 250, 0.25)"
                    }}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-3 text-gray-300">Project Details</label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project, goals, and how we can help bring your vision to life..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900/50 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                    whileFocus={{
                      borderColor: "#60A5FA",
                      boxShadow: "0 0 0 2px rgba(96, 165, 250, 0.25)"
                    }}
                  />
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <motion.input
                    id="privacyPolicy"
                    name="privacyPolicy"
                    type="checkbox"
                    checked={formData.privacyPolicy}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 mt-1 text-blue-600 rounded border border-gray-600 focus:ring-blue-500 bg-gray-900"
                    whileHover={{ scale: 1.1 }}
                  />
                  <label htmlFor="privacyPolicy" className="text-sm text-gray-400 leading-relaxed">
                    I agree to the{" "}
                    <motion.a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 underline"
                      whileHover={{ color: "#93C5FD" }}
                    >
                      Privacy Policy
                    </motion.a>{" "}
                    and consent to being contacted about this inquiry.
                  </label>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.25)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {state.submitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>

                {state.errors && state.errors.length > 0 && (
                  <motion.div
                    className="text-red-400 text-sm space-y-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {state.errors.map((err, idx) => (
                      <div key={idx}>{err.message}</div>
                    ))}
                  </motion.div>
                )}
              </motion.form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
