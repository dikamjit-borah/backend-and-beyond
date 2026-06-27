import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ParticleCanvas from "./hero/ParticleCanvas";
import {
  HeroBadge,
  HeroHeading,
  HeroDescription,
  CTAButton,
  TrustedBySection,
} from "./hero";

const HeroSection = () => {
  const badgeRef   = useRef(null);
  const headingRef = useRef(null);
  const descRef    = useRef(null);
  const ampRef     = useRef(null);
  const labelRef   = useRef(null);

  // rAF-throttled scroll parallax — stops past hero height
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const section = document.getElementById('home');
    let heroH = section?.offsetHeight ?? window.innerHeight;
    const onResize = () => { heroH = section?.offsetHeight ?? window.innerHeight; };
    window.addEventListener('resize', onResize, { passive: true });

    let pending = false;
    const update = () => {
      const y = window.scrollY;
      if (y <= heroH) {
        if (badgeRef.current)   badgeRef.current.style.setProperty('--py',   `${y * -0.08}px`);
        if (headingRef.current) headingRef.current.style.setProperty('--py', `${y * -0.12}px`);
        if (descRef.current)    descRef.current.style.setProperty('--py',    `${y * -0.16}px`);
        if (ampRef.current)     ampRef.current.style.setProperty('--py',     `${y * -0.05}px`);
        if (labelRef.current)   labelRef.current.style.setProperty('--py',   `${y * -0.04}px`);
      }
      pending = false;
    };

    const onScroll = () => { if (!pending) { pending = true; requestAnimationFrame(update); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      <div className="flex-1 flex relative min-h-screen">

        {/* Canvas particle field — full-screen, z-index 0 */}
        <ParticleCanvas color="#2D0A6B" />

        {/* Grain overlay — inline SVG so the feTurbulence filter is DOM-resident
            and renders correctly across all browsers */}
        <svg
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 100 }}
        >
          <defs>
            <filter id="hero-grain" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#hero-grain)" opacity="0.10" />
        </svg>

        {/* Atmospheric depth — desktop only */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 85% 35%, rgba(45,10,107,0.055) 0%, transparent 52%),
              radial-gradient(ellipse at 68% 72%, rgba(232,93,0,0.022) 0%, transparent 38%)
            `,
            zIndex: 1,
          }}
        />

        {/* Giant "&" backdrop */}
        <div
          ref={ampRef}
          className="parallax-layer font-boowie select-none pointer-events-none absolute hidden lg:block"
          style={{
            fontSize: 'clamp(180px, 20vw, 360px)',
            color: 'var(--ink)',
            opacity: 0.05,
            lineHeight: 1,
            top: '50%',
            right: '8%',
            transform: 'translateY(-50%)',
            zIndex: 2,
          }}
        >&</div>

        {/* Vertical label */}
        <div
          ref={labelRef}
          className="parallax-layer absolute bottom-16 right-8 font-jost text-xs font-bold uppercase tracking-widest hidden lg:block"
          style={{
            color: 'rgba(45,10,107,0.22)',
            writingMode: 'vertical-rl',
            letterSpacing: '0.3em',
            zIndex: 2,
          }}
        >
          Backend & Beyond — Est. 2025
        </div>

        {/* Left content panel */}
        <div
          className="relative flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 w-full lg:w-3/5 pt-24 lg:pt-0 pb-32 lg:pb-24"
          style={{ zIndex: 3 }}
        >
          {/* Vertical accent bar */}
          <motion.div
            className="absolute left-0 top-1/4 bottom-1/4 w-0.5 hidden md:block"
            style={{ background: 'var(--accent)', opacity: 0.4 }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          />

          <div className="relative">
            {/* Badge */}
            <div ref={badgeRef} className="parallax-layer">
              <HeroBadge />
            </div>

            {/* Heading */}
            <div ref={headingRef} className="parallax-layer">
              <HeroHeading />
            </div>

            {/* Description + CTA grouped — faster parallax for depth */}
            <div ref={descRef} className="parallax-layer">
              <HeroDescription />
              <CTAButton onClick={scrollToContact}>
                Start a Project
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      <TrustedBySection />
    </section>
  );
};

export default HeroSection;
