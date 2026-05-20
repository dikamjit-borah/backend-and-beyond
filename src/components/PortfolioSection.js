import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import { projects } from "./portfolio/PortfolioData";

const PortfolioSection = () => {
  const [current, setCurrent]         = useState(0);
  const [direction, setDirection]     = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [timerKey, setTimerKey]       = useState(0);

  const sectionRef = useRef(null);
  const isInView   = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls   = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  const go = useCallback((dir) => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setPreviousIndex(current);
    setCurrent(c => (c + dir + projects.length) % projects.length);
    setTimerKey(k => k + 1);
  }, [isAnimating, current]);

  const goTo = useCallback((idx) => {
    if (isAnimating || idx === current) return;
    setDirection(idx > current ? 1 : -1);
    setIsAnimating(true);
    setPreviousIndex(current);
    setCurrent(idx);
    setTimerKey(k => k + 1);
  }, [isAnimating, current]);

  useEffect(() => {
    if (!isAnimating) return;
    const t = setTimeout(() => { setIsAnimating(false); setPreviousIndex(null); }, 800);
    return () => clearTimeout(t);
  }, [isAnimating, current]);

  const proj = projects[current];

  return (
    <motion.section
      ref={sectionRef}
      id="portfolio"
      className="relative w-full overflow-hidden"
      style={{ background: 'var(--cream)' }}
      initial="hidden"
      animate={controls}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      transition={{ duration: 0.7 }}
    >
      {/* Watermark */}
      <span
        aria-hidden="true"
        className="absolute font-epilogue font-black uppercase pointer-events-none select-none hidden lg:block"
        style={{
          fontSize: '100px',
          color: 'rgba(250,248,244,0.045)',
          letterSpacing: '0.05em',
          lineHeight: 1,
          zIndex: 40,
          right: 0,
          top: '50%',
          transform: 'translateY(-50%) rotate(90deg)',
          whiteSpace: 'nowrap',
          transformOrigin: 'center center',
        }}
      >
        PORTFOLIO
      </span>

      {/* Full-bleed image layer */}
      <div className="relative w-full" style={{ minHeight: '500px', height: '80vh', maxHeight: '820px' }}>

        {/* Previous image — slides out */}
        {isAnimating && previousIndex !== null && projects[previousIndex].image && (
          <img
            src={projects[previousIndex].image}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover object-center ${direction > 0 ? 'slide-out-left' : 'slide-out-right'}`}
          />
        )}

        {/* Current image or placeholder */}
        {proj.image ? (
          <motion.img
            key={`img-${current}`}
            src={proj.image}
            alt={proj.title}
            className={`absolute inset-0 w-full h-full object-cover object-center ${isAnimating ? (direction > 0 ? 'slide-in-right' : 'slide-in-left') : ''}`}
            initial={{ scale: isAnimating ? 1.04 : 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
          />
        ) : (
          /* Stylized placeholder for projects without an image */
          <div
            key={`placeholder-${current}`}
            className="absolute inset-0 w-full h-full"
            style={{
              background: 'linear-gradient(135deg, var(--ink) 0%, #1a0550 60%, #2d0a6b 100%)',
            }}
          >
            {/* Subtle dot grid */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(250,248,244,0.07) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }} />
            {/* Large brand name */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-boowie select-none"
                style={{ fontSize: 'clamp(5rem, 18vw, 18rem)', color: 'var(--cream)', opacity: 0.06, lineHeight: 1, letterSpacing: '-0.03em' }}
              >
                {proj.title}
              </span>
            </div>
          </div>
        )}

        {/* Gradient overlays — protect text legibility */}
        {/* Left fade */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, rgba(45,10,107,0.82) 0%, rgba(45,10,107,0.50) 45%, transparent 75%)' }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 w-full h-48 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to top, rgba(45,10,107,0.55) 0%, transparent 100%)' }}
        />
        {/* Top fade */}
        <div
          className="absolute top-0 left-0 w-full h-24 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to bottom, rgba(45,10,107,0.30) 0%, transparent 100%)' }}
        />

        {/* ── Content overlay ── */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between pointer-events-none">

          {/* Top bar */}
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 w-full pt-8 md:pt-12 flex items-center justify-between">
            <span className="font-barlow text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(250,248,244,0.45)' }}>
              Selected Portfolio — 2024 / 25
            </span>
            <span className="font-barlow text-sm font-bold tabular-nums" style={{ color: 'rgba(250,248,244,0.30)' }}>
              {String(current + 1).padStart(2, '0')}&thinsp;/&thinsp;{String(projects.length).padStart(2, '0')}
            </span>
          </div>

          {/* Bottom content */}
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 w-full pb-10 md:pb-14">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={{
                  enter:  (d) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
                  center: { x: 0, opacity: 1, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
                  exit:   (d) => ({ x: d > 0 ? -40 : 40, opacity: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Category */}
                <span
                  className="font-barlow text-xs font-bold uppercase tracking-widest inline-block px-3 py-1 mb-5"
                  style={{ background: 'var(--accent)', color: 'var(--cream)' }}
                >
                  {proj.category}
                </span>

                {/* Title */}
                <h2
                  className="font-boowie leading-none mb-2"
                  style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', color: 'var(--cream)' }}
                >
                  {proj.title}
                </h2>

                {/* Subtitle */}
                <p className="font-barlow text-sm mb-5" style={{ color: 'rgba(250,248,244,0.50)' }}>
                  {proj.subtitle}
                </p>

                {/* Description — max 2 lines */}
                <p
                  className="font-barlow text-sm leading-relaxed mb-7 hidden sm:block"
                  style={{ color: 'rgba(250,248,244,0.72)', maxWidth: '52ch' }}
                >
                  {proj.description}
                </p>

                {/* Tags + CTA */}
                <div className="flex flex-wrap items-center gap-3 pointer-events-auto">
                  {proj.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-barlow text-xs font-bold uppercase tracking-wider px-2 py-1"
                      style={{ border: '1px solid rgba(250,248,244,0.18)', color: 'rgba(250,248,244,0.45)' }}
                    >
                      {tag}
                    </span>
                  ))}
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-barlow text-sm font-bold uppercase tracking-wider inline-flex items-center gap-1 ml-2 transition-opacity duration-200 hover:opacity-70"
                    style={{ color: 'var(--accent)' }}
                  >
                    Visit ↗
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots + progress */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center gap-2 pointer-events-auto">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Project ${i + 1}`}
                    className="transition-all duration-300"
                    style={{
                      width: i === current ? '26px' : '8px',
                      height: '8px',
                      borderRadius: i === current ? '4px' : '50%',
                      background: i === current ? 'var(--accent)' : 'rgba(250,248,244,0.25)',
                    }}
                  />
                ))}
              </div>
              <div className="flex-1 relative h-px" style={{ background: 'rgba(250,248,244,0.15)' }}>
                <motion.div
                  key={timerKey}
                  className="absolute left-0 top-0 h-full"
                  style={{ background: 'var(--accent)', transformOrigin: 'left' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: 'linear' }}
                  onAnimationComplete={() => go(1)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Prev / Next arrows */}
        <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-between px-3 sm:px-6">
          {[{ dir: -1, label: 'Previous' }, { dir: 1, label: 'Next' }].map(({ dir, label }) => (
            <motion.button
              key={label}
              aria-label={label}
              onClick={() => go(dir)}
              className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-colors duration-200"
              style={{ border: '1.5px solid rgba(250,248,244,0.25)', color: 'var(--cream)', background: 'transparent' }}
              whileHover={{ background: 'rgba(250,248,244,0.12)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
            >
              {dir < 0 ? '←' : '→'}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
