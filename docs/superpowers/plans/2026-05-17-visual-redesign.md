# Visual Redesign — Reversed Ink Deep Indigo

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild every visual layer of the Backend & Beyond Gatsby site from generic dark-mode to the "Reversed Ink — Deep Indigo" aesthetic: warm cream base, deep indigo (`#2D0A6B`) replaces all black, orange accent (`#E85D00`), BOOWIE as primary display font.

**Architecture:** Edit files in-place — no new directories or restructured imports except replacing `StarField` with `GeometricField` in the hero. All Framer Motion animation logic, Formspree integration, portfolio carousel, and TypewriterText are preserved; only visual styles (colours, fonts, layout geometry) change.

**Tech Stack:** Gatsby, React, Tailwind CSS, Framer Motion, Google Fonts CDN (Epilogue + Barlow added), local BOOWIE font (already present).

**Verification:** No unit test framework exists in this project. Each task's verification step is: run `npm run develop` (if not already running), open `http://localhost:8000`, and confirm the described visual change. The dev server hot-reloads on file save — you do not need to restart it between tasks.

---

## Task 1: CSS Foundation — tokens, fonts, keyframes

**Files:**
- Modify: `src/styles/global.css`
- Modify: `tailwind.config.js`

- [ ] **Step 1: Replace `src/styles/global.css` entirely**

```css
@import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700;900&family=Barlow:ital,wght@0,400;0,600;0,700;1,400&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* ── Design tokens ─────────────────────────────────────────── */
:root {
  --cream:      #FAF8F4;
  --cream-alt:  #F0EBE3;
  --ink:        #2D0A6B;
  --ink-mid:    #4A1E8C;
  --ink-light:  #7B56B5;
  --accent:     #E85D00;
  --accent-lt:  #FF7A2F;
  --text-main:  #1A0845;
  --text-sub:   #7B68A8;
}

/* ── Local fonts ────────────────────────────────────────────── */
@layer base {
  @font-face {
    font-family: 'BOOWIE';
    src: url('../fonts/BOOWIE.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'Neutraface';
    src: url('../fonts/Neutraface Text Book.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Neutraface';
    src: url('../fonts/Neutraface Text Book Italic.otf') format('opentype');
    font-weight: 400;
    font-style: italic;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Neutraface';
    src: url('../fonts/Neutraface Text Light.otf') format('opentype');
    font-weight: 300;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Neutraface';
    src: url('../fonts/Neutraface Text Light Italic.otf') format('opentype');
    font-weight: 300;
    font-style: italic;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Neutraface';
    src: url('../fonts/Neutraface Text Demi.otf') format('opentype');
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Neutraface';
    src: url('../fonts/Neutraface Text Demi Italic.otf') format('opentype');
    font-weight: 600;
    font-style: italic;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Neutraface';
    src: url('../fonts/Neutraface Text Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Neutraface';
    src: url('../fonts/Neutraface Text Bold Italic.otf') format('opentype');
    font-weight: 700;
    font-style: italic;
    font-display: fallback;
  }
}

/* ── Portfolio carousel ─────────────────────────────────────── */
@keyframes slideInFromLeft {
  0%   { transform: translateX(-100%); opacity: 1; }
  100% { transform: translateX(0);     opacity: 1; }
}
@keyframes slideInFromRight {
  0%   { transform: translateX(100%);  opacity: 1; }
  100% { transform: translateX(0);     opacity: 1; }
}
@keyframes slideOutToLeft {
  0%   { transform: translateX(0);    opacity: 1; }
  100% { transform: translateX(-100%); opacity: 1; }
}
@keyframes slideOutToRight {
  0%   { transform: translateX(0);   opacity: 1; }
  100% { transform: translateX(100%); opacity: 1; }
}

.carousel-container { position: relative; overflow: hidden; width: 100%; }
.slide-in-left  { animation: slideInFromLeft  0.8s ease-in-out forwards; position: relative; z-index: 2; }
.slide-in-right { animation: slideInFromRight 0.8s ease-in-out forwards; position: relative; z-index: 2; }
.slide-out-left { animation: slideOutToLeft   0.8s ease-in-out forwards; position: absolute; top: 0; left: 0; z-index: 1; }
.slide-out-right{ animation: slideOutToRight  0.8s ease-in-out forwards; position: absolute; top: 0; left: 0; z-index: 1; }

/* ── Hero marquee ───────────────────────────────────────────── */
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.marquee-track {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 18s linear infinite;
}
.marquee-track:hover { animation-play-state: paused; }

/* ── Geometric hero shapes ──────────────────────────────────── */
@keyframes geo-drift-a {
  0%, 100% { transform: rotate(15deg) translateY(0px); }
  50%       { transform: rotate(18deg) translateY(-14px); }
}
@keyframes geo-drift-b {
  0%, 100% { transform: rotate(-10deg) translateY(0px); }
  50%       { transform: rotate(-6deg) translateY(12px); }
}
@keyframes geo-drift-c {
  0%, 100% { transform: rotate(-28deg) translateX(0px); }
  50%       { transform: rotate(-24deg) translateX(10px); }
}
@keyframes geo-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes geo-spin-rev {
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
}
@keyframes geo-pulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50%       { opacity: 0.75; transform: scale(1.35); }
}
@keyframes geo-drift-d {
  0%, 100% { transform: rotate(22deg) translateY(0px); }
  50%       { transform: rotate(26deg) translateY(-10px); }
}
```

- [ ] **Step 2: Update `tailwind.config.js`**

```js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'boowie':     ['BOOWIE', 'serif'],
        'neutraface': ['Neutraface', 'sans-serif'],
        'epilogue':   ['Epilogue', 'sans-serif'],
        'barlow':     ['Barlow', 'sans-serif'],
      },
      colors: {
        cream:      '#FAF8F4',
        'cream-alt':'#F0EBE3',
        ink:        '#2D0A6B',
        'ink-mid':  '#4A1E8C',
        'ink-light':'#7B56B5',
        accent:     '#E85D00',
        'accent-lt':'#FF7A2F',
        'text-main':'#1A0845',
        'text-sub': '#7B68A8',
      },
      screens: {
        'laptop': '1024px'
      }
    },
  },
  plugins: [],
};
```

- [ ] **Step 3: Verify**

Start the dev server if not running: `npm run develop`  
Open `http://localhost:8000`. The page will likely look broken (all dark sections now referencing removed `bg-black` classes that still exist in components). That is expected — the remaining tasks fix each section. The important check here is that the server starts without errors.

- [ ] **Step 4: Commit**

```bash
git add src/styles/global.css tailwind.config.js
git commit -m "feat(design): add CSS tokens, Epilogue+Barlow fonts, geo/marquee keyframes"
```

---

## Task 2: Navigation

**Files:**
- Modify: `src/components/Layout.js`

- [ ] **Step 1: Replace `src/components/Layout.js`**

```jsx
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Layout = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const navItemRefs = useRef([]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "work", "contact"];
      let currentSection = activeSection;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      if (currentSection !== activeSection) setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const sections = ['home', 'about', 'services', 'work', 'contact'];
  const labels   = ['Home', 'About', 'Services', 'Work', 'Contact'];

  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)', color: 'var(--text-main)' }}>
      {/* Navigation */}
      <nav
        className="fixed top-0 w-full z-50 px-4 md:px-8 lg:px-20"
        style={{ background: 'var(--cream)', borderBottom: '2px solid var(--ink)' }}
      >
        <div className="mx-auto">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <div className="flex items-center">
              <span className="font-boowie text-base md:text-lg select-none" style={{ color: 'var(--ink)' }}>
                Backend<span style={{ color: 'var(--accent)' }}>&</span>Beyond
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden laptop:flex items-center gap-1">
              {sections.map((section, idx) => (
                <a
                  key={section}
                  ref={el => { navItemRefs.current[idx] = el; }}
                  href={`#${section}`}
                  onClick={(e) => handleNavClick(e, section)}
                  className="px-5 py-1 font-barlow text-xs font-semibold uppercase tracking-widest relative transition-colors duration-200"
                  style={{
                    color: activeSection === section ? 'var(--ink)' : 'var(--text-sub)',
                  }}
                >
                  {labels[idx]}
                  {activeSection === section && (
                    <span
                      className="absolute bottom-0 left-5 right-5 h-0.5"
                      style={{ background: 'var(--accent)' }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden laptop:flex justify-end">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="px-5 py-2 font-barlow text-xs font-bold uppercase tracking-widest transition-colors duration-200"
                style={{ background: 'var(--ink)', color: 'var(--cream)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--ink-mid)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="laptop:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 transition-colors duration-200"
                style={{ color: 'var(--ink)', border: '1.5px solid var(--ink)' }}
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              ref={mobileMenuRef}
              className="laptop:hidden absolute top-14 left-0 right-0 shadow-lg"
              style={{ background: 'var(--cream)', borderBottom: '2px solid var(--ink)' }}
            >
              <div className="py-2">
                {sections.map((section, idx) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={(e) => handleNavClick(e, section)}
                    className="block px-6 py-3 font-barlow text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
                    style={{
                      color: activeSection === section ? 'var(--accent)' : 'var(--text-sub)',
                      borderLeft: activeSection === section ? '3px solid var(--accent)' : '3px solid transparent',
                    }}
                  >
                    {labels[idx]}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
```

- [ ] **Step 2: Verify**

Check `http://localhost:8000`. The nav should show cream background with indigo bottom border. The BOOWIE logo should be indigo with orange `&`. Active link gets an orange underline. No pill indicator. Mobile hamburger should be indigo-bordered.

- [ ] **Step 3: Commit**

```bash
git add src/components/Layout.js
git commit -m "feat(nav): cream bg, indigo border, orange active underline, BOOWIE logo"
```

---

## Task 3: Hero — Geometric Animation

**Files:**
- Create: `src/components/hero/GeometricField.js`
- Modify: `src/components/HeroSection.js`

- [ ] **Step 1: Create `src/components/hero/GeometricField.js`**

```jsx
import React from "react";

const GeometricField = () => (
  <div
    className="absolute inset-0 pointer-events-none overflow-hidden"
    aria-hidden="true"
    style={{ zIndex: 0 }}
  >
    {/* Triangle 1 */}
    <div style={{
      position: 'absolute', top: '60px', right: '18%',
      width: 0, height: 0,
      borderLeft: '40px solid transparent',
      borderRight: '40px solid transparent',
      borderBottom: '70px solid var(--ink)',
      opacity: 0.07,
      animation: 'geo-drift-a 16s ease-in-out infinite',
    }} />

    {/* Triangle 2 — accent */}
    <div style={{
      position: 'absolute', top: '140px', right: '8%',
      width: 0, height: 0,
      borderLeft: '22px solid transparent',
      borderRight: '22px solid transparent',
      borderBottom: '38px solid var(--accent)',
      opacity: 0.12,
      animation: 'geo-drift-b 20s ease-in-out infinite',
    }} />

    {/* Ring 1 */}
    <div style={{
      position: 'absolute', top: '-30px', right: '28%',
      width: '130px', height: '130px',
      border: '2px solid var(--ink)',
      borderRadius: '50%',
      opacity: 0.07,
      animation: 'geo-spin 32s linear infinite',
    }} />

    {/* Ring 2 — accent, smaller */}
    <div style={{
      position: 'absolute', top: '110px', right: '22%',
      width: '58px', height: '58px',
      border: '1.5px solid var(--accent)',
      borderRadius: '50%',
      opacity: 0.12,
      animation: 'geo-spin-rev 22s linear infinite',
    }} />

    {/* Line 1 */}
    <div style={{
      position: 'absolute', top: '80px', right: '12%',
      width: '180px', height: '1.5px',
      background: 'var(--ink)',
      opacity: 0.08,
      animation: 'geo-drift-c 18s ease-in-out infinite',
    }} />

    {/* Line 2 — accent */}
    <div style={{
      position: 'absolute', top: '200px', right: '32%',
      width: '90px', height: '1px',
      background: 'var(--accent)',
      opacity: 0.1,
      transform: 'rotate(15deg)',
      animation: 'geo-drift-a 24s ease-in-out infinite 3s',
    }} />

    {/* Square */}
    <div style={{
      position: 'absolute', top: '220px', right: '10%',
      width: '44px', height: '44px',
      border: '1.5px solid var(--ink)',
      opacity: 0.07,
      animation: 'geo-drift-d 22s ease-in-out infinite 2s',
    }} />

    {/* Dot 1 — accent */}
    <div style={{
      position: 'absolute', top: '170px', right: '15%',
      width: '8px', height: '8px',
      background: 'var(--accent)',
      borderRadius: '50%',
      opacity: 0.35,
      animation: 'geo-pulse 4.5s ease-in-out infinite',
    }} />

    {/* Dot 2 — ink */}
    <div style={{
      position: 'absolute', top: '290px', right: '38%',
      width: '5px', height: '5px',
      background: 'var(--ink)',
      borderRadius: '50%',
      opacity: 0.25,
      animation: 'geo-pulse 6s ease-in-out infinite 1.5s',
    }} />

    {/* Large faint ring — creates depth */}
    <div style={{
      position: 'absolute', top: '-60px', right: '5%',
      width: '280px', height: '280px',
      border: '1px solid var(--ink)',
      borderRadius: '50%',
      opacity: 0.03,
      animation: 'geo-spin 60s linear infinite',
    }} />
  </div>
);

export default GeometricField;
```

- [ ] **Step 2: Modify `src/components/HeroSection.js`**

Replace the `StarField` import and reference with `GeometricField`. Remove `windowSize` state and its `useEffect`/resize listener since `GeometricField` is pure CSS and needs no window dimensions. Keep all other logic intact.

```jsx
import React from "react";
import { motion } from "framer-motion";
import {
  GeometricField,
  HeroBadge,
  HeroHeading,
  HeroDescription,
  CTAButton,
  TrustedBySection
} from "./hero";

const HeroSection = () => {
  const changingWords  = ["Autonomous Systems", "Data-Driven Interfaces", "AI-Crafted Solutions", "Applied Intelligence"];
  const mobileWords    = ["AI Systems", "Smart Interfaces", "AI Solutions", "Intelligence"];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      <GeometricField />

      <div className="relative flex flex-col items-start justify-center px-4 sm:px-6 md:px-8 lg:px-24 max-w-4xl w-full pt-20 md:pt-0 pb-28 md:pb-24" style={{ zIndex: 2 }}>
        <HeroBadge />
        <HeroHeading changingWords={changingWords} mobileWords={mobileWords} />
        <HeroDescription />
        <CTAButton onClick={scrollToContact}>
          Get a Free Consultation
        </CTAButton>
      </div>

      <TrustedBySection />
    </section>
  );
};

export default HeroSection;
```

- [ ] **Step 3: Replace `src/components/hero/index.js`**

The current file exports `StarField`. Replace the whole file — swap `StarField` for `GeometricField`, keep everything else:

```js
export { default as GeometricField }   from './GeometricField';
export { default as HeroBadge }        from './HeroBadge';
export { default as HeroHeading }      from './HeroHeading';
export { default as HeroDescription }  from './HeroDescription';
export { default as CTAButton }        from './CTAButton';
export { default as TrustedBySection } from './TrustedBySection';
export { default as TypewriterText }   from './TypewriterText';
```

- [ ] **Step 4: Verify**

At `http://localhost:8000`, the hero section should show a cream background with faint floating geometric shapes drifting/spinning in the right portion. No white stars visible.

- [ ] **Step 5: Commit**

```bash
git add src/components/hero/GeometricField.js src/components/HeroSection.js src/components/hero/index.js
git commit -m "feat(hero): replace starfield with CSS geometric animation"
```

---

## Task 4: Hero — Badge, Heading, Description, CTA, TypewriterText

**Files:**
- Modify: `src/components/hero/HeroBadge.js`
- Modify: `src/components/hero/HeroHeading.js`
- Modify: `src/components/hero/HeroDescription.js`
- Modify: `src/components/hero/CTAButton.js`
- Modify: `src/components/hero/TypewriterText.js`

- [ ] **Step 1: Replace `src/components/hero/HeroBadge.js`**

```jsx
import React from "react";
import { motion } from "framer-motion";

const HeroBadge = () => (
  <motion.div
    className="mb-4 flex items-center gap-3"
    initial={{ opacity: 0, y: -16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <span style={{ display: 'inline-block', width: '28px', height: '2px', background: 'var(--accent)', flexShrink: 0 }} />
    <span
      className="font-barlow text-xs font-bold uppercase tracking-widest"
      style={{ color: 'var(--accent)' }}
    >
      <span className="hidden sm:inline">Your Strategic Partner in Next-Gen Tech Innovation</span>
      <span className="sm:hidden">Next-Gen Tech Partner</span>
    </span>
  </motion.div>
);

export default HeroBadge;
```

- [ ] **Step 2: Replace `src/components/hero/TypewriterText.js`**

Keep all typewriter logic exactly as-is; only change the colour of the displayed text and cursor from blue gradient to `var(--accent)`.

```jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterText = ({ words, mobileWords, className }) => {
  const [displayedText, setDisplayedText]     = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting]           = useState(false);
  const [typingSpeed, setTypingSpeed]         = useState(120);
  const [isMobile, setIsMobile]               = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const currentWords = isMobile && mobileWords ? mobileWords : words;

  useEffect(() => {
    const handleTypewriter = () => {
      const currentWord = currentWords[currentWordIndex];
      if (!isDeleting) {
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
          setTypingSpeed(Math.random() * 50 + 120);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1));
          setTypingSpeed(40);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex(prev => (prev + 1) % currentWords.length);
          setTypingSpeed(120);
        }
      }
    };
    const timer = setTimeout(handleTypewriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, currentWordIndex, isDeleting, typingSpeed, currentWords]);

  return (
    <div className={`relative inline-block min-w-0 ${className || ''}`} style={{ minHeight: '1rem' }}>
      {/* Invisible spacer to prevent layout shift */}
      <span className="opacity-0 pointer-events-none absolute top-0 left-0" aria-hidden="true">
        <span className="hidden sm:inline">Data-Driven Interfaces</span>
        <span className="sm:hidden">AI Solutions</span>
      </span>

      <motion.span
        className="relative z-10"
        style={{ color: 'var(--accent)' }}
        key={currentWordIndex}
      >
        {displayedText}
        {/* Cursor */}
        <motion.span
          className="inline-block ml-0.5"
          style={{
            width: '2px',
            height: '0.85em',
            background: 'var(--accent)',
            verticalAlign: 'baseline',
            transform: 'translateY(0.05em)',
            display: 'inline-block',
          }}
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.span>
    </div>
  );
};

export default TypewriterText;
```

- [ ] **Step 3: Replace `src/components/hero/HeroHeading.js`**

```jsx
import React from "react";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

const HeroHeading = ({ changingWords, mobileWords }) => (
  <motion.div
    className="font-boowie text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-left leading-tight"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
    style={{ minHeight: '90px', lineHeight: '1.05', color: 'var(--ink)' }}
  >
    <div>
      <span className="hidden sm:inline">We Empower Modern Enterprises with</span>
      <span className="sm:hidden">Empowering Enterprises with</span>
      {" "}
    </div>
    <TypewriterText words={changingWords} mobileWords={mobileWords} />
  </motion.div>
);

export default HeroHeading;
```

- [ ] **Step 4: Replace `src/components/hero/HeroDescription.js`**

```jsx
import React from "react";
import { motion } from "framer-motion";

const HeroDescription = () => (
  <motion.p
    className="font-barlow text-sm sm:text-base mb-6 md:mb-8 text-left max-w-xl leading-relaxed"
    style={{ color: 'var(--text-sub)' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.6 }}
  >
    <span className="hidden sm:inline">SaaS Solutions · AI-Powered Agents · Intelligent Dashboards · Next-Gen Data Visualization · Full-Stack Web & Mobile</span>
    <span className="sm:hidden">AI-Powered Solutions · Smart Dashboards · Full-Stack Development</span>
  </motion.p>
);

export default HeroDescription;
```

- [ ] **Step 5: Replace `src/components/hero/CTAButton.js`**

Two buttons rendered side-by-side. The primary CTA is passed as `children`; secondary is a fixed "See Our Work" link.

```jsx
import React from "react";
import { motion } from "framer-motion";

const CTAButton = ({ onClick, children }) => (
  <motion.div
    className="flex items-center gap-6 mb-8 md:mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.8 }}
  >
    <motion.button
      onClick={onClick}
      className="font-barlow text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors duration-200"
      style={{ background: 'var(--ink)', color: 'var(--cream)' }}
      whileHover={{ backgroundColor: 'var(--ink-mid)' }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>

    <motion.button
      onClick={onClick}
      className="font-barlow text-xs font-semibold uppercase tracking-widest transition-colors duration-200 flex items-center gap-2"
      style={{ color: 'var(--text-sub)', background: 'transparent', border: 'none' }}
      whileHover={{ color: 'var(--accent)' }}
    >
      See Our Work
      <span style={{ color: 'var(--accent)' }}>→</span>
    </motion.button>
  </motion.div>
);

export default CTAButton;
```

- [ ] **Step 6: Verify**

At `http://localhost:8000`, the hero heading should be in BOOWIE font (indigo), typewriter words should cycle in orange, badge is an orange rule + uppercase text, description is muted indigo-purple, primary CTA is a sharp indigo button, secondary is text-only.

- [ ] **Step 7: Commit**

```bash
git add src/components/hero/HeroBadge.js src/components/hero/HeroHeading.js src/components/hero/HeroDescription.js src/components/hero/CTAButton.js src/components/hero/TypewriterText.js
git commit -m "feat(hero): BOOWIE heading, orange typewriter, indigo CTA, barlow description"
```

---

## Task 5: Hero — Marquee (TrustedBySection)

**Files:**
- Modify: `src/components/hero/TrustedBySection.js`

- [ ] **Step 1: Replace `src/components/hero/TrustedBySection.js`**

```jsx
import React from "react";
import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "AI Agents & Automation",
  "Smart Software Systems",
  "Data Intelligence",
  "Brand & UI/UX Design",
  "Blockchain Development",
  "Full-Stack Engineering",
];

const TrustedBySection = () => {
  const text = MARQUEE_ITEMS.map((item, i) => (
    <React.Fragment key={i}>
      <span style={{ color: 'rgba(250,248,244,0.45)', letterSpacing: '0.18em' }}>{item}</span>
      <span style={{ color: 'var(--accent)', margin: '0 20px', opacity: 0.8 }}>✦</span>
    </React.Fragment>
  ));

  return (
    <motion.div
      className="absolute bottom-0 left-0 w-full overflow-hidden"
      style={{ background: 'var(--ink)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.2 }}
    >
      <div className="py-3 overflow-hidden">
        <div className="marquee-track font-barlow text-xs font-bold uppercase">
          {text}{text}
        </div>
      </div>
    </motion.div>
  );
};

export default TrustedBySection;
```

- [ ] **Step 2: Verify**

Hero bottom should have a full-width indigo band with scrolling uppercase service keywords, orange `✦` separators.

- [ ] **Step 3: Commit**

```bash
git add src/components/hero/TrustedBySection.js
git commit -m "feat(hero): replace trusted-by logos with indigo marquee band"
```

---

## Task 6: About Section

**Files:**
- Modify: `src/components/AboutSection.js`
- Modify: `src/components/about/AboutBadge.js`
- Modify: `src/components/about/AboutHeading.js`
- Modify: `src/components/about/AboutContent.js`
- Modify: `src/components/about/AboutStats.js`
- Modify: `src/components/about/AboutImage.js`

- [ ] **Step 1: Replace `src/components/AboutSection.js`**

```jsx
import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  AboutBadge,
  AboutHeading,
  AboutImage,
  AboutContent,
  AboutStats,
} from "./about";

const AboutSection = () => {
  const controls = useAnimation();
  const ref       = React.useRef(null);
  const isInView  = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-12 md:py-24"
      style={{ background: 'var(--cream-alt)', borderTop: '2px solid rgba(45,10,107,0.12)' }}
      initial="hidden"
      animate={controls}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Left column */}
          <motion.div
            className="flex flex-col items-start w-full md:w-2/5"
            variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AboutBadge />
            <AboutHeading />
            <AboutImage />
          </motion.div>

          {/* Right column */}
          <motion.div
            className="flex flex-col items-start w-full md:w-3/5 pl-0 md:pl-8 pt-2 mt-4 md:mt-0"
            variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AboutContent />
            <AboutStats isInView={isInView} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
```

- [ ] **Step 2: Replace `src/components/about/AboutBadge.js`**

```jsx
import React from "react";
import { motion } from "framer-motion";

const AboutBadge = () => (
  <motion.div
    className="mb-4 flex items-center gap-3"
    variants={{ hidden: { opacity: 0, y: -16 }, visible: { opacity: 1, y: 0 } }}
    transition={{ duration: 0.4, delay: 0.3 }}
  >
    <span style={{ display: 'inline-block', width: '20px', height: '1.5px', background: 'var(--accent)', flexShrink: 0 }} />
    <span className="font-barlow text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
      Our Ethos
    </span>
  </motion.div>
);

export default AboutBadge;
```

- [ ] **Step 3: Replace `src/components/about/AboutHeading.js`**

```jsx
import React from "react";
import { motion } from "framer-motion";

const AboutHeading = () => (
  <motion.div
    className="relative mb-8 md:mb-10 max-w-lg"
    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    <motion.h2
      className="font-boowie text-2xl sm:text-3xl md:text-4xl leading-tight"
      style={{ color: 'var(--ink)' }}
      variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      Seamless tech,<br />
      elegant design &<br />
      <span style={{ color: 'var(--accent)' }}>engineered to scale.</span>
    </motion.h2>
  </motion.div>
);

export default AboutHeading;
```

- [ ] **Step 4: Replace `src/components/about/AboutContent.js`**

```jsx
import React from "react";
import { motion } from "framer-motion";

const AboutContent = () => (
  <motion.div
    className="flex flex-col md:flex-row gap-4 md:gap-8 w-full mt-6"
    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    transition={{ duration: 0.6 }}
  >
    <motion.div
      className="flex-1 flex flex-col space-y-4"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <motion.p
        className="font-barlow text-sm leading-relaxed"
        style={{ color: 'var(--text-sub)' }}
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        At Backend and Beyond, we are a multidisciplinary collective of backend engineers, UI/UX designers, full-stack developers, and visual storytellers united by a passion for building purposeful digital experiences.
      </motion.p>
      <motion.p
        className="font-barlow text-sm leading-relaxed"
        style={{ color: 'var(--text-sub)' }}
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        We operate at the intersection of functionality and form — engineering tools that are not only powerful but beautifully executed.
      </motion.p>
    </motion.div>

    <motion.div
      className="flex-1 flex flex-col space-y-4"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <motion.p
        className="font-barlow text-sm leading-relaxed"
        style={{ color: 'var(--text-sub)' }}
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        We specialise in bespoke applications, internal dashboards, automations, and digital products that drive business efficiency and elevate user engagement.
      </motion.p>
      <motion.p
        className="font-barlow text-sm leading-relaxed"
        style={{ color: 'var(--text-sub)' }}
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        From ideation to deployment, we partner with you to build technology that goes beyond just working — it works brilliantly.
      </motion.p>
    </motion.div>
  </motion.div>
);

export default AboutContent;
```

- [ ] **Step 5: Replace `src/components/about/AboutStats.js`**

```jsx
import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: "7+",  label: "Years in Business" },
  { value: "30+", label: "Projects Delivered" },
  { value: "99%", label: "Uptime Guarantee" },
  { value: "4x",  label: "Revenue Growth" },
];

const AboutStats = ({ isInView }) => (
  <motion.div
    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 mt-6 w-full"
    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
    transition={{ duration: 0.8, delay: 1.0 }}
  >
    {stats.map((stat, idx) => (
      <motion.div
        key={stat.label}
        className="text-left"
        style={{ borderTop: '2px solid var(--ink)', paddingTop: '10px' }}
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 1.1 + idx * 0.1 }}
      >
        <p className="font-epilogue text-2xl sm:text-3xl md:text-4xl font-black" style={{ color: 'var(--ink)', lineHeight: 1 }}>
          {isInView && (
            <AnimatedCounter
              value={stat.value}
              duration={2.5}
              className="font-epilogue text-2xl sm:text-3xl md:text-4xl font-black"
            />
          )}
        </p>
        <p className="font-barlow text-xs font-semibold uppercase tracking-wide mt-1" style={{ color: 'var(--text-sub)' }}>
          {stat.label}
        </p>
      </motion.div>
    ))}
  </motion.div>
);

export default AboutStats;
```

- [ ] **Step 6: Replace `src/components/about/AboutImage.js`**

```jsx
import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../images/about.avif";

const AboutImage = () => (
  <motion.div
    className="mt-4 max-w-[20rem] sm:max-w-[25rem] w-full relative group"
    variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
    transition={{ duration: 0.7, delay: 1.0 }}
  >
    <img
      src={aboutImage}
      alt="Design workspace with notes and sketches"
      className="w-full h-auto"
      style={{ display: 'block' }}
    />
    {/* Indigo hover overlay */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style={{ background: 'rgba(45,10,107,0.08)' }}
    />
  </motion.div>
);

export default AboutImage;
```

- [ ] **Step 7: Verify**

About section should have a warm cream-alt background. BOOWIE heading in indigo with orange last line. Stats are Epilogue 900 numbers with indigo top border. Body text is muted indigo-purple. Image has no border-radius (removed `rounded-lg`).

- [ ] **Step 8: Commit**

```bash
git add src/components/AboutSection.js src/components/about/AboutBadge.js src/components/about/AboutHeading.js src/components/about/AboutContent.js src/components/about/AboutStats.js src/components/about/AboutImage.js
git commit -m "feat(about): cream-alt bg, BOOWIE heading, Epilogue stats, indigo top-borders"
```

---

## Task 7: Services Section

**Files:**
- Modify: `src/components/ServicesSection.js`
- Modify: `src/components/services/ServicesLabel.js`
- Modify: `src/components/services/ServicesHeading.js`
- Modify: `src/components/services/ServicesList.js`

- [ ] **Step 1: Replace `src/components/ServicesSection.js`**

Remove the right column (ServicesDescription + ServicesImage). The full width goes to the list.

```jsx
import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  ServicesLabel,
  ServicesHeading,
  ServicesList,
} from './services';

const ServicesSection = () => {
  const controls = useAnimation();
  const ref       = React.useRef(null);
  const isInView  = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      id="services"
      className="relative min-h-screen flex items-center justify-center py-12 md:py-24 overflow-hidden"
      style={{ background: 'var(--ink)' }}
      initial="hidden"
      animate={controls}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      transition={{ duration: 0.5 }}
    >
      {/* Faint watermark */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-8 font-epilogue font-black uppercase pointer-events-none select-none hidden lg:block"
        style={{
          fontSize: '100px',
          color: 'rgba(250,248,244,0.025)',
          letterSpacing: '0.05em',
          lineHeight: 1,
        }}
      >
        SERVICES
      </span>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 relative z-10 w-full">
        <ServicesLabel />
        <motion.div
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ServicesHeading isInView={isInView} />
          <ServicesList />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
```

- [ ] **Step 2: Replace `src/components/services/ServicesLabel.js`**

```jsx
import React from "react";
import { motion } from "framer-motion";

const ServicesLabel = () => (
  <motion.div
    className="flex items-center gap-3 mb-6"
    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <span style={{ display: 'inline-block', width: '20px', height: '1.5px', background: 'var(--accent)', flexShrink: 0 }} />
    <span className="font-barlow text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
      What We Do
    </span>
  </motion.div>
);

export default ServicesLabel;
```

- [ ] **Step 3: Replace `src/components/services/ServicesHeading.js`**

```jsx
import React from "react";
import { motion } from "framer-motion";

const ServicesHeading = ({ isInView }) => (
  <motion.h2
    className="font-boowie text-3xl md:text-4xl lg:text-6xl mb-10 md:mb-14 leading-tight"
    style={{ color: 'var(--cream)' }}
    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <motion.span
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      Smart Systems.
    </motion.span>
    <br />
    <motion.span
      style={{ color: 'rgba(250,248,244,0.55)' }}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      Seamless Scale.
    </motion.span>
  </motion.h2>
);

export default ServicesHeading;
```

- [ ] **Step 4: Replace `src/components/services/ServicesList.js`**

```jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  { num: '01', title: 'Smart Software & Seamless Systems',       desc: 'From intelligent SaaS platforms to full-stack web and mobile applications, we engineer high-performance tools tailored to your business logic.' },
  { num: '02', title: 'AI Agents & Automation Architecture',      desc: 'From autonomous agents to custom process automations, we integrate AI where it matters — augmenting workflows and reducing human overhead.' },
  { num: '03', title: 'Data, Decoded',                           desc: 'Turn raw data into visual intelligence. We craft next-gen dashboards and analytics layers that transform complexity into actionable clarity.' },
  { num: '04', title: 'Brand Beyond Aesthetics',                 desc: 'We shape your brand from the inside out — merging UI/UX design with cohesive brand identity to create experiences that are intuitive and unforgettable.' },
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
          className="relative group"
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.5 + idx * 0.15 }}
        >
          {/* Hover bg sweep */}
          <div
            className="absolute top-0 left-[-60vw] h-full w-[160vw] pointer-events-none transition-opacity duration-300"
            style={{
              background: 'linear-gradient(90deg, rgba(74,30,140,0.6) 0%, transparent 70%)',
              opacity: hoveredIdx === idx ? 1 : 0,
            }}
          />

          <motion.div
            className="relative flex items-baseline gap-4 md:gap-6 py-4 md:py-5 z-10"
            style={{ borderTop: '1px solid rgba(250,248,244,0.1)' }}
            animate={{ x: hoveredIdx === idx && !isMobile ? 28 : 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          >
            <span
              className="font-epilogue text-xs font-black flex-shrink-0 w-7"
              style={{ color: hoveredIdx === idx ? 'var(--accent)' : 'rgba(250,248,244,0.35)' }}
            >
              {service.num}
            </span>
            <div className="flex-1">
              <div
                className="font-epilogue text-lg sm:text-xl md:text-2xl font-black mb-1 transition-colors duration-300"
                style={{ color: hoveredIdx === idx ? 'var(--accent)' : 'var(--cream)' }}
              >
                {service.title}
              </div>
              <div
                className="font-barlow text-xs sm:text-sm leading-relaxed max-w-2xl transition-colors duration-300"
                style={{ color: hoveredIdx === idx ? 'rgba(250,248,244,0.75)' : 'rgba(250,248,244,0.45)' }}
              >
                {service.desc}
              </div>
            </div>
            <span
              className="flex-shrink-0 text-base transition-colors duration-300 hidden md:block"
              style={{ color: hoveredIdx === idx ? 'var(--accent)' : 'rgba(250,248,244,0.2)' }}
            >
              →
            </span>
          </motion.div>

          {/* Last item bottom border */}
          {idx === services.length - 1 && (
            <div style={{ borderTop: '1px solid rgba(250,248,244,0.1)' }} />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesList;
```

- [ ] **Step 5: Verify**

Services section should be full-bleed deep indigo. BOOWIE heading in cream. Four service rows separated by thin cream rules. Hover shifts the row right and turns the title orange.

- [ ] **Step 6: Commit**

```bash
git add src/components/ServicesSection.js src/components/services/ServicesLabel.js src/components/services/ServicesHeading.js src/components/services/ServicesList.js
git commit -m "feat(services): indigo band, BOOWIE heading, ruled rows with orange hover"
```

---

## Task 8: Portfolio Section

**Files:**
- Modify: `src/components/portfolio/PortfolioGradients.js`
- Modify: `src/components/portfolio/PortfolioHeader.js`
- Modify: `src/components/portfolio/PortfolioContent.js`
- Modify: `src/components/portfolio/PortfolioNavigation.js`

- [ ] **Step 1: Replace `src/components/portfolio/PortfolioGradients.js`**

Replace black overlays with cream-sided gradients so the left content area stays readable against any project image.

```jsx
import React from "react";
import { motion } from "framer-motion";

const PortfolioGradients = ({ isHovered, isMobile }) => (
  <>
    {/* Left cream fade — always visible, protects text legibility */}
    <div
      className="absolute top-0 left-0 h-full w-2/3 pointer-events-none z-10"
      style={{ background: 'linear-gradient(to right, rgba(250,248,244,0.85) 0%, rgba(250,248,244,0.4) 60%, transparent 100%)' }}
    />

    {/* Top fade */}
    <motion.div
      className="absolute top-0 w-full h-32 pointer-events-none z-10"
      style={{ background: 'linear-gradient(to bottom, rgba(250,248,244,0.6) 0%, transparent 100%)' }}
      animate={{ opacity: isMobile ? 1 : (isHovered ? 1 : 0.4) }}
      transition={{ duration: 0.5 }}
    />

    {/* Bottom fade */}
    <motion.div
      className="absolute bottom-0 w-full h-40 pointer-events-none z-10"
      style={{ background: 'linear-gradient(to top, rgba(250,248,244,0.7) 0%, transparent 100%)' }}
      animate={{ opacity: isMobile ? 1 : (isHovered ? 1 : 0.4) }}
      transition={{ duration: 0.5 }}
    />
  </>
);

export default PortfolioGradients;
```

- [ ] **Step 2: Replace `src/components/portfolio/PortfolioHeader.js`**

Update text colours (cream → ink for the heading since we now have a light overlay), timer circle to indigo/orange.

```jsx
import React from "react";
import { motion } from "framer-motion";
import { projects } from "./PortfolioData";

const PortfolioHeader = ({
  current, timerKey, isPaused, isInView,
  isAnimating, next, isHovered, isMobile,
  showMobileInfo, setShowMobileInfo
}) => (
  <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 w-full pt-8 sm:pt-12 md:pt-16">
    {isMobile && (
      <motion.button
        onClick={() => setShowMobileInfo(!showMobileInfo)}
        className="absolute top-4 right-4 font-barlow text-[0.6rem] font-bold uppercase tracking-widest px-3 py-1 z-30"
        style={{ background: 'var(--ink)', color: 'var(--cream)' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        whileTap={{ scale: 0.95 }}
      >
        {showMobileInfo ? 'Hide' : 'Info'}
      </motion.button>
    )}

    <motion.div
      className="w-full"
      animate={{
        opacity: isMobile ? (showMobileInfo ? 1 : 0) : (isHovered ? 1 : 0),
        y:       isMobile ? (showMobileInfo ? 0 : 24) : (isHovered ? 0 : 24),
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <motion.h2
          className="font-barlow text-xs font-bold uppercase tracking-widest mb-4 sm:mb-8"
          style={{ color: 'var(--text-sub)' }}
        >
          Projects in 2025 that left our clients smiling:
        </motion.h2>

        {/* Circular timer */}
        <motion.div
          className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-4 sm:mb-8 cursor-pointer flex-shrink-0"
          animate={{
            opacity: isMobile ? 1 : (isHovered ? 0.9 : 1),
            scale:   isMobile ? 1 : (isHovered ? 0.9 : 1),
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          onClick={next}
        >
          <div className="absolute inset-0 rounded-full" style={{ border: '2px solid rgba(45,10,107,0.2)' }} />
          <motion.svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full rotate-[-90deg]">
            <motion.circle
              key={timerKey}
              cx="50" cy="50" r="40"
              fill="none"
              strokeWidth="4"
              stroke="var(--accent)"
              strokeLinecap="round"
              strokeDasharray={251.2}
              initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: isPaused ? 251.2 : 0 }}
              transition={isPaused ? { duration: 0 } : { duration: 4, ease: "linear" }}
              onAnimationComplete={() => {
                if (!isPaused && isInView && !isAnimating) next();
              }}
            />
          </motion.svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-barlow text-[8px] sm:text-[10px] font-bold" style={{ color: 'var(--ink)' }}>
              {current + 1}/{projects.length}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export default PortfolioHeader;
```

- [ ] **Step 3: Replace `src/components/portfolio/PortfolioContent.js`**

```jsx
import React from "react";
import { motion } from "framer-motion";
import { projects } from "./PortfolioData";

const PortfolioContent = ({
  current, isAnimating, previousIndex, direction,
  isHovered, isMobile, showMobileInfo
}) => (
  <motion.div
    className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 w-full pb-8 sm:pb-12 md:pb-16"
    animate={{
      opacity: isMobile ? (showMobileInfo ? 1 : 0) : (isHovered ? 1 : 0),
    }}
    transition={{ duration: 0.5, delay: 0.15 }}
  >
    <motion.div
      className="max-w-full sm:max-w-2xl relative"
      style={{ position: 'relative', overflow: 'hidden', minHeight: '120px' }}
      animate={{
        opacity: isMobile ? (showMobileInfo ? 1 : 0) : (isHovered ? 1 : 0),
        y:       isMobile ? (showMobileInfo ? 0 : 24) : (isHovered ? 0 : 24),
      }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Exiting slide */}
      {isAnimating && previousIndex !== null && (
        <div className={`absolute w-full ${direction > 0 ? 'slide-out-left' : 'slide-out-right'}`}>
          <div className="font-barlow text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--accent)' }}>
            Case Study · {String(previousIndex + 1).padStart(2, '0')}
          </div>
          <h3 className="font-boowie text-xl sm:text-2xl md:text-3xl mb-2" style={{ color: 'var(--ink)' }}>
            {projects[previousIndex].title.replace(/^[^\w]+/, '')}
          </h3>
          <p className="font-barlow text-sm leading-relaxed" style={{ color: 'var(--text-sub)' }}>
            {projects[previousIndex].description}
          </p>
        </div>
      )}

      {/* Entering slide */}
      <motion.div
        className={isAnimating ? (direction > 0 ? 'slide-in-right' : 'slide-in-left') : ''}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="font-barlow text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--accent)' }}>
          Case Study · {String(current + 1).padStart(2, '0')}
        </div>
        <motion.h3
          className="font-boowie text-xl sm:text-2xl md:text-3xl mb-2"
          style={{ color: 'var(--ink)' }}
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {projects[current].title.replace(/^[^\w]+/, '')}
        </motion.h3>
        <motion.p
          className="font-barlow text-sm leading-relaxed"
          style={{ color: 'var(--text-sub)' }}
          variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects[current].description}
        </motion.p>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default PortfolioContent;
```

- [ ] **Step 4: Replace `src/components/portfolio/PortfolioNavigation.js`**

Sharp square buttons (no border-radius), indigo border + ink arrows, hover fills indigo with cream arrow.

```jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const NavBtn = ({ onClick, direction, isInView, label }) => {
  const [hovered, setHovered] = useState(false);
  const isLeft = direction === 'left';
  const path   = isLeft
    ? "M127.107 41.149 133 47.04l-53.039 53.03L133 153.107 127.107 159l-58.925-58.926 58.925-58.925Z"
    : "M72.893 41.149 67 47.04l53.039 53.03L67 153.107 72.893 159l58.925-58.926L72.893 41.149Z";

  return (
    <motion.button
      onClick={onClick}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`absolute ${isLeft ? 'left-2 sm:left-4 md:left-6 lg:left-8' : 'right-2 sm:right-4 md:right-6 lg:right-8'} top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center pointer-events-auto transition-all duration-200`}
      style={{
        border: '2px solid var(--ink)',
        background: hovered ? 'var(--ink)' : 'transparent',
        transition: 'background 0.2s ease',
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ x: isLeft ? -16 : 16, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: isLeft ? -16 : 16, opacity: 0 }}
    >
      <svg width="24" height="24" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d={path}
          fillRule="evenodd"
          style={{ fill: hovered ? 'var(--cream)' : 'var(--ink)', transition: 'fill 0.2s ease' }}
        />
      </svg>
    </motion.button>
  );
};

const PortfolioNavigation = ({ prev, next, isInView, isHovered, isMobile }) => (
  <motion.div
    className="absolute w-full max-w-[1400px] left-1/2 -translate-x-1/2 top-0 bottom-0 pointer-events-none px-2 sm:px-4 z-30"
    animate={{ opacity: isMobile ? 1 : (isHovered ? 1 : 0) }}
    transition={{ duration: 0.5, delay: 0.25 }}
  >
    <NavBtn onClick={prev} direction="left"  isInView={isInView} label="Previous" />
    <NavBtn onClick={next} direction="right" isInView={isInView} label="Next" />
  </motion.div>
);

export default PortfolioNavigation;
```

- [ ] **Step 5: Verify**

Portfolio carousel should show the full-bleed images with a cream fade from the left. Hover reveals BOOWIE project title in indigo, orange case study label. Nav buttons are sharp-cornered indigo squares. Timer circle stroke is orange.

- [ ] **Step 6: Commit**

```bash
git add src/components/portfolio/PortfolioGradients.js src/components/portfolio/PortfolioHeader.js src/components/portfolio/PortfolioContent.js src/components/portfolio/PortfolioNavigation.js
git commit -m "feat(portfolio): cream overlays, indigo/orange UI chrome, BOOWIE project titles"
```

---

## Task 9: Contact Section

**Files:**
- Modify: `src/components/ContactSection.js`
- Modify: `src/components/contact/ContactLabel.js`
- Modify: `src/components/contact/ContactHeading.js`
- Modify: `src/components/contact/ContactDescription.js`
- Modify: `src/components/contact/ContactInfo.js`
- Modify: `src/components/contact/SocialLinks.js`
- Modify: `src/components/contact/ContactForm.js`

- [ ] **Step 1: Replace `src/components/ContactSection.js`**

```jsx
import React, { useState, useRef, useEffect } from "react";
import { useForm } from "@formspree/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ContactLabel, ContactLeftSide, ContactForm } from "./contact";

const ContactSection = () => {
  const controls   = useAnimation();
  const sectionRef = useRef(null);
  const isInView   = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  const defaultFormData = {
    firstName: "", lastName: "", companyName: "",
    email: "", phone: "", message: "", referralCode: "", privacyPolicy: false,
  };

  const [state, handleSubmit] = useForm("meoloedq");
  const [formData, setFormData] = useState(defaultFormData);

  useEffect(() => {
    if (state.succeeded) setFormData(defaultFormData);
  }, [state.succeeded]);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-12 md:py-24"
      style={{ background: 'var(--ink)' }}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-20 w-full">
        <motion.div
          className="flex flex-col md:flex-row items-start gap-6 md:gap-8 lg:gap-16"
          variants={itemVariants}
        >
          <ContactLeftSide isInView={isInView} />
          <motion.div
            className="w-full md:w-1/2"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ContactForm
              state={state}
              handleSubmit={handleSubmit}
              formData={formData}
              handleChange={handleChange}
              itemVariants={itemVariants}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
```

- [ ] **Step 2: Replace `src/components/contact/ContactLabel.js`**

```jsx
import React from "react";
import { motion } from "framer-motion";

const ContactLabel = () => (
  <motion.div
    className="flex items-center gap-3 mb-6"
    variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <span style={{ display: 'inline-block', width: '20px', height: '1.5px', background: 'var(--accent)', flexShrink: 0 }} />
    <span className="font-barlow text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
      Get in Touch
    </span>
  </motion.div>
);

export default ContactLabel;
```

- [ ] **Step 3: Replace `src/components/contact/ContactHeading.js`**

```jsx
import React from "react";
import { motion } from "framer-motion";

const ContactHeading = ({ isInView }) => (
  <motion.h2
    className="font-boowie text-3xl md:text-4xl lg:text-6xl mb-6 md:mb-8 leading-tight"
    style={{ color: 'var(--cream)' }}
    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <motion.span
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      Let's build
    </motion.span>
    {" "}
    <motion.span
      style={{ color: 'rgba(250,248,244,0.45)' }}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      something
    </motion.span>
    <br />
    <motion.span
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <span style={{ color: 'var(--accent)' }}>great.</span>
    </motion.span>
  </motion.h2>
);

export default ContactHeading;
```

- [ ] **Step 4: Replace `src/components/contact/ContactDescription.js`**

```jsx
import React from "react";
import { motion } from "framer-motion";

const ContactDescription = () => (
  <motion.p
    className="font-barlow text-sm md:text-base mb-8 leading-relaxed"
    style={{ color: 'rgba(250,248,244,0.45)' }}
    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
    transition={{ duration: 0.6, delay: 1.1 }}
  >
    Ready to transform your vision into reality? Let's discuss your project and explore how we can bring your ideas to life with cutting-edge technology and thoughtful design.
  </motion.p>
);

export default ContactDescription;
```

- [ ] **Step 5: Replace `src/components/contact/ContactInfo.js`**

```jsx
import React from "react";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const items = [
  { icon: <Mail size={16} />, text: "hello@backendandbeyond.com" },
  { icon: <><Phone size={16} /><FaWhatsapp size={16} style={{ color: '#25D366' }} /></>, text: "(+91) 70029 36200  ·  (+91) 84020 89446" },
];

const ContactInfo = () => (
  <motion.div
    className="space-y-3 mb-6"
    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 1.3 } } }}
  >
    {items.map((item, idx) => (
      <motion.div
        key={idx}
        className="flex items-center gap-3 font-barlow text-sm transition-colors duration-200"
        style={{ color: 'rgba(250,248,244,0.6)' }}
        variants={{ hidden: { y: 16, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } } }}
        whileHover={{ x: 4, color: 'var(--cream)' }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span style={{ color: 'var(--accent)', display: 'flex', gap: '4px', alignItems: 'center' }}>{item.icon}</span>
        {item.text}
      </motion.div>
    ))}
  </motion.div>
);

export default ContactInfo;
```

- [ ] **Step 6: Replace `src/components/contact/SocialLinks.js`**

```jsx
import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "https://www.linkedin.com/company/backend-and-beyond", icon: <Linkedin size={15} />, label: "LinkedIn" },
  { href: "https://www.instagram.com/backendandbeyond/",          icon: <Instagram size={15} />, label: "Instagram" },
  { href: "https://x.com/backendandbeyond",                        icon: <Twitter size={15} />,   label: "Twitter / X" },
];

const SocialLinks = () => (
  <motion.div
    className="flex space-x-3 mt-8"
    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 1.5 } } }}
  >
    {links.map(link => (
      <motion.a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className="w-9 h-9 flex items-center justify-center transition-all duration-200"
        style={{
          border: '1.5px solid rgba(250,248,244,0.2)',
          color: 'rgba(250,248,244,0.5)',
        }}
        variants={{ hidden: { y: 16, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } } }}
        whileHover={{ scale: 1.1, y: -2, borderColor: 'var(--accent)', color: 'var(--accent)' }}
        whileTap={{ scale: 0.95 }}
      >
        {link.icon}
      </motion.a>
    ))}
  </motion.div>
);

export default SocialLinks;
```

- [ ] **Step 7: Replace `src/components/contact/ContactForm.js`**

Preserve all Formspree integration (`state`, `handleSubmit`, `formData`, `handleChange`, `itemVariants` props). Only visual styles change: bottom-border-only inputs, orange submit, indigo success card.

```jsx
import React from "react";
import { motion } from "framer-motion";

const inputStyle = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(250,248,244,0.2)',
  padding: '8px 0',
  fontFamily: "'Barlow', sans-serif",
  fontSize: '13px',
  color: 'var(--cream)',
  outline: 'none',
};

const labelStyle = {
  display: 'block',
  fontFamily: "'Barlow', sans-serif",
  fontSize: '10px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  marginBottom: '6px',
  color: 'rgba(250,248,244,0.45)',
};

const ContactForm = ({ state, handleSubmit, formData, handleChange, itemVariants }) => (
  <>
    {state.succeeded ? (
      <motion.div
        className="flex flex-col items-center justify-center text-center py-16 px-8"
        style={{ border: '1px solid rgba(250,248,244,0.15)' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
      >
        <motion.svg
          className="w-12 h-12 mb-4"
          fill="none"
          stroke="var(--accent)"
          viewBox="0 0 24 24"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </motion.svg>
        <h3 className="font-boowie text-xl mb-2" style={{ color: 'var(--cream)' }}>Message Sent!</h3>
        <p className="font-barlow text-sm" style={{ color: 'rgba(250,248,244,0.5)' }}>We'll get back to you within 24 hours.</p>
      </motion.div>
    ) : (
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-5"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
      >
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-5" variants={itemVariants}>
          <div>
            <label style={labelStyle}>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" style={inputStyle} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <label style={labelStyle}>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" style={inputStyle} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label style={labelStyle}>Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={inputStyle} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label style={labelStyle}>Referral Code</label>
          <input type="text" name="referralCode" value={formData.referralCode} onChange={handleChange} placeholder="B&B-XXXXXXX25" style={inputStyle} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label style={labelStyle}>Project Details</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Tell us about your project..."
            style={{ ...inputStyle, resize: 'none', borderBottom: '1px solid rgba(250,248,244,0.2)' }}
          />
        </motion.div>

        <motion.div className="flex items-start gap-3" variants={itemVariants}>
          <input
            id="privacyPolicy"
            name="privacyPolicy"
            type="checkbox"
            checked={formData.privacyPolicy}
            onChange={handleChange}
            required
            style={{ marginTop: '3px', accentColor: 'var(--accent)' }}
          />
          <label htmlFor="privacyPolicy" className="font-barlow text-xs leading-relaxed" style={{ color: 'rgba(250,248,244,0.45)' }}>
            I agree to the{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
              Privacy Policy
            </a>
            {" "}and consent to being contacted about this inquiry.
          </label>
        </motion.div>

        <motion.button
          type="submit"
          disabled={state.submitting}
          className="w-full font-barlow text-xs font-bold uppercase tracking-widest py-4 px-6 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ background: 'var(--accent)', color: 'var(--cream)', border: 'none' }}
          variants={itemVariants}
          whileHover={{ backgroundColor: 'var(--accent-lt)' }}
          whileTap={{ scale: 0.98 }}
        >
          {state.submitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </span>
          ) : "Send Message →"}
        </motion.button>

        {state.errors && state.errors.length > 0 && (
          <motion.div className="font-barlow text-xs space-y-1" style={{ color: '#FF6B6B' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {state.errors.map((err, idx) => <div key={idx}>{err.message}</div>)}
          </motion.div>
        )}
      </motion.form>
    )}
  </>
);

export default ContactForm;
```

- [ ] **Step 8: Verify**

Contact section should be full-bleed indigo. BOOWIE heading in cream with "great." in orange. Bottom-border-only inputs in cream. Orange submit button. Social icons are cream squares, orange on hover.

- [ ] **Step 9: Commit**

```bash
git add src/components/ContactSection.js src/components/contact/ContactLabel.js src/components/contact/ContactHeading.js src/components/contact/ContactDescription.js src/components/contact/ContactInfo.js src/components/contact/SocialLinks.js src/components/contact/ContactForm.js
git commit -m "feat(contact): indigo band, BOOWIE heading, bottom-border inputs, orange submit"
```

---

## Task 10: Footer

**Files:**
- Modify: `src/components/Footer.js`

- [ ] **Step 1: Replace `src/components/Footer.js`**

```jsx
import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = ({ showLegal = true }) => (
  <footer style={{ background: 'var(--cream-alt)', borderTop: '2px solid var(--ink)' }}>
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Brand */}
        <div className="mb-8 md:mb-0">
          <h2 className="font-boowie text-2xl mb-3" style={{ color: 'var(--ink)' }}>
            Backend<span style={{ color: 'var(--accent)' }}>&</span>Beyond
          </h2>
          <p className="font-barlow text-xs leading-relaxed max-w-xs mb-4" style={{ color: 'var(--text-sub)' }}>
            Creating exceptional digital experiences that capture attention and drive results.
          </p>
          <div className="flex space-x-3 mb-5">
            {[
              { href: "https://www.linkedin.com/company/backend-and-beyond", icon: <Linkedin size={14} />, label: "LinkedIn" },
              { href: "https://www.instagram.com/backendandbeyond/",          icon: <Instagram size={14} />, label: "Instagram" },
              { href: "https://x.com/backendandbeyond",                        icon: <Twitter size={14} />,   label: "Twitter / X" },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="transition-colors duration-200"
                style={{ color: 'var(--text-sub)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-sub)'}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="font-barlow text-xs" style={{ color: 'var(--text-sub)' }}>
            © {new Date().getFullYear()} backend&amp;beyond. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-14 mt-2 md:mt-0">
          <div>
            <h5 className="font-barlow text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--ink)' }}>Navigation</h5>
            <ul className="space-y-2">
              {[['#home','Home'],['#services','Services'],['#work','Portfolio'],['#about','About'],['#contact','Contact']].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-barlow text-xs transition-colors duration-200"
                    style={{ color: 'var(--text-sub)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-sub)'}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {showLegal && (
            <div>
              <h5 className="font-barlow text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--ink)' }}>Legal</h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-barlow text-xs transition-colors duration-200"
                    style={{ color: 'var(--text-sub)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-sub)'}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
```

- [ ] **Step 2: Verify**

Footer should have cream-alt background with a 2px indigo top border. BOOWIE logo in indigo with orange `&`. Barlow body text in muted indigo-purple. Social icons and links turn orange on hover. No black anywhere.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.js
git commit -m "feat(footer): cream-alt bg, indigo border, BOOWIE logo, orange hover links"
```

---

## Task 11: Final pass — remove black from hero section wrapper

The outer `Layout.js` wrapper div used to have `bg-gradient-to-br from-gray-900`. That is now `var(--cream)`. But `HeroSection.js` itself must also have no residual black.

**Files:**
- Verify: `src/components/HeroSection.js` (no edits needed — already updated in Task 3)

- [ ] **Step 1: Scan all modified files for any remaining black/dark neutrals**

Run this grep to catch any stragglers:

```bash
grep -r "bg-black\|bg-gray-9\|bg-gray-8\|from-gray-9\|from-black\|#000\|#111\|#222\|#333\|text-white\b" src/components --include="*.js" -l
```

- [ ] **Step 2: For each file returned, replace offending values**

Common substitutions:
- `bg-black` → remove or replace with `style={{ background: 'var(--ink)' }}`
- `text-white` on dark section → `style={{ color: 'var(--cream)' }}`
- `bg-gray-900` → remove (components on cream bg need no bg class)
- `border-gray-700` / `border-gray-800` → `style={{ borderColor: 'rgba(45,10,107,0.2)' }}`
- `text-gray-300` / `text-gray-400` → `style={{ color: 'var(--text-sub)' }}`

- [ ] **Step 3: Re-run grep to confirm zero results**

```bash
grep -r "bg-black\|bg-gray-9\|bg-gray-8\|from-gray-9\|from-black\|#000\b\|#111\b\|#222\b\|#333\b" src/components --include="*.js"
```

Expected output: empty (no matches).

- [ ] **Step 4: Full visual review**

Scroll through all six sections at `http://localhost:8000`. Checklist:
- [ ] Nav: cream bg, indigo bottom border, BOOWIE logo
- [ ] Hero: cream bg, geometric shapes drifting, BOOWIE heading indigo, typewriter in orange, indigo marquee at bottom
- [ ] About: cream-alt bg, BOOWIE heading with orange accent, Epilogue 900 stats, indigo top-border per stat
- [ ] Services: full indigo bg, cream BOOWIE heading, ruled rows, orange hover
- [ ] Portfolio: full-bleed images with cream left fade, BOOWIE titles in indigo, orange timer
- [ ] Contact: full indigo bg, BOOWIE heading, bottom-border inputs, orange submit
- [ ] Footer: cream-alt bg, 2px indigo top border, orange hover links

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "fix(design): remove all residual black/dark neutrals, full no-black pass"
```
