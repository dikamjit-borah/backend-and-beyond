import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  { num: '01', title: 'Smart Software & Seamless Systems',    desc: 'From intelligent SaaS platforms to full-stack web and mobile applications, we engineer high-performance tools tailored to your business logic.' },
  { num: '02', title: 'AI Agents & Automation Architecture',  desc: 'From autonomous agents to custom process automations, we integrate AI where it matters — augmenting workflows and reducing human overhead.' },
  { num: '03', title: 'Data, Decoded',                        desc: 'Turn raw data into visual intelligence. We craft next-gen dashboards and analytics layers that transform complexity into actionable clarity.' },
  { num: '04', title: 'Brand Beyond Aesthetics',              desc: 'We shape your brand from the inside out — merging UI/UX design with cohesive brand identity to create experiences that are intuitive and unforgettable.' },
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

          {/* Giant number watermark — faint at rest, stronger on hover */}
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
              className="font-barlow text-xs font-bold tracking-widest flex-shrink-0 mt-2"
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
                className="font-barlow text-sm leading-relaxed max-w-2xl transition-colors duration-300"
                style={{ color: hoveredIdx === idx ? 'rgba(250,248,244,0.8)' : 'rgba(250,248,244,0.45)' }}
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
