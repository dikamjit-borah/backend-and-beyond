import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { projects } from "../components/portfolio/PortfolioData";
import "../styles/global.css";

const ProjectEntry = ({ project, idx }) => {
  const ref      = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative group"
      style={{ borderBottom: '1px solid rgba(45,10,107,0.1)' }}
    >
      {/* Giant number — background ghost text */}
      <span
        aria-hidden="true"
        className="absolute font-boowie pointer-events-none select-none hidden md:block"
        style={{
          fontSize: 'clamp(10rem, 22vw, 20rem)',
          color: 'rgba(45,10,107,0.04)',
          lineHeight: 1,
          top: '50%',
          right: '-0.02em',
          transform: 'translateY(-50%)',
          letterSpacing: '-0.04em',
        }}
      >
        {project.num}
      </span>

      <div
        className="relative z-10"
        style={{ padding: 'clamp(3rem, 6vw, 5rem) 0' }}
      >
        {/* Top meta row */}
        <div className="flex items-center justify-between mb-8">
          <span
            className="font-jost text-xs font-bold uppercase tracking-widest"
            style={{ color: 'var(--accent)' }}
          >
            {project.num}
          </span>
          <span
            className="font-jost text-xs font-bold uppercase tracking-widest px-3 py-1"
            style={{ background: 'var(--ink)', color: 'var(--cream)' }}
          >
            {project.category}
          </span>
        </div>

        {/* Project name */}
        <h2
          className="font-boowie leading-none mb-4 transition-colors duration-300 text-ink group-hover:text-accent"
          style={{
            fontSize: 'clamp(3.5rem, 11vw, 9.5rem)',
            letterSpacing: '-0.03em',
          }}
        >
          {project.title}
        </h2>

        {/* Subtitle */}
        <p
          className="font-jost text-sm mb-8"
          style={{ color: 'var(--text-sub)' }}
        >
          {project.subtitle}
        </p>

        {/* Accent bar */}
        <div
          className="mb-8"
          style={{ width: '36px', height: '2px', background: 'var(--accent)' }}
        />

        {/* Description */}
        <p
          className="font-jost text-sm leading-relaxed mb-10 max-w-2xl"
          style={{ color: 'var(--text-sub)' }}
        >
          {project.description}
        </p>

        {/* Tags + Link */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="font-jost text-xs font-bold uppercase tracking-wider px-2 py-1"
                style={{
                  border: '1px solid rgba(45,10,107,0.2)',
                  color: 'rgba(45,10,107,0.45)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-jost text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-opacity duration-200 hover:opacity-60"
            style={{ color: 'var(--accent)' }}
          >
            Visit Live Site ↗
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const PortfolioPage = () => (
  <Layout>
    {/* Page hero */}
    <section
      className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-8 md:px-16 lg:px-24"
      style={{ background: 'var(--ink)' }}
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
        WORK
      </span>

      <div className="max-w-[1400px] mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <span style={{ display: 'inline-block', width: '20px', height: '1.5px', background: 'var(--accent)', flexShrink: 0 }} />
          <span className="font-jost text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Selected Work — 2024 / 25
          </span>
        </div>

        {/* H1 */}
        <motion.h1
          className="font-boowie leading-none mb-8"
          style={{
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            color: 'var(--cream)',
            letterSpacing: '-0.02em',
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Work that<br />
          <span style={{ color: 'var(--accent)' }}>ships.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          className="font-jost text-sm max-w-lg leading-relaxed"
          style={{ color: 'rgba(250,248,244,0.45)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A selection of projects built for real clients. Every project below is live,
          in use, and maintained. More work available on request under NDA.
        </motion.p>
      </div>
    </section>

    {/* Projects */}
    <section style={{ background: 'var(--cream)' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        {projects.map((project) => (
          <ProjectEntry key={project.num} project={project} />
        ))}
      </div>
    </section>

    {/* CTA */}
    <section
      className="px-4 sm:px-8 md:px-16 lg:px-24 py-20 md:py-28"
      style={{ background: 'var(--ink)', borderTop: '2px solid rgba(250,248,244,0.06)' }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <p className="font-jost text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            Start a Project
          </p>
          <h2
            className="font-boowie leading-none"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', color: 'var(--cream)', letterSpacing: '-0.02em' }}
          >
            Ready to be next?
          </h2>
        </div>
        <a
          href="/#contact"
          className="font-jost text-xs font-bold uppercase tracking-widest px-6 py-3 inline-block transition-colors duration-200 flex-shrink-0"
          style={{ background: 'var(--accent)', color: 'var(--cream)' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#FF7A2F'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; }}
        >
          Get in Touch →
        </a>
      </div>
    </section>

    <Footer />
  </Layout>
);

export default PortfolioPage;

export const Head = () => (
  <>
    <title>Portfolio — Backend & Beyond</title>
    <meta
      name="description"
      content="Selected work by Backend & Beyond — full-stack web applications, EdTech platforms, and custom software built for real clients and shipped to production."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="canonical" href="https://backendandbeyond.com/portfolio" />
  </>
);
