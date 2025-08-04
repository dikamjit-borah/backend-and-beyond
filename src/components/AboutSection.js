import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import aboutImage from "../images/about.avif";
import logo1 from "../images/logo1.avif";
import logo2 from "../images/logo2.avif";
import logo3 from "../images/logo3.avif";
import logo4 from "../images/logo4.avif";
import logo5 from "../images/logo5.avif";
import arrowImg from "../images/arrow (1).avif";

// Custom component for animated counting
const AnimatedCounter = ({ value, duration = 2, className }) => {
  const [count, setCount] = useState(0);
  const [isCountingComplete, setIsCountingComplete] = useState(false);
  
  useEffect(() => {
    // Extract numeric part and suffix (like + or %)
    const numericValue = parseInt(value.toString().replace(/[^0-9]/g, ''));
    const suffix = value.toString().replace(/[0-9]/g, '');
    
    // Don't start animation immediately, wait a bit
    const timer = setTimeout(() => {
      let start = 0;
      const end = numericValue;
      const totalFrames = Math.min(end, duration * 60); // 60fps for [duration] seconds
      const incrementPerFrame = end / totalFrames;
      
      const timer = setInterval(() => {
        start += incrementPerFrame;
        if (start > end) {
          setCount(end);
          setIsCountingComplete(true);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60); // 60fps
      
      return () => clearInterval(timer);
    }, 500); // 500ms delay before starting
    
    return () => clearTimeout(timer);
  }, [value, duration]);
  
  // Display the value with the original suffix
  const suffix = value.toString().replace(/[0-9]/g, '');
  
  return (
    <span className={className}>
      {count}{suffix}
    </span>
  );
};

const AboutSection = ({ darkMode }) => {
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
      id="about"
      className="py-12 md:py-24 bg-[#0D0D0D] text-white"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden">
        
        
        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-12 lg:gap-6">
          {/* Left column with heading and image */}
          <motion.div 
            className="flex flex-col items-left w-full lg:w-2/5"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="mb-4 flex items-center justify-left pl-4 sm:pl-8"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <span className="text-xs sm:text-sm uppercase tracking-wider text-gray-400">OUR ETHOS</span>
              <img
                src={arrowImg}
                alt="Arrow"
                className="ml-2 h-6 w-auto"
              />
            </motion.div>
            <motion.div 
              className="relative mb-8 md:mb-12 max-w-lg"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="absolute top-0 bottom-0 left-0 w-3 sm:w-5 bg-gradient-to-b from-purple-900 to-black"
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>
              <div className="pl-4 sm:pl-8">
                <motion.h2 
                  className="font-boowie text-2xl sm:text-3xl md:text-3xl mb-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >Seamless tech</motion.h2>
                <motion.h2 
                  className="font-boowie text-2xl sm:text-3xl md:text-3xl mb-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >elegant design & engineered for </motion.h2>
                <motion.h2 
                  className="font-boowie text-2xl sm:text-3xl md:text-3xl mb-2 text-purple-600"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >modern businesses.</motion.h2>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-4 max-w-[20rem] sm:max-w-[25rem] w-full"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.7, delay: 1.0 }}
            >
              <img 
                src={aboutImage} 
                alt="Design workspace with notes and sketches" 
                className="rounded-lg w-full h-auto"
              />
            </motion.div>
          </motion.div>
          
          {/* Right column with content */}
          <motion.div 
            className="flex flex-col items-start w-full lg:w-3/5 pl-0 lg:pl-8 pt-2 mt-4 md:mt-8 lg:mt-0"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Two column layout with two text items in each column */}
            <motion.div 
              className="flex flex-col md:flex-row gap-4 md:gap-8 w-full mt-6"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.6 }}
            >
              {/* Left Column */}
              <motion.div 
                className="flex-1 flex flex-col space-y-4 md:space-y-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
              >
                {/* Top text item */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <p className="text-sm md:text-sm leading-relaxed text-gray-300 font-neutraface">
                    At Backend and Beyond, we are a multidisciplinary collective of backend engineers, UI/UX designers, full-stack developers, and visual storytellers united by a passion for building purposeful digital experiences. Our team blends the precision of systems architects, the vision of creative technologists, and the craftsmanship of interface artisans to translate complex ideas into intuitive, high-performing solutions.
                  </p>
                </motion.div>
                
                {/* Bottom text item */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <p className="text-sm md:text-sm leading-relaxed text-gray-300 font-neutraface">
                    We operate at the intersection of functionality and form—engineering tools that are not only powerful but beautifully executed. From clean API architecture to elegant front-end aesthetics, every project we undertake is driven by our commitment to clarity, performance, and design excellence.
                  </p>
                </motion.div>
              </motion.div>
              
              {/* Right Column */}
              <motion.div 
                className="flex-1 flex flex-col space-y-4 md:space-y-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
              >
                {/* Top text item */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <p className="text-sm md:text-sm leading-relaxed text-gray-300 font-neutraface">
                    We specialize in crafting bespoke applications, internal dashboards, automations, and digital products that drive business efficiency, strengthen brand identity, and elevate user engagement. Whether you're a startup with a disruptive idea or an enterprise seeking operational tools, we shape your vision into reality through tailored, scalable solutions.
                  </p>
                </motion.div>
                
                {/* Bottom text item */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <p className="text-sm md:text-base leading-relaxed text-gray-300 font-neutraface">
                    From ideation to deployment, we partner with you to build technology that goes beyond just working—it works brilliantly. Backed by clean code, robust infrastructure, and human-centered design, we create digital ecosystems that don’t just solve problems—they move businesses forward.


                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Stats section */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 pt-6 md:pt-8 mt-6 md:mt-8 w-full"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.div 
                className="text-left"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <motion.p 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  {isInView && <AnimatedCounter value="85%" duration={2.5} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white" />}
                </motion.p>
                <p className="text-xs md:text-xs text-white mt-1 font-bold font-neutraface">Client Referral Rate</p>
              </motion.div>
              <motion.div 
                className="text-left"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <motion.p 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  {isInView && <AnimatedCounter value="210+" duration={2.5} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white" />}
                </motion.p>
                <p className="text-xs md:text-xs text-white mt-1 font-bold font-neutraface">Projects Delivered</p>
              </motion.div>
              <motion.div 
                className="text-left"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <motion.p 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  {isInView && <AnimatedCounter value="30+" duration={2.5} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white" />}
                </motion.p>
                <p className="text-xs md:text-xs text-white mt-1 font-bold font-neutraface">Industry Served</p>
              </motion.div>
              <motion.div 
                className="text-left"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <motion.p 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  {isInView && <AnimatedCounter value="100%" duration={2.5} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white" />}
                </motion.p>
                <p className="text-xs md:text-xs text-white mt-1 font-bold font-neutraface">In-House Designers</p>
              </motion.div>
            </motion.div>
            
            {/* Client logos */}
            <motion.div 
              className="pt-6 md:pt-8 grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 items-center opacity-70 w-full"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 0.7 }
              }}
              transition={{ duration: 1.0, delay: 1.5 }}
            >
              <motion.img 
                src={logo1} 
                alt="Client Logo" 
                className="h-16 md:h-18 w-auto filter grayscale" 
                whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0)" }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src={logo2} 
                alt="Client Logo" 
                className="h-16 md:h-18 w-auto filter grayscale" 
                whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0)" }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src={logo3} 
                alt="Client Logo" 
                className="h-16 md:h-18 w-auto filter grayscale" 
                whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0)" }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src={logo4} 
                alt="Client Logo" 
                className="h-16 md:h-18 w-auto filter grayscale" 
                whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0)" }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src={logo5} 
                alt="Client Logo" 
                className="h-16 md:h-18 w-auto filter grayscale " 
                whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
