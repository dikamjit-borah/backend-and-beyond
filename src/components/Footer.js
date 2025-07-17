import React from "react";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-4">
      <div className="max-w-5xl mx-auto pt-12 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-start text-gray-400 text-xs">
          <div className="mb-6 md:mb-0">
            <h2 className="font-boowie text-2xl text-white mb-3">Backend&Beyond</h2>
            <p className="mb-3 max-w-xs">Creating exceptional digital experiences that capture attention and drive results.</p>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
                <Twitter size={16} />
              </a>
            </div>
            <p>© {new Date().getFullYear()} backend&beyond. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 mt-6 md:mt-0">
            <div>
              <h5 className="text-white font-medium text-sm mb-4">Navigation</h5>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-medium text-sm mb-4">Legal</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
