import React, { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          darkMode ? "bg-gray-900/90" : "bg-white/90"
        } backdrop-blur-sm border-b ${
          darkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Backend & Beyond
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-600 transition-colors">
                Home
              </a>
              <a
                href="#about"
                className="hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="hover:text-blue-600 transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col space-y-2">
                <a
                  href="#home"
                  className="py-2 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="py-2 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="py-2 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#portfolio"
                  className="py-2 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="py-2 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { darkMode })
        )}
      </main>
    </div>
  );
};

export default Layout;
