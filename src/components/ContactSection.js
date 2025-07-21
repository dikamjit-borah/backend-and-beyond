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
      className="bg-black py-[10rem] px-4 relative"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Vertical CONTACT label */}
      <motion.div
        className="absolute left-0 top-24 h-auto flex items-start z-10"
        variants={{
          hidden: { x: -50, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <motion.div
          className="bg-gray-900 px-4 py-8 flex items-center"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.2em', borderRadius: '0 0.5rem 0.5rem 0' }}
          whileHover={{
            backgroundColor: "#1A1A1A",
            transition: { duration: 0.3 }
          }}
        >
          <motion.span
            className="text-white text-lg font-semibold tracking-widest"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            CONTACT
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto"
        variants={itemVariants}
      >
        <motion.div
          className="grid lg:grid-cols-[1.2fr_1.5fr] gap-16"
          variants={itemVariants}
        >
          {/* Left Side - Contact Info */}
          <motion.div
            className="bg-gradient-to-b from-[#4A9EFF] via-[#4A9EFF] to-[#cae1fa] p-6 lg:p-10 text-white rounded-2xl"
            variants={contactCardVariants}
            whileHover={{
              boxShadow: "0 10px 30px rgba(74, 158, 255, 0.3)",
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h3
              className="font-boowie text-md mb-6 font-bold"
              variants={itemVariants}
            >
              Get in touch
            </motion.h3>

            <motion.div
              className="space-y-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              {/*               <motion.div
                className="space-y-1"
                variants={itemVariants}
                whileHover={{ x: 3, transition: { duration: 0.2 } }}
              >
                <motion.h4
                  className="font-medium text-sm"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.span
                    className="inline-flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <MapPin size={16} className="mr-2" />
                    Visit us
                  </motion.span>
                </motion.h4>
                <motion.p className="text-xs opacity-90">Come say hello at our office HQ.</motion.p>
                <motion.p className="text-xs opacity-90">67 Wisteria Way Croydon South VIC 3136 AU</motion.p>
              </motion.div> */}

              <motion.div
                className="space-y-1"
                variants={itemVariants}
                whileHover={{ x: 3, transition: { duration: 0.2 } }}
              >
                <motion.h4
                  className="font-medium text-sm"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.span
                    className="inline-flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mail size={16} className="mr-2" />
                    Chat with us
                  </motion.span>
                </motion.h4>
                <motion.p className="text-xs opacity-90">Our team is here to help.</motion.p>
                <motion.p className="text-xs opacity-90">hello@backendandbeyond.com</motion.p>
              </motion.div>

              <motion.div
                className="space-y-1"
                variants={itemVariants}
                whileHover={{ x: 3, transition: { duration: 0.2 } }}
              >
                <motion.h4
                  className="font-medium text-sm"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.span
                    className="inline-flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Phone size={16} className="mr-2" />
                    Call us
                  </motion.span>
                </motion.h4>
                <motion.p className="text-xs opacity-90">Mon-Fri 9am to 7pm</motion.p>
                <motion.p className="text-xs opacity-90">(+91) 70029 36200</motion.p>
                <motion.p className="text-xs opacity-90">(+91) 84020 89446</motion.p>

              </motion.div>

              <motion.div
                className="space-y-1"
                variants={itemVariants}
                whileHover={{ x: 3, transition: { duration: 0.2 } }}
              >
                <motion.h4
                  className="font-medium text-sm"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Social media
                </motion.h4>
                <motion.div
                  className="flex space-x-3"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    }
                  }}
                >
                  <motion.a
                    href="#"
                    aria-label="Facebook"
                    className="hover:text-blue-200 transition-colors"
                    whileHover={{ scale: 1.3, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    variants={itemVariants}
                  >
                    <Facebook size={16} />
                  </motion.a>
                  <motion.a
                    href="#"
                    aria-label="LinkedIn"
                    className="hover:text-blue-200 transition-colors"
                    whileHover={{ scale: 1.3, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    variants={itemVariants}
                  >
                    <Linkedin size={16} />
                  </motion.a>
                  <motion.a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-blue-200 transition-colors"
                    whileHover={{ scale: 1.3, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    variants={itemVariants}
                  >
                    <Instagram size={16} />
                  </motion.a>
                  <motion.a
                    href="#"
                    aria-label="Twitter"
                    className="hover:text-blue-200 transition-colors"
                    whileHover={{ scale: 1.3, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    variants={itemVariants}
                  >
                    <Twitter size={16} />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="pl-10"
            variants={itemVariants}
            transition={{ delay: 0.3 }}
          >
            {state.succeeded ? (
              <motion.div
                className="text-green-500 text-lg font-semibold text-center h-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
              >
                <div>
                  <svg className="w-16 h-16 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p>Message sent! We'll get back to you soon.</p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-5"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.07,
                      delayChildren: 0.3
                    }
                  }
                }}
              >
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  variants={itemVariants}
                >
                  <div>
                    <label className="block text-xs font-medium mb-2 text-gray-300">First Name</label>
                    <motion.input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your first name"
                      className="w-full px-3 py-2 rounded-lg border border-gray-800 bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                      whileFocus={{
                        borderColor: "#4A9EFF",
                        boxShadow: "0 0 0 2px rgba(74, 158, 255, 0.25)"
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2 text-gray-300">Last Name</label>
                    <motion.input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your last name"
                      className="w-full px-3 py-2 rounded-lg border border-gray-800 bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                      whileFocus={{
                        borderColor: "#4A9EFF",
                        boxShadow: "0 0 0 2px rgba(74, 158, 255, 0.25)"
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-xs font-medium mb-2 text-gray-300">Company Name</label>
                  <motion.input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter your company"
                    className="w-full px-3 py-2 rounded-lg border border-gray-800 bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                    whileFocus={{
                      borderColor: "#4A9EFF",
                      boxShadow: "0 0 0 2px rgba(74, 158, 255, 0.25)"
                    }}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-xs font-medium mb-2 text-gray-300">Email</label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="yourname@gmail.com"
                    className="w-full px-3 py-2 rounded-lg border border-gray-800 bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                    whileFocus={{
                      borderColor: "#4A9EFF",
                      boxShadow: "0 0 0 2px rgba(74, 158, 255, 0.25)"
                    }}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-xs font-medium mb-2 text-gray-300">Phone Number</label>
                  <div className="flex">
                    <div className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-800 bg-transparent">
                      <span className="text-gray-400 text-xs">IN</span>
                    </div>
                    <motion.input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-3 py-2 rounded-r-lg border border-gray-800 bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                      whileFocus={{
                        borderColor: "#4A9EFF",
                        boxShadow: "0 0 0 2px rgba(74, 158, 255, 0.25)"
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-xs font-medium mb-2 text-gray-300">Message</label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Tell us what we can help you with"
                    className="w-full px-3 py-4 rounded-lg border border-gray-800 bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm"
                    whileFocus={{
                      borderColor: "#4A9EFF",
                      boxShadow: "0 0 0 2px rgba(74, 158, 255, 0.25)"
                    }}
                  ></motion.textarea>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="flex items-center h-5">
                    <motion.input
                      id="privacyPolicy"
                      name="privacyPolicy"
                      type="checkbox"
                      checked={formData.privacyPolicy}
                      onChange={handleChange}
                      required
                      className="w-3 h-3 text-blue-600 rounded border border-gray-600 focus:ring-blue-500 appearance-none checked:bg-blue-600 bg-gray-900"
                      style={{ backgroundColor: '#121212' }}
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                  <label htmlFor="privacyPolicy" className="ml-2 text-xs text-gray-400">
                    I'd like to receive more information about company, I understand and agree to the{" "}
                    <motion.a
                      href="#"
                      className="text-blue-400 hover:underline"
                      whileHover={{ color: "#ffffff" }}
                    >
                      Privacy Policy
                    </motion.a>
                  </label>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-[#4A9EFF] hover:bg-[#3A8EEF] text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 mt-4 text-sm"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 4px 12px rgba(74, 158, 255, 0.35)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </motion.button>

                {state.errors && state.errors.length > 0 && (
                  <motion.div
                    className="text-red-500 mt-4 text-sm"
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
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
