import React from "react";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const items = [
  { icon: <Mail size={16} />, text: "hello@backendandbeyond.com" },
  { icon: <><Phone size={16} /><FaWhatsapp size={16} style={{ color: '#25D366' }} /></>, text: "(+91) 70029 36200  ·  (+91) 84020 89446" },
];

const ContactInfo = () => (
  <motion.div
    className="space-y-3 mb-6"
    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 1.3 } } }}
  >
    {items.map((item, idx) => (
      <motion.div
        key={idx}
        className="flex items-center gap-3 font-barlow text-sm transition-colors duration-200"
        style={{ color: 'rgba(250,248,244,0.6)' }}
        variants={{ hidden: { y: 16, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } } }}
        whileHover={{ x: 4, color: 'var(--cream)' }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span style={{ color: 'var(--accent)', display: 'flex', gap: '4px', alignItems: 'center' }}>{item.icon}</span>
        {item.text}
      </motion.div>
    ))}
  </motion.div>
);

export default ContactInfo;
