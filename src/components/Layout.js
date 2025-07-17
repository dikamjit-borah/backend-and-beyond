import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Layout = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home");

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
      <nav className="fixed top-4 w-full z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <div className="flex-1 flex items-center">
              <span className="font-boowie text-lg tracking-widest select-none">
                Backend&Beyond
              </span>
            </div>
            {/* Centered Nav Links */}
            <div className="flex-1 flex justify-center">
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
                
                <a href="#home" className={`px-6 py-1 transition-all relative z-10 ${activeSection === 'home' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}>Home</a>
                <a href="#about" className={`px-6 py-1 transition-all relative z-10 ${activeSection === 'about' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}>About</a>
                <a href="#services" className={`px-6 py-1 transition-all relative z-10 ${activeSection === 'services' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}>Services</a>
                <a href="#work" className={`px-6 py-1 transition-all relative z-10 ${activeSection === 'work' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}>Work</a>
                <a href="#contact" className={`px-6 py-1 transition-all relative z-10 ${activeSection === 'contact' ? 'text-white font-medium' : 'text-gray-300 hover:text-white'}`}>Contact</a>
              </div>
            </div>
            {/* Contact Us Button */}
            <div className="flex-1 flex justify-end">
              <a href="#contact" className="px-6 py-3 rounded-full bg-black/40 shadow-md text-white font-medium transition-all hover:bg-white/10 text-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
