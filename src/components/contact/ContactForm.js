import React from "react";
import { motion } from "framer-motion";

const inputStyle = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(250,248,244,0.2)',
  padding: '8px 0',
  fontFamily: "'Jost', sans-serif",
  fontSize: '13px',
  color: 'var(--cream)',
  outline: 'none',
  transition: 'border-color 0.2s ease',
};

const labelStyle = {
  display: 'block',
  fontFamily: "'Jost', sans-serif",
  fontSize: '10px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  marginBottom: '6px',
  color: 'rgba(250,248,244,0.45)',
};

const ContactForm = ({ state, handleSubmit, formData, handleChange, itemVariants }) => (
  <>
    {state.succeeded ? (
      <motion.div
        className="flex flex-col items-center justify-center text-center py-16 px-8"
        style={{ border: '1px solid rgba(250,248,244,0.15)' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
      >
        <motion.svg
          className="w-12 h-12 mb-4"
          fill="none"
          stroke="var(--accent)"
          viewBox="0 0 24 24"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </motion.svg>
        <h3 className="font-boowie text-xl mb-2" style={{ color: 'var(--cream)' }}>Message received.</h3>
        <p className="font-jost text-sm" style={{ color: 'rgba(250,248,244,0.5)' }}>We'll be in touch within 24 hours. Expect a direct reply from the team building your product — not an automated sequence.</p>
      </motion.div>
    ) : (
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-5"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
      >
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-5" variants={itemVariants}>
          <div>
            <label htmlFor="firstName" style={labelStyle}>First Name</label>
            <input id="firstName" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" style={inputStyle} className="contact-input" />
          </div>
          <div>
            <label htmlFor="lastName" style={labelStyle}>Last Name</label>
            <input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" style={inputStyle} className="contact-input" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <label style={labelStyle}>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" style={inputStyle} className="contact-input" />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label style={labelStyle}>Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={inputStyle} className="contact-input" />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label style={labelStyle}>Referral Code</label>
          <input type="text" name="referralCode" value={formData.referralCode} onChange={handleChange} placeholder="B&B-XXXXXXX25" style={inputStyle} className="contact-input" />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label style={labelStyle}>Project Details</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Tell us about your project..."
            className="contact-input"
            style={{ ...inputStyle, resize: 'none', borderBottom: '1px solid rgba(250,248,244,0.2)' }}
          />
        </motion.div>

        <motion.div className="flex items-start gap-3" variants={itemVariants}>
          <input
            id="privacyPolicy"
            name="privacyPolicy"
            type="checkbox"
            checked={formData.privacyPolicy}
            onChange={handleChange}
            required
            style={{ marginTop: '3px', accentColor: 'var(--accent)' }}
          />
          <label htmlFor="privacyPolicy" className="font-jost text-xs leading-relaxed" style={{ color: 'rgba(250,248,244,0.45)' }}>
            I agree to the{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
              Privacy Policy
            </a>
            {" "}and consent to being contacted about this inquiry.
          </label>
        </motion.div>

        <motion.button
          type="submit"
          disabled={state.submitting}
          className="w-full font-jost text-xs font-bold uppercase tracking-widest py-4 px-6 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ background: 'var(--accent)', color: 'var(--cream)', border: 'none' }}
          variants={itemVariants}
          whileHover={{ backgroundColor: '#FF7A2F' }}
          whileTap={{ scale: 0.98 }}
        >
          {state.submitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </span>
          ) : "Submit Inquiry →"}
        </motion.button>

        {state.errors?.length > 0 && (
          <motion.div className="font-jost text-xs space-y-1" style={{ color: 'var(--accent-lt)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {state.errors.map((err, idx) => <div key={idx}>{err.message}</div>)}
          </motion.div>
        )}
      </motion.form>
    )}
  </>
);

export default ContactForm;
