import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterText = ({ words, mobileWords, className }) => {
  const [displayedText, setDisplayedText]     = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting]           = useState(false);
  const [typingSpeed, setTypingSpeed]         = useState(120);
  const [isMobile, setIsMobile]               = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const currentWords = isMobile && mobileWords ? mobileWords : words;

  useEffect(() => {
    const handleTypewriter = () => {
      const currentWord = currentWords[currentWordIndex];
      if (!isDeleting) {
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
          setTypingSpeed(Math.random() * 50 + 120);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1));
          setTypingSpeed(40);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex(prev => (prev + 1) % currentWords.length);
          setTypingSpeed(120);
        }
      }
    };
    const timer = setTimeout(handleTypewriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, currentWordIndex, isDeleting, typingSpeed, currentWords]);

  return (
    <div 
      className={`relative inline-block min-w-0 text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] ${className || ''}`} 
      style={{ 
        minHeight: '1rem'
      }}
    >
      {/* Invisible spacer to prevent layout shift */}
      <span className="opacity-0 pointer-events-none absolute top-0 left-0" aria-hidden="true">
        <span className="hidden sm:inline">Data-Driven Interfaces</span>
        <span className="sm:hidden">AI Solutions</span>
      </span>

      <motion.span
        className="relative z-10"
        style={{ color: 'var(--accent)' }}
        key={currentWordIndex}
      >
        {displayedText}
        {/* Cursor */}
        <motion.span
          className="inline-block ml-0.5"
          style={{
            width: '2px',
            height: '0.85em',
            background: 'var(--accent)',
            verticalAlign: 'baseline',
            transform: 'translateY(0.05em)',
            display: 'inline-block',
          }}
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.span>
    </div>
  );
};

export default TypewriterText;
