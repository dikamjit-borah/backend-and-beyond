import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const StarField = ({ windowSize, starColor = '#ffffff' }) => {
  const [shootingStars, setShootingStars] = useState([]);
  const [isClient, setIsClient]           = useState(false);

  const isMobile = windowSize.width < 768;

  useEffect(() => { setIsClient(true); }, []);

  // Plain data — no Framer Motion per star
  const stars = useMemo(() => {
    if (!isClient || !windowSize.width || !windowSize.height) return [];
    const count      = isMobile ? 80 : 180;
    const starRegion = 0.40;
    return Array.from({ length: count }, (_, i) => {
      let x, y;
      do {
        x = Math.random() * windowSize.width;
        y = Math.random() * windowSize.height;
      } while (x < windowSize.width * starRegion);
      return {
        id:            i,
        x, y,
        size:          Math.random() * 1.5 + 0.8,
        opacity:       Math.random() * 0.35 + 0.45,
        shouldBlink:   Math.random() < 0.22,
        blinkDuration: Math.random() * 2.5 + 1.8,
        blinkDelay:    Math.random() * 7,
      };
    });
  }, [windowSize, isMobile, isClient]);

  useEffect(() => {
    if (!isClient || !windowSize.width || !windowSize.height) return;

    const create = () => {
      const isTop  = Math.random() > 0.3;
      const startX = isTop
        ? windowSize.width * 0.3 + windowSize.width * 0.7 * Math.random()
        : windowSize.width;
      const startY = isTop ? 0 : windowSize.height * 0.7 * Math.random();
      const speed  = Math.random() * 0.4 + 0.8;
      const star   = {
        id: Math.random().toString(36).slice(2),
        startX, startY, speed,
        length:    Math.random() * 80 + 60,
        angle:     Math.random() * 20 + 110,
        opacity:   Math.random() * 0.3 + 0.7,
        thickness: Math.random() * 0.3 + 0.5,
      };
      setShootingStars(prev => [...prev, star]);
      setTimeout(
        () => setShootingStars(prev => prev.filter(s => s.id !== star.id)),
        (2500 / speed) + 500,
      );
    };

    const count = isMobile ? 1 : 2;
    for (let i = 0; i < count; i++) setTimeout(create, i * 600);
    const interval = setInterval(create, isMobile ? 7000 : 5000);
    return () => clearInterval(interval);
  }, [windowSize, isMobile, isClient]);

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{ willChange: 'transform' }}
    >
      {/* Stars — plain divs. CSS handles blinking; zero Framer Motion overhead. */}
      {stars.map(star => (
        <div
          key={star.id}
          className={star.shouldBlink ? 'absolute star-blink' : 'absolute'}
          style={{
            background:        starColor,
            left:              star.x,
            top:               star.y,
            width:             star.size,
            height:            star.size,
            borderRadius:      '50%',
            opacity:           star.shouldBlink ? 0.25 : star.opacity,
            animationDuration: star.shouldBlink ? `${star.blinkDuration}s` : undefined,
            animationDelay:    star.shouldBlink ? `${star.blinkDelay}s`    : undefined,
          }}
        />
      ))}

      {/* Shooting stars — one Framer Motion element each, no nested particles */}
      {shootingStars.map(star => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{ transformOrigin: 'left center', pointerEvents: 'none' }}
          initial={{ opacity: 0, x: star.startX, y: star.startY, rotate: star.angle - 180 }}
          animate={{
            opacity: [0, star.opacity, star.opacity, 0],
            x: star.startX + star.length * 8 * star.speed * Math.cos(star.angle * Math.PI / 180),
            y: star.startY + star.length * 8 * star.speed * Math.sin(star.angle * Math.PI / 180),
          }}
          transition={{
            duration: 2.2 / star.speed,
            ease:     [0.25, 0.1, 0.25, 1],
            opacity:  { times: [0, 0.15, 0.85, 1] },
          }}
        >
          <div
            style={{
              width:        star.length,
              height:       star.thickness,
              borderRadius: '4px',
              background:   `linear-gradient(270deg, transparent 0%, ${starColor} 100%)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default StarField;
