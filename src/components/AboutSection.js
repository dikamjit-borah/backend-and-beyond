import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import AnimatedCounter from "./about/AnimatedCounter";

const stats = [
  { value: "7+",  label: "Years Active" },
  { value: "30+", label: "Projects Shipped" },
  { value: "15+", label: "Clients Served" },
  { value: "24h", label: "Response Time" },
];

const copy = [
  "Backend & Beyond is a software engineering studio. We work with founders, operators, and product teams to design and build systems that are technically rigorous and commercially effective.",
  "We build backend infrastructure, AI automation pipelines, web and mobile applications, and analytics tools — code written to run in production, not just pass a review or close a funding round.",
  "Every engagement is direct. No account managers, no offshore handoffs. You work with the engineers and designers who own the output.",
];

const AboutSection = () => {
  const controls = useAnimation();
  const ref      = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="relative overflow-hidden"
      style={{ background: 'var(--cream-alt)', borderTop: '2px solid rgba(45,10,107,0.12)' }}
      initial="hidden"
      animate={controls}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      transition={{ duration: 0.5 }}
    >
      {/* "ABOUT" watermark — right */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-8 font-epilogue font-black uppercase pointer-events-none select-none hidden lg:block"
        style={{ fontSize: '100px', color: 'rgba(45,10,107,0.045)', letterSpacing: '0.05em', lineHeight: 1, zIndex: 0 }}
      >
        ABOUT
      </span>

      <div className="max-w-[1400px] mx-auto relative z-10 py-16 md:py-24">

        {/* ── Two-panel row ── */}
        <div className="flex flex-col lg:flex-row">

          {/* Left — ink panel */}
          <motion.div
            className="relative lg:w-[45%] overflow-hidden flex flex-col justify-between"
            style={{ background: 'var(--ink)', padding: 'clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)' }}
            variants={{ hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Faint "01" behind heading */}
            <span
              aria-hidden="true"
              className="absolute font-boowie select-none pointer-events-none leading-none"
              style={{
                fontSize: 'clamp(120px, 18vw, 260px)',
                color: 'var(--cream)',
                opacity: 0.04,
                bottom: '-0.1em',
                left: '-0.05em',
                lineHeight: 1,
              }}
            >
              01
            </span>

            <div className="relative">
              {/* Badge */}
              <motion.div
                className="flex items-center gap-3 mb-10"
                variants={{ hidden: { opacity: 0, y: -12 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <span style={{ display: 'inline-block', width: '20px', height: '1.5px', background: 'var(--accent)', flexShrink: 0 }} />
                <span className="font-jost text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                  Who We Are
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="font-boowie leading-none"
                style={{
                  fontSize: 'clamp(2.6rem, 4.5vw, 5.2rem)',
                  color: 'var(--cream)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.04,
                }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Precision engineering.<br />
                Thoughtful design.<br />
                <span style={{ color: 'var(--accent)' }}>Built to last.</span>
              </motion.h2>
            </div>

            {/* Bottom accent bar */}
            <div className="relative mt-16">
              <div style={{ width: '40px', height: '2px', background: 'var(--accent)', opacity: 0.7 }} />
            </div>
          </motion.div>

          {/* Right — cream copy */}
          <motion.div
            className="lg:w-[55%] flex flex-col justify-center"
            style={{ padding: 'clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)' }}
            variants={{ hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {/* Section divider */}
            <div className="flex items-center gap-3 mb-10">
              <div className="flex-1 h-px" style={{ background: 'rgba(45,10,107,0.10)' }} />
            </div>

            {/* Copy paragraphs */}
            <div className="space-y-6 mb-10">
              {copy.map((para, i) => (
                <motion.p
                  key={i}
                  className="font-jost text-base leading-relaxed"
                  style={{ color: 'var(--text-sub)' }}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.55, delay: 0.5 + i * 0.12 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Stats — 2×2 grid inside right panel */}
            <motion.div
              className="grid grid-cols-2 gap-x-6 gap-y-8"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center text-center"
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, delay: 0.8 + idx * 0.08 }}
                >
                  <p className="font-epilogue font-black leading-none mb-1" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--ink)' }}>
                    {isInView ? (
                      <AnimatedCounter value={stat.value} duration={2.5} className="font-epilogue font-black" />
                    ) : stat.value}
                  </p>
                  <p className="font-jost text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-sub)' }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default AboutSection;
