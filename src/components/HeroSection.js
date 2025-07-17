import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const starCanvasRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    // Star field effect
    const canvas = starCanvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const width = canvas.width = window.innerWidth;
      const height = canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < 250; i++) {
        // Only draw stars in the beam region (right 35% of the screen)
        let x, y;
        do {
          x = Math.random() * width;
          y = Math.random() * height;
        } while (x < width * 0.65);
        const radius = Math.random() * 1.2 + 0.2;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.globalAlpha = Math.random() * 0.7 + 0.3;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
  }, []);

  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-black"
      style={{
        background: `
          linear-gradient(120deg, #000 50%, #0f1e36 60%, #2e73e220 70%, #5c99ff40 75%, #ffffff 85%, #ffffff 87%, #3b83f660 93%, #3b83f640 100%)
        `,
      }}
    >
      {/* Star field canvas */}
      <canvas
        ref={starCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ display: "block" }}
      />
      <div className="relative z-10 flex flex-col items-start justify-center px-8 md:px-24 max-w-3xl w-full">
        {/* Badge */}
        <div className="mb-4 flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold relative"
             style={{
               background: 'linear-gradient(145deg, #1f2329, #0f1217)',
               boxShadow: `
                 0 6px 12px rgba(0, 0, 0, 0.6),
                 0 2px 4px rgba(0, 0, 0, 0.3),
                 0 1px 0 rgba(255, 255, 255, 0.05) inset,
                 0 -1px 0 rgba(0, 0, 0, 0.4) inset
               `,
               border: '1px solid rgba(255, 255, 255, 0.05)',
               textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)'
             }}>
          {/* Left punch hole */}
          <span className="inline-block w-3 h-3 rounded-full relative"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #4b5563, #1f2937)',
                  boxShadow: `
                    0 0 4px rgba(0, 0, 0, 0.6),
                    0 2px 4px rgba(0, 0, 0, 0.5),
                    0 -2px 2px rgba(0, 0, 0, 0.8) inset,
                    0 2px 2px rgba(255, 255, 255, 0.15) inset
                  `
                }}></span>
          {/* Fire emoji - using Google's Noto Color Emoji */}
          <span 
            className="text-xs" 
            role="img" 
            aria-label="fire"
            style={{
              fontFamily: "'Noto Color Emoji', 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif",
              fontSize: '14px',
              lineHeight: '1',
              display: 'inline-flex',
              alignItems: 'center'
            }}>🔥</span>
          <span className="text-xs text-gray-100 tracking-wide">THE BEST AGENCY IN AI</span>
          {/* Right punch hole */}
          <span className="inline-block w-3 h-3 rounded-full relative"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #4b5563, #1f2937)',
                  boxShadow: `
                    0 0 4px rgba(0, 0, 0, 0.6),
                    0 2px 4px rgba(0, 0, 0, 0.5),
                    0 -2px 2px rgba(0, 0, 0, 0.8) inset,
                    0 2px 2px rgba(255, 255, 255, 0.15) inset
                  `
                }}></span>
        </div>
        {/* Headline */}
        <h1 className={`font-boowie font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-300 via-blue-100 to-white bg-clip-text text-transparent text-left leading-tight transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          The Future of <br /> Business Starts with <br /> AI & Automation 
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block ml-2 -mt-1"
            style={{ transform: "rotate(15deg)" }}
          >
            {/* Sparkles */}
            <path d="M7 4L8 2L9 4L11 5L9 6L8 8L7 6L5 5L7 4Z" fill="white" stroke="#FFDE59" strokeWidth="0.5"/>
            <path d="M11 7L11.5 6L12 7L13 7.5L12 8L11.5 9L11 8L10 7.5L11 7Z" fill="white" stroke="#FFDE59" strokeWidth="0.5"/>
            <path d="M5 7L5.5 6L6 7L7 7.5L6 8L5.5 9L5 8L4 7.5L5 7Z" fill="white" stroke="#FFDE59" strokeWidth="0.5"/>
            
            {/* Star shape at tip */}
            <path 
              d="M8 12L9.5 9L11 12L14 13.5L11 15L9.5 18L8 15L5 13.5L8 12Z" 
              fill="#FFEB3B" 
              stroke="#FFC107" 
              strokeWidth="0.5"
            />
            
            {/* Main wand stick - tapered */}
            <path 
              d="M9 13.5L9.5 14V28H9V13.5Z" 
              fill="#D4AF37" 
              stroke="#FFDE59" 
              strokeWidth="0.5"
            />
            <path 
              d="M10 13.5L10.5 14V28H10V13.5Z" 
              fill="#D4AF37" 
              stroke="#FFDE59" 
              strokeWidth="0.5"
            />
            
            {/* Decorative bands */}
            <rect x="9" y="16" width="1.5" height="0.5" fill="#FFDE59" stroke="#FFDE59" strokeWidth="0.2"/>
            <rect x="9" y="19" width="1.5" height="0.5" fill="#FFDE59" stroke="#FFDE59" strokeWidth="0.2"/>
            <rect x="9" y="22" width="1.5" height="0.5" fill="#FFDE59" stroke="#FFDE59" strokeWidth="0.2"/>
            
            {/* Handle with grip texture */}
            <rect x="8.5" y="28" width="2.5" height="8" rx="0.5" fill="#222222" stroke="#444444" strokeWidth="0.5"/>
            
            {/* Grip texture lines */}
            <line x1="9" y1="29" x2="10.5" y2="29" stroke="#444444" strokeWidth="0.3"/>
            <line x1="9" y1="30" x2="10.5" y2="30" stroke="#444444" strokeWidth="0.3"/>
            <line x1="9" y1="31" x2="10.5" y2="31" stroke="#444444" strokeWidth="0.3"/>
            <line x1="9" y1="32" x2="10.5" y2="32" stroke="#444444" strokeWidth="0.3"/>
            <line x1="9" y1="33" x2="10.5" y2="33" stroke="#444444" strokeWidth="0.3"/>
            <line x1="9" y1="34" x2="10.5" y2="34" stroke="#444444" strokeWidth="0.3"/>
            <line x1="9" y1="35" x2="10.5" y2="35" stroke="#444444" strokeWidth="0.3"/>
            
            {/* Bottom cap of handle */}
            <rect x="8.5" y="36" width="2.5" height="0.5" rx="0.25" fill="#333333" stroke="#555555" strokeWidth="0.2"/>
            
          </svg>
        </h1>
        {/* Description */}
        <p className="font-neutraface text-base md:text-lg text-gray-500 mb-8 text-left max-w-xl">
          Save time, improve efficiency, and make smarter decisions with AI solutions customized for your business
        </p>
        {/* CTA Button */}
        <button
          onClick={scrollToContact}
          className="text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 mb-12 text-base tracking-wide"
          style={{
            background: 'linear-gradient(135deg, #ffffffc9 0%, #3b82f6 25%, #3b82f6 75%, #ffffffd9 100%)',
            boxShadow: '0 4px 14px rgba(59, 130, 246, 0.5)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          Get a Free Consultation
        </button>
      </div>
      
      {/* Trusted by logos - positioned at bottom */}
      <div className="absolute bottom-12 left-0 w-full px-8 md:px-24">
        <div className="flex flex-col gap-2">
          <span className="text-xs text-gray-500 tracking-widest uppercase mb-4">Trusted by funded startups and tech giants alike</span>
          <div className="flex flex-wrap gap-8 items-center">
            <span className="text-gray-500 text-sm font-semibold">Snowflake</span>
            <span className="text-gray-500 text-sm font-semibold">Cactus</span>
            <span className="text-gray-500 text-sm font-semibold">Vision</span>
            <span className="text-gray-500 text-sm font-semibold">Luminous</span>
            <span className="text-gray-500 text-sm font-semibold">ProNature</span>
            <span className="text-gray-500 text-sm font-semibold">Recharge</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
