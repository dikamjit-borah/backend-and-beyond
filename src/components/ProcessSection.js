import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: "We scope your project, define requirements, and align on timeline and budget in a single focused call. You leave knowing exactly what we're building and what it will take.",
  },
  {
    num: '02',
    title: 'Architecture',
    desc: 'Before writing production code, we design the system — data models, API structure, tech stack, and component breakdown. Decisions made here save weeks later.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Iterative development in sprints with weekly check-ins. You see real progress — not a big reveal at the end of three months of silence.',
  },
  {
    num: '04',
    title: 'Deploy & Handover',
    desc: 'Full deployment, documentation, and a 30-day support window post-launch. You own everything we build — code, infrastructure, and all credentials.',
  },
];

const ProcessSection = () => {
  const controls = useAnimation();
  const ref      = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      id="process"
      className="relative overflow-hidden"
      style={{ background: 'var(--ink)', borderTop: '2px solid rgba(250,248,244,0.06)' }}
      initial="hidden"
      animate={controls}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      transition={{ duration: 0.5 }}
    >
      {/* Watermark */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-8 font-epilogue font-black uppercase pointer-events-none select-none hidden lg:block"
        style={{
          fontSize: '100px',
          color: 'rgba(250,248,244,0.04)',
          letterSpacing: '0.05em',
          lineHeight: 1,
        }}
      >
        PROCESS
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
            How We Work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-boowie leading-none mb-4"
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)',
            color: 'var(--cream)',
            letterSpacing: '-0.02em',
          }}
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          From brief<br />
          <span style={{ color: 'var(--accent)' }}>to production.</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          className="font-jost text-sm mb-14 md:mb-20"
          style={{ color: 'rgba(250,248,244,0.45)' }}
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          A structured engagement — not an open-ended retainer with weekly status calls going nowhere.
        </motion.p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-14">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, delay: 0.5 + idx * 0.12 }}
            >
              <div
                className="mb-4"
                style={{ borderTop: '1px solid rgba(250,248,244,0.15)', paddingTop: '16px' }}
              >
                <span
                  className="font-jost text-xs font-bold tracking-widest"
                  style={{ color: 'var(--accent)' }}
                >
                  {step.num}
                </span>
              </div>
              <h3
                className="font-boowie mb-3"
                style={{
                  fontSize: 'clamp(1.3rem, 2vw, 1.8rem)',
                  color: 'var(--cream)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.1,
                }}
              >
                {step.title}
              </h3>
              <p
                className="font-jost text-sm leading-relaxed"
                style={{ color: 'rgba(250,248,244,0.55)' }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <a
            href="/#contact"
            className="font-jost text-xs font-bold uppercase tracking-widest px-6 py-3 inline-block transition-colors duration-200"
            style={{ background: 'var(--accent)', color: 'var(--cream)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#FF7A2F'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; }}
          >
            Start a Project →
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default ProcessSection;
