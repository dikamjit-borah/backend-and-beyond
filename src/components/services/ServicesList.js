import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Custom Software & Web Application Development',
    desc: 'Full-stack web and mobile applications engineered for performance and maintainability. SaaS platforms, internal tools, and client-facing products built to your exact specifications and shipped to production standards.',
  },
  {
    num: '02',
    title: 'AI Agent Development & Workflow Automation',
    desc: 'We design and deploy AI agents, automation pipelines, and LLM-powered systems that reduce manual overhead and scale with your operations. Scoped for actual workflows, not proof-of-concept use cases.',
  },
  {
    num: '03',
    title: 'Analytics Dashboard & Data Visualization',
    desc: 'Custom dashboards, reporting layers, and data pipelines that give operators a clear view of what is happening. Built for the people who act on data, not just display it.',
  },
  {
    num: '04',
    title: 'Backend Engineering & System Architecture',
    desc: 'API design, database architecture, cloud infrastructure, and scalable backend systems. The technical foundation your product needs to grow without the architecture becoming the bottleneck.',
  },
  {
    num: '05',
    title: 'Brand Identity & Digital Visibility',
    desc: 'Visual identity, brand systems, UI/UX design, SEO, and content strategy. The work that makes your product credible and findable before someone even signs up.',
  },
  {
    num: '06',
    title: 'Idea to MVP — 30-Day Sprint',
    desc: 'We take your idea and ship a working software product in 30 days. Scoped to your business, built for real users, priced on what it takes. The fastest way to test your market before you over-invest.',
  },
];

const ServicesList = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [isMobile, setIsMobile]     = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div>
      {services.map((service, idx) => (
        <motion.div
          key={idx}
          className="relative group overflow-hidden"
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.5 + idx * 0.15 }}
          style={{ borderTop: '1px solid rgba(250,248,244,0.1)' }}
        >
          {/* Hover bg sweep */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: 'linear-gradient(90deg, rgba(74,30,140,0.5) 0%, transparent 60%)',
              opacity: hoveredIdx === idx ? 1 : 0,
            }}
          />

          {/* Giant number watermark */}
          <div
            className="absolute right-0 top-0 bottom-0 flex items-center overflow-hidden pointer-events-none transition-opacity duration-300"
            style={{ opacity: hoveredIdx === idx ? 1 : 0.4 }}
          >
            <span
              className="font-boowie select-none"
              style={{
                fontSize: 'clamp(120px, 16vw, 220px)',
                color: 'var(--cream)',
                opacity: hoveredIdx === idx ? 0.07 : 0.035,
                lineHeight: 1,
                marginRight: '-0.1em',
                transition: 'opacity 0.3s ease',
              }}
            >
              {service.num}
            </span>
          </div>

          <motion.div
            className="relative flex items-start gap-5 md:gap-8 py-8 md:py-10 lg:py-12 z-10"
            animate={{ x: hoveredIdx === idx && !isMobile ? 20 : 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          >
            {/* Number */}
            <span
              className="font-jost text-xs font-bold tracking-widest flex-shrink-0 mt-2"
              style={{
                color: hoveredIdx === idx ? 'var(--accent)' : 'rgba(250,248,244,0.3)',
                minWidth: '2rem',
              }}
            >
              {service.num}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div
                className="font-boowie mb-3 leading-tight transition-colors duration-300"
                style={{
                  fontSize: 'clamp(1.4rem, 3vw, 3rem)',
                  color: hoveredIdx === idx ? 'var(--accent)' : 'var(--cream)',
                }}
              >
                {service.title}
              </div>
              <div
                className="font-jost text-sm leading-relaxed max-w-2xl transition-colors duration-300"
                style={{ color: hoveredIdx === idx ? 'rgba(250,248,244,0.85)' : 'rgba(250,248,244,0.58)' }}
              >
                {service.desc}
              </div>
            </div>

            {/* Arrow */}
            <span
              className="flex-shrink-0 text-xl hidden md:block self-center transition-all duration-300"
              style={{
                color: hoveredIdx === idx ? 'var(--accent)' : 'rgba(250,248,244,0.15)',
                transform: hoveredIdx === idx ? 'translateX(4px)' : 'none',
              }}
            >
              →
            </span>
          </motion.div>

          {idx === services.length - 1 && (
            <div style={{ borderTop: '1px solid rgba(250,248,244,0.1)' }} />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesList;
