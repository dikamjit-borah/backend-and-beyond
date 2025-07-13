import React, { useState } from 'react';
import { motion } from 'framer-motion';
import showcaseImg from '../images/Showcase MD.avif';

const services = [
  {
    number: '01',
    title: 'Website Design',
    desc:
      'We offer custom website designs that delivers sleek, sophisticated digital experiences and refined user interfaces that command attention and position your brand among the elite.'
  },
  {
    number: '02',
    title: 'Website Development',
    desc:
      'We specialize in web design and development, building high-performing websites; custom or on platforms like WordPress, Webflow, Shopify, and Squarespace.'
  },
  {
    number: '03',
    title: 'UX/UI/Conversion Rate Optimization',
    desc:
      'Our UX/UI and CRO specialists design intuitive digital experiences; ensuring your website not only looks exceptional but effectively deliver measurable results.'
  }
];

const ServicesSection = ({ darkMode }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  return (
    <section id="services" className={`relative min-h-screen flex items-center justify-center py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>    
      {/* Vertical SERVICES label */}
      <div className="absolute left-0 bottom-96 h-full flex items-center z-10">
        <div className="bg-gray-900 px-4 py-8 flex items-center" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.2em', borderRadius: '0 0.5rem 0.5rem 0' }}>
          <span className="text-white text-lg font-semibold tracking-widest">SERVICES</span>
        </div>
      </div>
      {/* Main content grid */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-20 px-6 sm:px-8">
        {/* Left: Services List */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Services we're <span className="text-gray-300">exceptionally</span><br />good at:
          </h2>
          <div className="space-y-12 mt-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-visible transition-all duration-300"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Gradient hover background, anchored to left of container */}
                <div className="absolute top-0 left-[-60vw] h-full w-[100vw] md:left-[-50vw] md:w-[80vw] lg:left-[-30vw] lg:w-[70vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" style={{background: 'linear-gradient(90deg, #444 0%, #000 100%)'}}></div>
                <motion.div className="relative p-8 md:p-10 z-10" 
                  animate={{ x: hoveredIdx == idx ? 32 : 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}>
                  <div className="text-gray-400 text-sm mb-2">{service.number}</div>
                  <div className="text-2xl font-semibold text-white mb-2">{service.title}</div>
                  <div className="text-gray-400 text-base max-w-xl">{service.desc}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Description, Button, and Image */}
        <div className="flex flex-col items-center md:items-end justify-center">
          <div className="mb-8 max-w-md text-right">
            <p className="text-gray-300 text-base mb-6">
              We're your one-stop shop for exceptional design and branding; seamlessly delivering everything you need to make your brand unforgettable.
            </p>
            <button className="bg-transparent border border-gray-400 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition mb-8">
              View Other Services
            </button>
          </div>
          <div className="relative">
            <div className="absolute -top-6 left-6 w-full h-full bg-gray-700 rounded-2xl opacity-60 z-0" style={{ filter: 'blur(2px)' }}></div>
            <motion.img
              src={showcaseImg}
              alt="Showcase"
              className="relative z-10 rounded-2xl shadow-2xl w-[350px] md:w-[420px] border-4 border-gray-800 object-cover"
              style={{ aspectRatio: '16/10', background: '#222' }}
              animate={{ x: hoveredIdx != null ? 32 : 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;