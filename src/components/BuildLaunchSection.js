import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const pillars = [
  {
    tag: 'Build',
    title: 'Engineering-first development.',
    desc: 'Backend systems, AI agents, web and mobile applications. Written for production, documented properly, and handed over with full ownership.',
    items: ['Custom Software', 'AI Agent Development', 'Backend Engineering', 'Web & Mobile Apps', 'Analytics Dashboards'],
  },
  {
    tag: 'Brand',
    title: 'Identity that earns trust on sight.',
    desc: 'Visual identity, brand systems, and UI/UX design that make your product look like it belongs in the market it is entering. Every decision is made to earn attention, not just look good.',
    items: ['Logo & Visual Identity', 'Brand Systems', 'UI/UX Design', 'Design Language', 'Product Design'],
  },
  {
    tag: 'Launch',
    title: 'Visibility built in, not bolted on.',
    desc: 'SEO architecture, content strategy, and digital presence. Planned early so the right audience finds you when you launch, not months after.',
    items: ['SEO Architecture', 'Content Strategy', 'Digital Presence', 'Launch Strategy', 'Growth Planning'],
  },
];

const BuildLaunchSection = () => {
  const controls  = useAnimation();
  const ref       = React.useRef(null);
  const isInView  = useInView(ref, { once: true, margin: '-100px' });
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
      id="build-launch"
      className="relative overflow-hidden"
      style={{ background: 'var(--cream)', borderTop: '1px solid rgba(45,10,107,0.12)' }}
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
          color: 'rgba(45,10,107,0.04)',
          letterSpacing: '0.05em',
          lineHeight: 1,
        }}
      >
        STUDIO
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
            The Complete Studio
          </span>
        </motion.div>

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 md:mb-20">
          <motion.h2
            className="font-boowie leading-none"
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)',
              color: 'var(--ink)',
              letterSpacing: '-0.02em',
            }}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We build it.<br />
            We brand it.<br />
            <span style={{ color: 'var(--accent)' }}>We launch it.</span>
          </motion.h2>

          <motion.p
            className="font-jost text-sm leading-relaxed lg:max-w-sm lg:text-right"
            style={{ color: 'var(--text-sub)' }}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            Most studios stop at the code. We don't. Backend & Beyond covers
            development, brand, and go-to-market visibility. One team, one
            conversation, one point of accountability.
          </motion.p>
        </div>

        {/* Three pillars */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: '1px solid rgba(45,10,107,0.2)' }}
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.tag}
              className="relative group"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, delay: 0.5 + idx * 0.12 }}
              style={{
                paddingTop: 'clamp(2rem, 3.5vw, 3rem)',
                paddingBottom: 'clamp(2rem, 3.5vw, 3rem)',
                paddingLeft: isMobile ? '0' : (idx === 0 ? '0' : 'clamp(1.5rem, 2.5vw, 2.5rem)'),
                paddingRight: isMobile ? '0' : (idx === pillars.length - 1 ? '0' : 'clamp(1.5rem, 2.5vw, 2.5rem)'),
                borderTop: isMobile && idx > 0 ? '1px solid rgba(45,10,107,0.15)' : 'none',
              }}
            >
              {/* Vertical divider — floats with equal gap from top and bottom borders */}
              {idx > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute left-0 hidden md:block"
                  style={{
                    top: '20px',
                    bottom: '20px',
                    width: '1px',
                    background: 'rgba(45,10,107,0.15)',
                  }}
                />
              )}
              {/* Tag */}
              <span
                className="font-jost text-xs font-bold uppercase tracking-widest inline-block px-3 py-1 mb-6"
                style={{ background: 'var(--ink)', color: 'var(--cream)' }}
              >
                {pillar.tag}
              </span>

              {/* Title */}
              <h3
                className="font-boowie mb-4 leading-tight"
                style={{
                  fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)',
                  color: 'var(--ink)',
                  letterSpacing: '-0.01em',
                }}
              >
                {pillar.title}
              </h3>

              {/* Description */}
              <p
                className="font-jost text-sm leading-relaxed mb-8"
                style={{ color: 'var(--text-sub)' }}
              >
                {pillar.desc}
              </p>

              {/* Capability list */}
              <ul className="space-y-2">
                {pillar.items.map(item => (
                  <li
                    key={item}
                    className="font-jost text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
                    style={{ color: 'rgba(45,10,107,0.45)' }}
                  >
                    <span style={{ width: '14px', height: '1px', background: 'var(--accent)', display: 'inline-block', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-14 pt-8"
          style={{ borderTop: '1px solid rgba(45,10,107,0.2)' }}
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <p className="font-jost text-sm" style={{ color: 'var(--text-sub)' }}>
            One studio. One point of contact. The full journey from brief to live.
          </p>
          <a
            href="/#contact"
            className="font-jost text-xs font-bold uppercase tracking-widest px-6 py-3 inline-block transition-colors duration-200 flex-shrink-0"
            style={{ background: 'var(--ink)', color: 'var(--cream)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#4A1E8C'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; }}
          >
            Start a Project →
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default BuildLaunchSection;
