import React, { useState } from "react";
import { motion } from "framer-motion";

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

const ServicesList = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
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
  );
};

export default ServicesList;
