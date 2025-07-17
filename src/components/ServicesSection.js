import React, { useState } from 'react';
import { motion } from 'framer-motion';
import showcaseImg from '../images/Showcase MD.avif';

const services = [
  {
    number: '01',
    title: 'Brand Design',
    desc:
      'We create sophisticated brand identities. Crafting memorable logos, refined visuals, and striking graphic designs that command attention, inspire admiration, and elevate your brand above the competition.'
  },
  {
    number: '02',
    title: 'Website Design',
    desc:
      'We create beautiful web designs—custom or on platforms like WordPress, Webflow, Shopify, and Squarespace—to deliver flexible digital experiences that captivate and distinguish you.'
  },
  {
    number: '03',
    title: 'Strategy',
    desc:
      'We craft powerful brand strategies—customized and expertly tailored—to position your brand as a standout leader admired by peers and envied by competitors.'
  }
];

const ServicesSection = ({ darkMode }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  return (
    <section id="services" className="relative min-h-screen flex items-center justify-center py-24 bg-black">    
      {/* Vertical SERVICES label */}
      <div className="absolute left-0 top-24 h-auto flex items-start z-10">
        <div className="bg-gray-900 px-4 py-8 flex items-center" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.2em', borderRadius: '0 0.5rem 0.5rem 0' }}>
          <span className="text-white text-lg font-semibold tracking-widest">SERVICES</span>
        </div>
      </div>
      {/* Main content */}
      <div className="max-w-[1400px] mx-auto px-16 md:px-24 sm:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left: Services List */}
          <div className="flex flex-col justify-center lg:w-2/3">
            <h2 className="font-boowie text-5xl md:text-5xl mb-10 text-white leading-tight">
              Services we're <span className="text-gray-300">exceptionally</span><br />good at:
            </h2>
            <div className="space-y-6 mt-6">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-xl overflow-visible transition-all duration-300"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Gradient hover background, anchored to left of container */}
                  <div className="absolute top-0 left-[-60vw] h-full w-[100vw] md:left-[-50vw] md:w-[80vw] lg:left-[-30vw] lg:w-[70vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" style={{background: 'linear-gradient(90deg, #444 0%, #000 100%)'}}></div>
                  <motion.div className="relative pt-4 pb-4 z-10" 
                    animate={{ x: hoveredIdx == idx ? 32 : 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}>
                    <div className="text-gray-400 text-sm mb-2 font-neutraface">{service.number}</div>
                    <div className="text-2xl font-semibold text-white mb-3">{service.title}</div>
                    <div className="text-gray-400 text-sm leading-relaxed max-w-xl font-neutraface">{service.desc}</div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Description, Button, and Image */}
          <div className="flex flex-col items-center md:items-end justify-center lg:w-1/3 mt-3">
            <div className="mb-32 max-w-xs text-left">
              <p className="text-gray-300 text-sm mb-6 font-neutraface">
                We're your one-stop shop for exceptional design and branding—seamlessly delivering everything you need to make your brand unforgettable.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 left-6 w-full h-full bg-gray-700 rounded-2xl opacity-60 z-0" style={{ filter: 'blur(2px)' }}></div>
              <img
                src={showcaseImg}
                alt="Showcase"
                className="relative z-10 rounded-2xl shadow-2xl w-[350px] md:w-[420px] border-4 border-gray-800 object-cover"
                style={{ aspectRatio: '16/10', background: '#222' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;