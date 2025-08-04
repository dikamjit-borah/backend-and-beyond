import React from "react";
import { motion } from "framer-motion";

const ContactForm = ({ 
  state, 
  handleSubmit, 
  formData, 
  handleChange, 
  itemVariants 
}) => {
  return (
    <>
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
    </>
  );
};

export default ContactForm;
