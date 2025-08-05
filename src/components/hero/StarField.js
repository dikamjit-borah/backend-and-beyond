import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const StarField = ({ windowSize }) => {
  const [shootingStars, setShootingStars] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side and have valid window dimensions
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Star configuration variables - mobile optimized
  const maxStarSize = 2.5;
  const isMobile = windowSize.width < 768;
  const shootingStarCount = isMobile ? 1 : 2; // Reduce shooting stars on mobile
  const shootingStarFrequency = isMobile ? 6000 : 4000; // Less frequent on mobile
  const maxShootingStarSpeed = 1.2;
  const minShootingStarSpeed = 0.8;
  const maxShootingStarThickness = 0.8;
  const minShootingStarThickness = 0.5;

  // Generate star data - mobile optimized
  const stars = useMemo(() => {
    // Don't render stars during SSR or if window size is invalid
    if (!isClient || !windowSize.width || !windowSize.height) {
      return [];
    }

    const starArray = [];
    const count = isMobile ? 150 : 250; // Reduce star count on mobile for better performance

    for (let i = 0; i < count; i++) {
      // Adjust star placement for mobile - cover more of the screen
      let x, y;
      const starRegion = isMobile ? 0.3 : 0.65; // Cover more area on mobile
      do {
        x = Math.random() * windowSize.width;
        y = Math.random() * windowSize.height;
      } while (x < windowSize.width * starRegion);

      starArray.push({
        id: i,
        x,
        y,
        size: Math.random() * (maxStarSize - 1) + 1,
        blinkDelay: Math.random() * 8,
        blinkDuration: Math.random() * 2 + 1.5,
        shouldBlink: Math.random() < (isMobile ? 0.2 : 0.3) // Less blinking on mobile
      });
    }

    return starArray;
  }, [windowSize, isMobile, isClient]);

  // Effect for shooting stars
  useEffect(() => {
    // Don't create shooting stars during SSR or if window size is invalid
    if (!isClient || !windowSize.width || !windowSize.height) {
      return;
    }

    // Function to create and animate a shooting star
    function createShootingStar() {
      const edgePosition = Math.random();
      const isTopEdge = edgePosition > 0.3;

      let startX, startY;
      if (isTopEdge) {
        startX = windowSize.width * 0.3 + (windowSize.width * 0.7 * Math.random());
        startY = 0;
      } else {
        startX = windowSize.width;
        startY = windowSize.height * 0.7 * Math.random();
      }

      const angle = Math.random() * 20 + 110;

      const newShootingStar = {
        id: Math.random().toString(36).substring(7),
        startX: startX,
        startY: startY,
        length: Math.random() * 100 + 60,
        angle: angle,
        speed: Math.random() * (maxShootingStarSpeed - minShootingStarSpeed) + minShootingStarSpeed,
        opacity: Math.random() * 0.3 + 0.7,
        thickness: Math.random() * (maxShootingStarThickness - minShootingStarThickness) + minShootingStarThickness,
      };

      setShootingStars(prev => [...prev, newShootingStar]);

      const duration = 2500 / newShootingStar.speed;
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== newShootingStar.id));
      }, duration + 500);
    }

    // Create initial batch of shooting stars immediately
    for (let i = 0; i < shootingStarCount; i++) {
      setTimeout(() => {
        createShootingStar();
      }, i * 500);
    }

    // Create and animate shooting stars periodically
    const shootingStarInterval = setInterval(() => {
      createShootingStar();
    }, shootingStarFrequency);

    return () => {
      clearInterval(shootingStarInterval);
    };
  }, [windowSize, isMobile, shootingStarCount, shootingStarFrequency, isClient]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
         style={{ willChange: 'transform' }}> {/* Optimize for mobile performance */}
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
            borderRadius: '50%'
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
          className="absolute z-20"
          initial={{
            opacity: 0,
            x: shootingStar.startX,
            y: shootingStar.startY,
            scale: 0,
            rotate: shootingStar.angle - 180,
          }}
          animate={{
            opacity: [0, shootingStar.opacity, shootingStar.opacity, 0],
            x: [
              shootingStar.startX,
              shootingStar.startX + (shootingStar.length * 8 * shootingStar.speed * Math.cos(shootingStar.angle * Math.PI / 180))
            ],
            y: [
              shootingStar.startY,
              shootingStar.startY + (shootingStar.length * 8 * shootingStar.speed * Math.sin(shootingStar.angle * Math.PI / 180))
            ],
            scale: [0, 1, 1, 0.2],
          }}
          transition={{
            duration: 2.2 / shootingStar.speed,
            ease: [0.25, 0.1, 0.25, 1],
            times: [0, 0.15, 0.85, 1]
          }}
          style={{
            position: 'absolute',
            transformOrigin: 'left center',
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
                  top: (Math.random() - 0.5) * (shootingStar.thickness * 2),
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
  );
};

export default StarField;
