import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterText = ({ words, mobileWords, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use appropriate word list based on screen size
  const currentWords = isMobile && mobileWords ? mobileWords : words;

  useEffect(() => {
    const handleTypewriter = () => {
      const currentWord = currentWords[currentWordIndex];

      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
          setTypingSpeed(Math.random() * 50 + 120);
        } else {
          // Finished typing current word, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1));
          setTypingSpeed(40);
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % currentWords.length);
          setTypingSpeed(120);
        }
      }
    };

    const typewriterTimer = setTimeout(handleTypewriter, typingSpeed);

    return () => {
      clearTimeout(typewriterTimer);
    };
  }, [displayedText, currentWordIndex, isDeleting, typingSpeed, currentWords]);

  return (
    <div className={`relative inline-block ${className}`} style={{ minWidth: '250px', minHeight: '1rem' }}>
      {/* Background text for spacing (invisible but maintains layout) */}
      <span
        className="absolute top-0 left-0 opacity-0 pointer-events-none bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent"
        aria-hidden="true"
      >
        <span className="hidden sm:inline">Data-Driven Interfaces</span>
        <span className="sm:hidden">AI Solutions</span>
      </span>

      {/* Animated typewriter text */}
      <motion.span
        className="relative z-10 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent"
        key={currentWordIndex}
      >
        {displayedText}

        {/* Sci-fi cursor with pulsing glow effect */}
        <motion.span
          className="inline-block ml-1 relative"
          style={{
            width: '2px',
            height: '0.8em',
            background: 'linear-gradient(180deg, #3b82f6, #60a5fa)',
            boxShadow: '0 0 10px #3b82f6, 0 0 20px #60a5fa, 0 0 30px #3b82f6',
            borderRadius: '2px',
            verticalAlign: 'baseline',
            transform: 'translateY(0.05em)',
          }}
          animate={{
            opacity: [1, 0.2, 1],
            scaleY: [1, 0.9, 1],
            boxShadow: [
              '0 0 10px #3b82f6, 0 0 20px #60a5fa, 0 0 30px #3b82f6',
              '0 0 5px #3b82f6, 0 0 10px #60a5fa, 0 0 15px #3b82f6',
              '0 0 10px #3b82f6, 0 0 20px #60a5fa, 0 0 30px #3b82f6'
            ]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.span>

      {/* Glitch overlay effect for sci-fi feel */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.1) 45%, rgba(59,130,246,0.1) 55%, transparent 100%)',
          transform: 'skew(-10deg)',
        }}
        animate={{
          x: [-100, 500],
          opacity: [0, 0.3, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default TypewriterText;
