import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';

const faqs = [
  {
    q: 'What types of projects do you take on?',
    a: 'Custom software, AI automation systems, backend infrastructure, analytics dashboards, and web and mobile applications. Projects range from 4-week focused builds to longer-term engineering engagements.',
  },
  {
    q: 'How long does a project take?',
    a: 'Scope determines timeline. A focused MVP ships in 4 to 6 weeks. Full-scale systems typically take 3 to 6 months. After the discovery call you get a realistic estimate, not a number reverse-engineered from your budget.',
  },
  {
    q: 'Do you work with early-stage startups?',
    a: 'Yes. We have helped founders go from zero to deployed. Budget and timeline need to be realistic, but we are experienced with MVP-first thinking and understand what matters at the early stage.',
  },
  {
    q: 'Who will I actually be working with?',
    a: 'Directly with the engineers and designers building your product. No account managers, no third-party outsourcing. The people you speak to are the people writing the code.',
  },
  {
    q: 'What happens after launch?',
    a: 'All projects include a 30-day support window post-launch. We also offer ongoing retainer engagements for teams that need continued engineering capacity.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes, on request before any project discussion.',
  },
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div style={{ borderTop: '1px solid rgba(45,10,107,0.12)' }}>
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left"
      aria-expanded={isOpen}
    >
      <span
        className="font-jost text-sm font-semibold pr-6"
        style={{ color: 'var(--ink)' }}
      >
        {question}
      </span>
      <span
        className="font-jost text-lg flex-shrink-0 leading-none transition-transform duration-300"
        style={{
          color: 'var(--accent)',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        }}
      >
        +
      </span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          <p
            className="font-jost text-sm leading-relaxed pb-5"
            style={{ color: 'var(--text-sub)' }}
          >
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const controls = useAnimation();
  const ref      = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      id="faq"
      className="relative overflow-hidden"
      style={{ background: 'var(--cream-alt)', borderTop: '2px solid rgba(45,10,107,0.12)' }}
      initial="hidden"
      animate={controls}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left — heading */}
          <div className="lg:w-[38%] lg:sticky lg:top-28 lg:self-start">
            <motion.div
              className="flex items-center gap-3 mb-6"
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span style={{ display: 'inline-block', width: '20px', height: '1.5px', background: 'var(--accent)', flexShrink: 0 }} />
              <span className="font-jost text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                FAQ
              </span>
            </motion.div>

            <motion.h2
              className="font-boowie leading-none mb-6"
              style={{
                fontSize: 'clamp(2.4rem, 4vw, 4.5rem)',
                color: 'var(--ink)',
                letterSpacing: '-0.02em',
              }}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Answers<br />
              before you<br />
              <span style={{ color: 'var(--accent)' }}>ask.</span>
            </motion.h2>

            <motion.p
              className="font-jost text-sm leading-relaxed"
              style={{ color: 'var(--text-sub)' }}
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Still have a question?{' '}
              <a
                href="/#contact"
                style={{ color: 'var(--accent)', textDecoration: 'underline' }}
              >
                Send it directly.
              </a>
            </motion.p>
          </div>

          {/* Right — accordion */}
          <motion.div
            className="lg:w-[62%]"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.q}
                answer={faq.a}
                isOpen={openIdx === idx}
                onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
              />
            ))}
            <div style={{ borderTop: '1px solid rgba(45,10,107,0.12)' }} />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
