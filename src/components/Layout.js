import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Layout = ({ children }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mobileMenuRef = useRef(null);
  const navItemRefs = useRef([]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"];
      let currentSection = null;
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
    const handleScrollTop = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollTop);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollTop);
    };
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

  const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
  const labels   = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

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
                  href={`/#${section}`}
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
                href="/#contact"
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
                    href={`/#${section}`}
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

      {/* Scroll-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center transition-all duration-300"
        style={{
          background: 'var(--ink)',
          color: 'var(--cream)',
          border: '1.5px solid rgba(45,10,107,0.2)',
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? 'auto' : 'none',
          transform: showScrollTop ? 'translateY(0)' : 'translateY(12px)',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; }}
      >
        ↑
      </button>
    </div>
  );
};

export default Layout;
