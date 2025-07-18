import React, { useState, useEffect, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });
  
  // Typewriter animation states
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  
  // Text configurations for the typewriter effect
  const changingWords = ["AI & Automation", "Smart Solutions", "Innovation", "Intelligence"];
  
  // Star configuration variables
  const maxStarSize = 2.5; // Maximum star size in pixels (stars will range from 1px to this value)
  const [shootingStars, setShootingStars] = useState([]);
  const shootingStarCount = 2; // Initial number of shooting stars to display
  const shootingStarFrequency = 4000; // New shooting star every 4 seconds (ms)
  const maxShootingStarSpeed = 1.2; // Maximum speed multiplier for shooting stars
  const minShootingStarSpeed = 0.8; // Minimum speed multiplier for shooting stars
  const maxShootingStarThickness = 0.8; // Maximum thickness of shooting stars in pixels
  const minShootingStarThickness = 0.5; // Minimum thickness of shooting stars in pixels

  // Separate useEffect for typewriter animation
  useEffect(() => {
    const handleTypewriter = () => {
      const currentWord = changingWords[currentWordIndex];
      
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
          setTypingSpeed(Math.random() * 50 + 120); // Smoother, more consistent typing speed
        } else {
          // Finished typing current word, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000); // Longer pause at end of word for smoother feel
          return;
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1));
          setTypingSpeed(40); // Smoother deletion speed
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % changingWords.length);
          setTypingSpeed(120); // Slightly longer pause before starting new word
        }
      }
    };

    const typewriterTimer = setTimeout(handleTypewriter, typingSpeed);
    
    return () => {
      clearTimeout(typewriterTimer);
    };
  }, [displayedText, currentWordIndex, isDeleting, typingSpeed]);

  // Separate useEffect for shooting stars and window resize (runs only once or on window resize)
  useEffect(() => {
    setIsVisible(true);
    
    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    // Function to create and animate a shooting star
    function createShootingStar() {
      // Create shooting stars that align with the 120° gradient
      // For a 120° angle (measured from positive x-axis), stars should start from top-right
      // and move towards bottom-left
      const edgePosition = Math.random();
      
      // Position stars along the top and right edges to follow the gradient direction
      const isTopEdge = edgePosition > 0.3; // 70% chance of starting from top edge
      
      let startX, startY;
      if (isTopEdge) {
        // Start from top edge
        startX = windowSize.width * 0.3 + (windowSize.width * 0.7 * Math.random()); // Right 70% of top edge
        startY = 0;
      } else {
        // Start from right edge
        startX = windowSize.width;
        startY = windowSize.height * 0.7 * Math.random(); // Top 70% of right edge
      }
      
      // Calculate angle to match the background gradient (120°)
      // We'll use angles between 110° and 130° to align with the gradient but with slight variation
      const angle = Math.random() * 20 + 110; // 110-130 degrees (centered around 120° gradient angle)
      
      const newShootingStar = {
        id: Math.random().toString(36).substring(7),
        startX: startX,
        startY: startY,
        length: Math.random() * 100 + 60, // Length between 60-160px
        angle: angle, // Use the downward angle
        speed: Math.random() * (maxShootingStarSpeed - minShootingStarSpeed) + minShootingStarSpeed, // Speed between min and max
        opacity: Math.random() * 0.3 + 0.7, // Opacity between 0.7-1.0
        thickness: Math.random() * (maxShootingStarThickness - minShootingStarThickness) + minShootingStarThickness, // Use thickness range variables
      };
      
      setShootingStars(prev => [...prev, newShootingStar]);
      
      // Remove shooting star after animation completes
      const duration = 2500 / newShootingStar.speed; // Longer visible duration
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== newShootingStar.id));
      }, duration + 500); // Add buffer time
    }
    
    // Create initial batch of shooting stars immediately
    for (let i = 0; i < shootingStarCount; i++) {
      setTimeout(() => {
        createShootingStar();
      }, i * 500); // Stagger initial shooting stars
    }
    
    // Create and animate shooting stars periodically
    const shootingStarInterval = setInterval(() => {
      createShootingStar();
    }, shootingStarFrequency); // Use configured frequency
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(shootingStarInterval);
    };
  }, [windowSize]); // Only depend on windowSize, not typewriter states
  
  // Generate star data
  const stars = useMemo(() => {
    const starArray = [];
    const count = 250;
    
    for (let i = 0; i < count; i++) {
      // Only place stars in the beam region (right 35% of the screen)
      let x, y;
      do {
        x = Math.random() * windowSize.width;
        y = Math.random() * windowSize.height;
      } while (x < windowSize.width * 0.65);
      
      starArray.push({
        id: i,
        x,
        y,
        size: Math.random() * (maxStarSize - 1) + 1, // Size between 1 and maxStarSize
        blinkDelay: Math.random() * 8,
        blinkDuration: Math.random() * 2 + 1.5,
        shouldBlink: Math.random() < 0.3 // 30% of stars will blink
      });
    }
    
    return starArray;
  }, [windowSize]);

  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-black"
      style={{
        background: `
          linear-gradient(120deg, #000 50%, #0f1e36 60%, #2e73e220 70%, #5c99ff40 75%, #ffffff 85%, #ffffff 87%, #3b83f660 93%, #3b83f640 100%)
        `,
      }}
    >
      {/* Star field with framer-motion */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Regular stars */}
        {stars.map(star => (
          <motion.div
            key={star.id}
            className="absolute bg-white"
            style={{
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
              borderRadius: '50%' // Ensure stars are perfectly round
            }}
            initial={{ opacity: star.shouldBlink ? 0.3 : star.size > 2 ? 0.9 : 0.7 }}
            animate={star.shouldBlink ? {
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.2, 1]
            } : {}}
            transition={star.shouldBlink ? {
              duration: star.blinkDuration,
              repeat: Infinity,
              delay: star.blinkDelay,
              ease: "easeInOut"
            } : {}}
          />
        ))}
        
        {/* Shooting stars with enhanced Framer Motion animations */}
        {shootingStars.map(shootingStar => (
          <motion.div
            key={shootingStar.id}
            className="absolute z-20" // Higher z-index for better visibility
            initial={{
              opacity: 0,
              x: shootingStar.startX,
              y: shootingStar.startY,
              scale: 0,
              rotate: shootingStar.angle - 180, // Rotate to align with motion direction
            }}
            animate={{
              opacity: [0, shootingStar.opacity, shootingStar.opacity, 0],
              x: [
                shootingStar.startX, 
                shootingStar.startX + (shootingStar.length * 8 * shootingStar.speed * Math.cos(shootingStar.angle * Math.PI/180))
              ],
              y: [
                shootingStar.startY, 
                shootingStar.startY + (shootingStar.length * 8 * shootingStar.speed * Math.sin(shootingStar.angle * Math.PI/180))
              ],
              scale: [0, 1, 1, 0.2],
            }}
            transition={{
              duration: 2.2 / shootingStar.speed,
              ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for a more natural motion
              times: [0, 0.15, 0.85, 1]
            }}
            style={{ 
              position: 'absolute',
              transformOrigin: 'left center', // Centered on the left edge
              pointerEvents: 'none'
            }}
          >
            {/* Shooting star trail */}
            <motion.div
              className="relative"
              style={{
                width: shootingStar.length,
                height: shootingStar.thickness || 2,
                borderRadius: '4px',
                background: 'linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 60%, rgba(70,151,255,0.9) 100%)',
                boxShadow: '0 0 8px 1px rgba(255, 255, 255, 0.5)'
              }}
              animate={{ 
                scaleX: [0.3, 1, 0.6], 
                opacity: [0.3, 1, 0.3] 
              }}
              transition={{ 
                duration: 2.2 / shootingStar.speed,
                times: [0, 0.5, 1],
                ease: "easeOut"
              }}
            >
              {/* Shooting star head/glow effect */}
              <motion.div
                className="absolute top-[-2px]"
                style={{
                  width: shootingStar.thickness * 5,
                  height: shootingStar.thickness * 5,
                  background: '#ffffff',
                  borderRadius: '50%',
                  filter: 'blur(1px)',
                  boxShadow: '0 0 10px 3px rgba(255, 255, 255, 0.8), 0 0 20px 6px rgba(70, 151, 255, 0.7)',
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{ 
                  opacity: [0, 1, 0.8, 0],
                  scale: [0.5, 1.3, 1, 0.8]
                }}
                transition={{ 
                  duration: 2.2 / shootingStar.speed,
                  times: [0, 0.3, 0.7, 1],
                  ease: "easeOut"
                }}
              />
              
              {/* Sparkle particles following the star */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: Math.random() * shootingStar.length * 0.7 + shootingStar.length * 0.2,
                    top: (Math.random() - 0.5) * (shootingStar.thickness * 2), // Scale with thickness
                    width: Math.random() * shootingStar.thickness + 1,
                    height: Math.random() * shootingStar.thickness + 1,
                    background: '#ffffff',
                    borderRadius: '50%',
                    boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.8)',
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                    y: [0, (Math.random() - 0.5) * 15]
                  }}
                  transition={{
                    duration: 1.8 / shootingStar.speed,
                    delay: Math.random() * 0.3,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-start justify-center px-8 md:px-24 max-w-3xl w-full">
        {/* Badge */}
        <motion.div 
          className="mb-4 flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold relative"
          style={{
            background: 'linear-gradient(145deg, #1f2329, #0f1217)',
            boxShadow: `
              0 6px 12px rgba(0, 0, 0, 0.6),
              0 2px 4px rgba(0, 0, 0, 0.3),
              0 1px 0 rgba(255, 255, 255, 0.05) inset,
              0 -1px 0 rgba(0, 0, 0, 0.4) inset
            `,
            border: '1px solid rgba(255, 255, 255, 0.05)',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)'
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Left punch hole */}
          <span className="inline-block w-3 h-3 rounded-full relative"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #4b5563, #1f2937)',
                  boxShadow: `
                    0 0 4px rgba(0, 0, 0, 0.6),
                    0 2px 4px rgba(0, 0, 0, 0.5),
                    0 -2px 2px rgba(0, 0, 0, 0.8) inset,
                    0 2px 2px rgba(255, 255, 255, 0.15) inset
                  `
                }}></span>
          {/* Fire emoji - using Google's Noto Color Emoji */}
          <span 
            className="text-xs" 
            role="img" 
            aria-label="fire"
            style={{
              fontFamily: "'Noto Color Emoji', 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif",
              fontSize: '14px',
              lineHeight: '1',
              display: 'inline-flex',
              alignItems: 'center'
            }}
          >
            🔥
          </span>
          <span className="text-xs text-gray-100 tracking-wide">THE BEST AGENCY IN AI</span>
          {/* Right punch hole */}
          <span className="inline-block w-3 h-3 rounded-full relative"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #4b5563, #1f2937)',
                  boxShadow: `
                    0 0 4px rgba(0, 0, 0, 0.6),
                    0 2px 4px rgba(0, 0, 0, 0.5),
                    0 -2px 2px rgba(0, 0, 0, 0.8) inset,
                    0 2px 2px rgba(255, 255, 255, 0.15) inset
                  `
                }}></span>
        </motion.div>
        {/* Headline with Typewriter Effect */}
        <motion.div
          className="font-boowie font-bold text-4xl md:text-5xl mb-1 text-left leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            // Pre-allocate height to prevent layout shifts
            minHeight: '180px',
            lineHeight: '1.1', // Consistent line height
          }}
        >
          {/* Static part of the heading - single line for consistent spacing */}
          <div className="bg-gradient-to-r from-blue-300 via-blue-100 to-white bg-clip-text text-transparent">
            The Future of Business Starts with{" "}

            {/* Magic wand icon */}
          
          </div>
          
          {/* Container for the changing text with fixed dimensions */}
          <div className="relative inline-block" style={{ minWidth: '420px', minHeight: '1rem' }}>
            {/* Background text for spacing (invisible but maintains layout) */}
            <span 
              className="absolute top-0 left-0 opacity-0 pointer-events-none bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent"
              aria-hidden="true"
            >
              AI & Automation
            </span>
            
            {/* Animated typewriter text */}
            <motion.span 
              className="relative z-10 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent"
              key={currentWordIndex} // Force re-render on word change
            >
              {displayedText}
              
              {/* Sci-fi cursor with pulsing glow effect */}
              <motion.span
                className="inline-block ml-1 relative"
                style={{
                  width: '2px',
                  height: '0.8em', // Match the text height exactly
                  background: 'linear-gradient(180deg, #3b82f6, #60a5fa)',
                  boxShadow: '0 0 10px #3b82f6, 0 0 20px #60a5fa, 0 0 30px #3b82f6',
                  borderRadius: '2px',
                  verticalAlign: 'baseline', // Align with text baseline
                  transform: 'translateY(0.05em)', // Fine-tune vertical position
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
          
        </motion.div>
        {/* Description */}
        <motion.p 
          className="font-neutraface text-base md:text-lg text-gray-500 mb-8 text-left max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Save time, improve efficiency, and make smarter decisions with AI solutions customized for your business
        </motion.p>
        {/* CTA Button */}
        <motion.button
          onClick={scrollToContact}
          className="text-white px-6 py-2 rounded-full font-semibold mb-12 text-base tracking-wide"
          style={{
            background: 'linear-gradient(135deg, #ffffffc9 0%, #3b82f6 25%, #3b82f6 75%, #ffffffd9 100%)',
            boxShadow: '0 4px 14px rgba(59, 130, 246, 0.5)',
            position: 'relative',
            overflow: 'hidden'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 6px 20px rgba(59, 130, 246, 0.7)' 
          }}
          whileTap={{ scale: 0.98 }}
        >
          Get a Free Consultation
        </motion.button>
      </div>
      
      {/* Trusted by logos - positioned at bottom */}
      <motion.div 
        className="absolute bottom-12 left-0 w-full px-8 md:px-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <div className="flex flex-col gap-2">
          <span className="text-xs text-gray-500 tracking-widest uppercase mb-4">Trusted by funded startups and tech giants alike</span>
          <div className="flex flex-wrap gap-8 items-center">
            {["Snowflake", "Cactus", "Vision", "Luminous", "ProNature", "Recharge"].map((company, index) => (
              <motion.span 
                key={company}
                className="text-gray-500 text-sm font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                whileHover={{ color: "#3b82f6", scale: 1.05 }}
              >
                {company}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
