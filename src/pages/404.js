import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import "./../styles/global.css";

const NotFoundPage = () => (
  <Layout>
    <div
      className="relative overflow-hidden"
      style={{ background: 'var(--cream-alt)', minHeight: '100vh' }}
    >
      {/* Watermark */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-8 font-epilogue font-black uppercase pointer-events-none select-none hidden lg:block"
        style={{ fontSize: '100px', color: 'rgba(45,10,107,0.045)', letterSpacing: '0.05em', lineHeight: 1, zIndex: 0 }}
      >
        404
      </span>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 pt-40 pb-32 flex flex-col items-start">

        {/* Badge */}
        <div className="flex items-center gap-3 mb-10">
          <span style={{ display: 'inline-block', width: '20px', height: '1.5px', background: 'var(--accent)', flexShrink: 0 }} />
          <span className="font-barlow text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Error
          </span>
        </div>

        <h1
          className="font-boowie leading-none mb-6"
          style={{
            fontSize: 'clamp(4rem, 10vw, 9rem)',
            color: 'var(--ink)',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          Page not<br />
          <span style={{ color: 'var(--accent)' }}>found.</span>
        </h1>

        <p
          className="font-barlow text-base leading-relaxed mb-12"
          style={{ color: 'var(--text-sub)', maxWidth: '42ch' }}
        >
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <Link
          to="/"
          className="font-barlow text-xs font-bold uppercase tracking-widest px-7 py-3 inline-block transition-colors duration-200"
          style={{ background: 'var(--ink)', color: 'var(--cream)' }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--ink-mid)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
    <Footer />
  </Layout>
);

export default NotFoundPage;

export const Head = () => (
  <>
    <title>Page Not Found | Backend & Beyond</title>
    <meta name="robots" content="noindex" />
  </>
);
