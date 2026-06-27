import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const phases = [
  {
    tag: 'Week 1',
    title: 'Discover.',
    desc: 'Scope the idea, define the core user journey, make tech decisions, produce wireframes, and lock a clear build plan.',
  },
  {
    tag: 'Weeks 2–3',
    title: 'Build.',
    desc: 'Full-stack development with daily progress visibility. Iterative feedback loops so the product is shaped by your input throughout.',
  },
  {
    tag: 'Week 4',
    title: 'Ship.',
    desc: 'QA, deployment, documentation, and handover. You own the code, the infra, and everything in between.',
  },
];

const MVPSection = () => {
  const controls = useAnimation();
  const ref      = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      id="mvp"
      className="relative overflow-hidden"
      style={{ background: 'var(--ink)' }}
      initial="hidden"
      animate={controls}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      transition={{ duration: 0.5 }}
    >
      {/* "30" watermark */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-8 font-boowie pointer-events-none select-none hidden lg:block"
        style={{
          fontSize: 'clamp(160px, 22vw, 320px)',
          color: 'rgba(250,248,244,0.04)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
        }}
      >
        30
      </span>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-24 relative z-10">

        {/* Label */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span style={{ display: 'inline-block', width: '20px', height: '1.5px', background: 'var(--accent)', flexShrink: 0 }} />
          <span className="font-jost text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            MVP Sprint
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-boowie leading-none mb-6"
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)',
            letterSpacing: '-0.02em',
          }}
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span style={{ color: 'var(--cream)' }}>From idea to live product.<br /></span>
          <span style={{ color: 'var(--accent)' }}>30 days flat.</span>
        </motion.h2>

        {/* Subtext + CTA */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end gap-8 mb-16 md:mb-20"
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <p
            className="font-jost text-sm leading-relaxed max-w-xl"
            style={{ color: 'rgba(250,248,244,0.58)' }}
          >
            We scope, design, and ship a working software product in 30 days — ready for your first real users and product-market fit testing. Scoped to your idea, priced on what it takes.
          </p>
          <a
            href="/#contact"
            className="font-jost text-xs font-bold uppercase tracking-widest px-6 py-3 inline-block transition-colors duration-200 flex-shrink-0"
            style={{ background: 'var(--cream)', color: 'var(--ink)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--cream-alt)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--cream)'; }}
          >
            Start your 30-day sprint →
          </a>
        </motion.div>

        {/* Phase breakdown */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: '1px solid rgba(250,248,244,0.15)' }}
        >
          {phases.map((phase, idx) => (
            <motion.div
              key={phase.tag}
              className="relative"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, delay: 0.5 + idx * 0.12 }}
              style={{
                paddingTop: 'clamp(2rem, 3.5vw, 3rem)',
                paddingBottom: 'clamp(2rem, 3.5vw, 3rem)',
                paddingLeft: isMobile ? '0' : (idx === 0 ? '0' : 'clamp(1.5rem, 2.5vw, 2.5rem)'),
                paddingRight: isMobile ? '0' : (idx === phases.length - 1 ? '0' : 'clamp(1.5rem, 2.5vw, 2.5rem)'),
                borderTop: isMobile && idx > 0 ? '1px solid rgba(250,248,244,0.12)' : 'none',
              }}
            >
              {idx > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute left-0 hidden md:block"
                  style={{
                    top: '20px',
                    bottom: '20px',
                    width: '1px',
                    background: 'rgba(250,248,244,0.12)',
                  }}
                />
              )}

              <span
                className="font-jost text-xs font-bold uppercase tracking-widest inline-block px-3 py-1 mb-6"
                style={{ background: 'var(--cream)', color: 'var(--ink)' }}
              >
                {phase.tag}
              </span>

              <h3
                className="font-boowie mb-4 leading-tight"
                style={{
                  fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)',
                  color: 'var(--cream)',
                  letterSpacing: '-0.01em',
                }}
              >
                {phase.title}
              </h3>

              <p
                className="font-jost text-sm leading-relaxed"
                style={{ color: 'rgba(250,248,244,0.58)' }}
              >
                {phase.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default MVPSection;
