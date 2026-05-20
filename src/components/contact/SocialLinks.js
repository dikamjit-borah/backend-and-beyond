import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "https://www.linkedin.com/company/backend-and-beyond", icon: <Linkedin size={15} />, label: "LinkedIn" },
  { href: "https://www.instagram.com/backendandbeyond/",          icon: <Instagram size={15} />, label: "Instagram" },
  { href: "https://x.com/backendandbeyond",                        icon: <Twitter size={15} />,   label: "Twitter / X" },
];

const SocialLinks = () => (
  <motion.div
    className="flex space-x-3 mt-8"
    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 1.5 } } }}
  >
    {links.map(link => (
      <motion.a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className="w-9 h-9 flex items-center justify-center"
        style={{
          border: '1.5px solid rgba(250,248,244,0.2)',
          color: 'rgba(250,248,244,0.5)',
        }}
        variants={{ hidden: { y: 16, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } } }}
        whileHover={{ scale: 1.08, borderColor: 'var(--accent)', color: 'var(--accent)' }}
        whileTap={{ scale: 0.95 }}
      >
        {link.icon}
      </motion.a>
    ))}
  </motion.div>
);

export default SocialLinks;
