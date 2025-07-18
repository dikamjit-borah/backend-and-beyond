import React, { useState, useEffect, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });
  
  // Star configuration variables
  const maxStarSize = 2.5; // Maximum star size in pixels (stars will range from 1px to this value)
  const [shootingStars, setShootingStars] = useState([]);
  const shootingStarCount = 2; // Initial number of shooting stars to display
  const shootingStarFrequency = 4000; // New shooting star every 4 seconds (ms)
  const maxShootingStarSpeed = 1.2; // Maximum speed multiplier for shooting stars
  const minShootingStarSpeed = 0.8; // Minimum speed multiplier for shooting stars
  const maxShootingStarThickness = 0.8; // Maximum thickness of shooting stars in pixels
  const minShootingStarThickness = 0.5; // Minimum thickness of shooting stars in pixels

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
    
    // Create initial batch of shooting stars immediately
    for (let i = 0; i < shootingStarCount; i++) {
      setTimeout(() => {
        createShootingStar();
      }, i * 500); // Stagger initial shooting stars
    }
    
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
    
    // Create and animate shooting stars periodically
    const shootingStarInterval = setInterval(() => {
      createShootingStar();
    }, shootingStarFrequency); // Use configured frequency
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(shootingStarInterval);
    };
  }, [windowSize]);
  
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
        {/* Headline */}
        <motion.h1 
          className="font-boowie font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-300 via-blue-100 to-white bg-clip-text text-transparent text-left leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          The Future of <br /> Business Starts with <br /> AI & Automation 
          <motion.svg 
            width="40" 
            height="40" 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block ml-2 -mt-1"
            animate={{ rotate: [15, 18, 15, 12, 15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Sparkles */}
            <path d="M7 4L8 2L9 4L11 5L9 6L8 8L7 6L5 5L7 4Z" fill="white" stroke="#FFDE59" strokeWidth="0.5"/>
            <path d="M11 7L11.5 6L12 7L13 7.5L12 8L11.5 9L11 8L10 7.5L11 7Z" fill="white" stroke="#FFDE59" strokeWidth="0.5"/>
            <path d="M5 7L5.5 6L6 7L7 7.5L6 8L5.5 9L5 8L4 7.5L5 7Z" fill="white" stroke="#FFDE59" strokeWidth="0.5"/>
            
            {/* Star shape at tip */}
            <motion.path 
              d="M8 12L9.5 9L11 12L14 13.5L11 15L9.5 18L8 15L5 13.5L8 12Z" 
              fill="#FFEB3B" 
              stroke="#FFC107" 
              strokeWidth="0.5"
              animate={{ 
                opacity: [0.7, 1, 0.7], 
                scale: [1, 1.1, 1] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            {/* Main wand stick - tapered */}
            <path 
              d="M9 13.5L9.5 14V28H9V13.5Z" 
              fill="#D4AF37" 
              stroke="#FFDE59" 
              strokeWidth="0.5"
            />
            <path 
              d="M10 13.5L10.5 14V28H10V13.5Z" 
              fill="#D4AF37" 
              stroke="#FFDE59" 
              strokeWidth="0.5"
            />
            
            {/* Decorative bands */}
            <rect x="9" y="16" width="1.5" height="0.5" fill="#FFDE59" stroke="#FFDE59" strokeWidth="0.2"/>
            <rect x="9" y="19" width="1.5" height="0.5" fill="#FFDE59" stroke="#FFDE59" strokeWidth="0.2"/>
            <rect x="9" y="22" width="1.5" height="0.5" fill="#FFDE59" stroke="#FFDE59" strokeWidth="0.2"/>
            
            {/* Handle with grip texture */}
            <rect x="8.5" y="28" width="2.5" height="8" rx="0.5" fill="#222222" stroke="#444444" strokeWidth="0.5"/>
            
            {/* Grip texture lines */}
            <line x1="9" y1="29" x2="10.5" y2="29" stroke="#444444" strokeWidth="0.3"/>
            <line x1="9" y1="30" x2="10.5" y2="30" stroke="#444444" strokeWidth="0.3"/>
            <line x1="9" y1="31" x2="10.5" y2="31" stroke="#444444" strokeWidth="0.3"/>
            <line x1="9" y1="32" x2="10.5" y2="32" stroke="#444444" strokeWidth="0.3"/>
            <line x1="9" y1="33" x2="10.5" y2="33" stroke="#444444" strokeWidth="0.3"/>
            <line x1="9" y1="34" x2="10.5" y2="34" stroke="#444444" strokeWidth="0.3"/>
            <line x1="9" y1="35" x2="10.5" y2="35" stroke="#444444" strokeWidth="0.3"/>
            
            {/* Bottom cap of handle */}
            <rect x="8.5" y="36" width="2.5" height="0.5" rx="0.25" fill="#333333" stroke="#555555" strokeWidth="0.2"/>
          </motion.svg>
        </motion.h1>
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
