import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: 'home',      label: 'Home',      href: '/#home',      isPage: false },
  { id: 'about',     label: 'About',     href: '/#about',     isPage: false },
  { id: 'services',  label: 'Services',  href: '/#services',  isPage: false },
  { id: 'portfolio', label: 'Portfolio', href: '/portfolio',   isPage: true  },
  { id: 'contact',   label: 'Contact',   href: '/#contact',   isPage: false },
];

const Layout = ({ children }) => {
  const [activeSection, setActiveSection]     = useState(null);
  const [pathname, setPathname]               = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop]     = useState(false);
  const mobileMenuRef = useRef(null);

  const handleNavClick = (e, item) => {
    if (item.isPage) return; // let the browser navigate normally
    e.preventDefault();
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = item.href;
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setPathname(window.location.pathname);
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const anchorIds = ["home", "about", "services", "contact"];
        let currentSection = null;
        for (const id of anchorIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = id;
              break;
            }
          }
        }
        setActiveSection(prev => prev !== currentSection ? currentSection : prev);
        setShowScrollTop(window.scrollY > 400);
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)', color: 'var(--text-main)' }}>
      {/* Navigation */}
      <nav
        className="fixed top-0 w-full z-50 px-4 md:px-8 lg:px-24"
        style={{ background: 'var(--cream)', borderBottom: '2px solid var(--ink)' }}
      >
        <div className="mx-auto">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <span className="font-boowie text-base md:text-lg select-none" style={{ color: 'var(--ink)' }}>
                Backend<span style={{ color: 'var(--accent)' }}>&</span>Beyond
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden laptop:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = item.isPage
                  ? pathname.startsWith(item.href)
                  : activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className="px-5 py-1 font-jost text-xs font-semibold uppercase tracking-widest relative transition-colors duration-200"
                    style={{ color: isActive ? 'var(--ink)' : 'var(--text-sub)' }}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-5 right-5 h-0.5"
                        style={{ background: 'var(--accent)' }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden laptop:flex justify-end">
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, { id: 'contact', href: '/#contact', isPage: false })}
                className="px-5 py-2 font-jost text-xs font-bold uppercase tracking-widest transition-colors duration-200"
                style={{ background: 'var(--ink)', color: 'var(--cream)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--ink-mid)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}
              >
                Start a Project
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
                {navItems.map((item) => {
                  const isActive = item.isPage
                    ? pathname.startsWith(item.href)
                    : activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className="block px-6 py-3 font-jost text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
                      style={{
                        color: isActive ? 'var(--accent)' : 'var(--text-sub)',
                        borderLeft: isActive ? '3px solid var(--accent)' : '3px solid transparent',
                      }}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>{children}</main>

      {/* Scroll-to-top */}
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
        <span
          className="font-jost font-bold text-sm"
          style={{ display: 'inline-block', transform: 'rotate(-90deg)', lineHeight: 1 }}
        >
          →
        </span>
      </button>
    </div>
  );
};

export default Layout;
