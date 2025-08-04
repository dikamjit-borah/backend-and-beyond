import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Layout = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle smooth scrolling when clicking on navigation links
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "work", "contact"];
      let currentSection = activeSection;
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in the viewport (with some offset for better UX)
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on mount
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 md:top-4 w-full z-50 backdrop-blur-sm px-4 md:px-8 lg:px-20">
        <div className="mx-auto">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <div className="flex items-center">
              <span className="font-boowie text-base md:text-lg tracking-widest select-none">
                Backend&Beyond
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="relative flex py-2 rounded-full bg-black/30 border border-white/10 shadow-lg shadow-black/20 backdrop-blur-md">
                {/* Shiny effect overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse pointer-events-none"></div>
                <div className="absolute -inset-[1px] rounded-full bg-gradient-to-tr from-blue-500/20 via-purple-500/10 to-pink-500/20 blur-sm opacity-50 pointer-events-none"></div>
                
                {/* Active section indicator that slides between nav items */}
                <div 
                  className="absolute h-full top-0 transition-all duration-300 ease-in-out z-0 rounded-full bg-white/10"
                  style={{
                    left: (() => {
                      switch (activeSection) {
                        case 'home': return '0%';
                        case 'about': return '19%';
                        case 'services': return '39%';
                        case 'work': return '60%';
                        case 'contact': return '80%';
                        default: return '0%';
                      }
                    })(),
                    width: '20%'
                  }}
                />
                
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={`px-6 py-1 transition-all relative z-10 ${activeSection === 'home' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}>Home</a>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={`px-6 py-1 transition-all relative z-10 ${activeSection === 'about' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}>About</a>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={`px-6 py-1 transition-all relative z-10 ${activeSection === 'services' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}>Services</a>
                <a href="#work" onClick={(e) => handleNavClick(e, 'work')} className={`px-6 py-1 transition-all relative z-10 ${activeSection === 'work' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}>Work</a>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={`px-6 py-1 transition-all relative z-10 ${activeSection === 'contact' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}>Contact</a>
              </div>
            </div>

            {/* Desktop Contact Us Button */}
            <div className="hidden md:flex justify-end">
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-6 py-3 rounded-full bg-black/40 shadow-md text-white font-medium transition-all hover:bg-white/10 text-sm">
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full bg-black/30 border border-white/10 shadow-lg shadow-black/20 backdrop-blur-md transition-all hover:bg-white/10"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-14 left-4 right-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden">
              {/* Shiny effect overlay for mobile menu */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse pointer-events-none"></div>
              <div className="absolute -inset-[1px] bg-gradient-to-tr from-blue-500/20 via-purple-500/10 to-pink-500/20 blur-sm opacity-50 pointer-events-none rounded-xl"></div>
              
              <div className="relative z-10 py-3">
                {/* Mobile Navigation Links */}
                <div className="space-y-0.5 px-3">
                  <a 
                    href="#home" 
                    onClick={(e) => handleNavClick(e, 'home')} 
                    className={`block px-3 py-2.5 rounded-lg transition-all text-sm ${
                      activeSection === 'home' 
                        ? 'bg-white/10 text-white font-medium' 
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    Home
                  </a>
                  <a 
                    href="#about" 
                    onClick={(e) => handleNavClick(e, 'about')} 
                    className={`block px-3 py-2.5 rounded-lg transition-all text-sm ${
                      activeSection === 'about' 
                        ? 'bg-white/10 text-white font-medium' 
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    About
                  </a>
                  <a 
                    href="#services" 
                    onClick={(e) => handleNavClick(e, 'services')} 
                    className={`block px-3 py-2.5 rounded-lg transition-all text-sm ${
                      activeSection === 'services' 
                        ? 'bg-white/10 text-white font-medium' 
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    Services
                  </a>
                  <a 
                    href="#work" 
                    onClick={(e) => handleNavClick(e, 'work')} 
                    className={`block px-3 py-2.5 rounded-lg transition-all text-sm ${
                      activeSection === 'work' 
                        ? 'bg-white/10 text-white font-medium' 
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    Work
                  </a>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleNavClick(e, 'contact')} 
                    className={`block px-3 py-2.5 rounded-lg transition-all text-sm ${
                      activeSection === 'contact' 
                        ? 'bg-white/10 text-white font-medium' 
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
