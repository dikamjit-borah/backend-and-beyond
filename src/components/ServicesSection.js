import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import showcaseImg from '../images/Showcase MD.avif';

const services = [
  {
    number: 'Build powerful digital products that scale beautifully',
    title: 'Smart Software, Seamless Systems',
    desc:
      'From intelligent SaaS platforms to full-stack web and mobile applications, we engineer high-performance tools, dashboards, and systems tailored to your business logic and growth strategy.'
  },
  {
    number: 'Work smarter with systems that work for you',
    title: 'AI Agents & Automation Architecture',
    desc:
      'From autonomous agents to custom process automations, we integrate AI where it matters—augmenting your workflows, enhancing decision-making, and reducing human overhead.'
  },
  {
    number: 'Beyond the Numbers',
    title: 'Data, Decoded',
    desc:
      'Turn raw data into visual intelligence. We craft next-gen data interfaces, analytics layers, and visualization dashboards that transform complexity into clarity—so you can act faster, smarter, and with confidence.'
  },
  {
    number: 'Design that speaks, systems that scale.',
    title: 'Brand Beyond Aesthetics',
    desc:
      'We help shape your brand from the inside out—merging thoughtful UI/UX design with cohesive brand identity to create experiences that are as intuitive as they are unforgettable.'
  }
];

const ServicesSection = ({ darkMode }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Animation controls
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      id="services"
      className="relative min-h-screen flex items-center justify-center py-12 md:py-24 bg-black overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Vertical SERVICES label */}
      <motion.div
        className="absolute left-0 top-24 h-auto flex items-start z-10 hidden lg:flex"
        variants={{
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
      >
        <motion.div
          className="bg-gray-900 px-4 py-8 flex items-center"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.2em', borderRadius: '0 0.5rem 0.5rem 0' }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-white text-lg font-semibold tracking-widest">SERVICES</span>
        </motion.div>
      </motion.div>
      {/* Mobile section label - positioned at top */}
      <motion.div 
        className="absolute top-0 right-2 lg:hidden z-10"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="bg-gray-900 px-3 sm:px-4 py-2 sm:py-3 rounded-b-lg"
          style={{ borderRadius: '0 0 0.5rem 0.5rem' }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-white text-xs sm:text-sm font-semibold tracking-widest">SERVICES</span>
        </motion.div>
      </motion.div>
      
      {/* Main content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 relative z-20 overflow-hidden">
        
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16">
          {/* Left: Services List */}
          <motion.div
            className="flex flex-col justify-center w-full lg:w-2/3"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2
              className="font-boowie text-3xl sm:text-4xl md:text-5xl mb-8 md:mb-10 text-white leading-tight"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Services we're
              </motion.span>{" "}
              <motion.span
                className="text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                exceptionally
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                good at:
              </motion.span>
            </motion.h2>
            <motion.div
              className="space-y-4 md:space-y-6 mt-4 md:mt-6"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  className="group relative rounded-xl overflow-visible transition-all duration-300"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, delay: 0.5 + idx * 0.2 }}
                >
                  {/* Gradient hover background, anchored to left of container */}
                  <motion.div
                    className="absolute top-0 left-[-60vw] h-full w-[100vw] md:left-[-50vw] md:w-[80vw] lg:left-[-30vw] lg:w-[70vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0 hidden md:block"
                    style={{ background: 'linear-gradient(90deg, #444 0%, #000 100%)' }}
                    whileHover={{ opacity: 1 }}
                  ></motion.div>
                  <motion.div
                    className="relative pt-3 pb-3 md:pt-4 md:pb-4 z-10"
                    animate={{ 
                      x: hoveredIdx === idx ? (typeof window !== 'undefined' && window.innerWidth >= 768 ? 32 : 0) : 0 
                    }}
                    whileHover={{ 
                      scale: typeof window !== 'undefined' && window.innerWidth >= 768 ? 1.02 : 1 
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    <motion.div
                      className="text-gray-400 text-xs sm:text-sm mb-1 md:mb-2 font-neutraface"
                      animate={{
                        color: hoveredIdx === idx ? '#ffffff' : '#9CA3AF',
                        scale: hoveredIdx === idx ? 1.05 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.number}
                    </motion.div>
                    <motion.div
                      className="text-xl sm:text-2xl font-semibold text-white mb-2 md:mb-3"
                      animate={{ 
                        scale: hoveredIdx === idx ? (typeof window !== 'undefined' && window.innerWidth >= 768 ? 1.05 : 1) : 1 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.title}
                    </motion.div>
                    <motion.div
                      className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xl font-neutraface"
                      animate={{
                        color: hoveredIdx === idx ? '#E5E7EB' : '#9CA3AF'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.desc}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Description, Button, and Image */}
          <motion.div
            className="flex flex-col items-center md:items-end justify-center w-full lg:w-1/3 mt-8 lg:mt-3"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div
              className="mb-8 md:mb-16 lg:mb-32 max-w-xs text-center md:text-left"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.p
                className="text-gray-300 text-sm md:text-sm mb-4 md:mb-6 font-neutraface"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                We build beautifully engineered digital solutions that blend design, intelligence, and scalability.              </motion.p>
            </motion.div>
            <motion.div
              className="relative"
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.7,
                duration: 0.8
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="absolute -top-3 md:-top-6 left-3 md:left-6 w-full h-full bg-gray-700 rounded-2xl opacity-60 z-0"
                style={{ filter: 'blur(2px)' }}
                animate={isInView ? {
                  x: [0, 5, 0, -5, 0],
                  y: [0, -5, 0, 5, 0],
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 12,
                    ease: "easeInOut"
                  }
                } : {}}
              ></motion.div>
              <motion.img
                src={showcaseImg}
                alt="Showcase"
                className="relative z-10 rounded-2xl shadow-2xl w-[280px] sm:w-[350px] md:w-[420px] border-2 md:border-4 border-gray-800 object-cover"
                style={{ aspectRatio: '16/10', background: '#222' }}
                animate={isInView ? {
                  x: [0, -3, 0, 3, 0],
                  y: [0, 3, 0, -3, 0],
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 10,
                    ease: "easeInOut"
                  }
                } : {}}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;