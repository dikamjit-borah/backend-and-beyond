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
      className="py-24 bg-[#0D0D0D] text-white"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1400px] mx-auto px-16 md:px-24 sm:px-8">
        
        
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Left column with heading and image */}
          <motion.div 
            className="flex flex-col items-left lg:w-2/5"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="mb-4 flex items-center justify-left pl-8"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <span className="text-sm uppercase tracking-wider text-gray-400">OUR ETHOS</span>
              <img
                src={arrowImg}
                alt="Arrow"
                className="ml-2 h-6 w-auto"
              />
            </motion.div>
            <motion.div 
              className="relative mb-12 max-w-lg"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="absolute top-0 bottom-0 left-0 w-5 bg-gradient-to-b from-purple-900 to-black"
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>
              <div className="pl-8">
                <motion.h2 
                  className="font-boowie text-3xl md:text-3xl mb-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >Boutique By Choice.</motion.h2>
                <motion.h2 
                  className="font-boowie text-3xl md:text-3xl mb-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >Because You Can't Scale</motion.h2>
                <motion.h2 
                  className="font-boowie text-3xl md:text-3xl mb-2 text-purple-600"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >Great Design.</motion.h2>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-4 max-w-[25rem] w-full"
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
            className="flex flex-col items-start lg:w-3/5 pl-8 pt-2"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Two column layout with two text items in each column */}
            <motion.div 
              className="flex gap-8 w-full mt-6"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.6 }}
            >
              {/* Left Column */}
              <motion.div 
                className="flex-1 flex flex-col space-y-6"
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
                  <p className="text-base leading-relaxed text-gray-300 text-sm font-neutraface">
                    Design matters to us—and truly exceptional design is rare. Big agencies often scale by standardizing their process, churning out predictable work that, to us, misses the whole point of design.
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
                  <p className="text-base leading-relaxed text-gray-300 text-sm font-neutraface">
                    Keeping things small allows us to be selective. Every designer or strategist who joins is here intentionally—not because they tick boxes, but because they deliver exceptional work.
                  </p>
                </motion.div>
              </motion.div>
              
              {/* Right Column */}
              <motion.div 
                className="flex-1 flex flex-col space-y-6"
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
                  <p className="text-base leading-relaxed text-gray-300 text-sm font-neutraface">
                    because their work speaks for itself. It's less about prestige and more about pride: pride in delivering designs clients are excited to show off.
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
                  <p className="text-base leading-relaxed text-gray-300 text-sm font-neutraface">
                    Working with us isn't about choosing perfection; it's about choosing people who actually care about how things turn out. The kind of work that looks, feels, and works like it's worth every dollar invested.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Stats section */}
            <motion.div 
              className="grid grid-cols-4 gap-4 pt-8 mt-8 w-full"
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
                  className="text-4xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  {isInView && <AnimatedCounter value="85%" duration={2.5} className="text-4xl font-bold text-white" />}
                </motion.p>
                <p className="text-xs text-white mt-1 font-bold font-neutraface">Client Referral Rate</p>
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
                  className="text-4xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  {isInView && <AnimatedCounter value="210+" duration={2.5} className="text-4xl font-bold text-white" />}
                </motion.p>
                <p className="text-xs text-white mt-1 font-bold font-neutraface">Projects Delivered</p>
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
                  className="text-4xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  {isInView && <AnimatedCounter value="30+" duration={2.5} className="text-4xl font-bold text-white" />}
                </motion.p>
                <p className="text-xs text-white mt-1 font-bold font-neutraface">Industry Served</p>
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
                  className="text-4xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  {isInView && <AnimatedCounter value="100%" duration={2.5} className="text-4xl font-bold text-white" />}
                </motion.p>
                <p className="text-xs text-white mt-1 font-bold font-neutraface">In-House Designers</p>
              </motion.div>
            </motion.div>
            
            {/* Client logos */}
            <motion.div 
              className="pt-8 grid grid-cols-5 gap-6 items-center opacity-70 w-full"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 0.7 }
              }}
              transition={{ duration: 1.0, delay: 1.5 }}
            >
              <motion.img 
                src={logo1} 
                alt="Client Logo" 
                className="h-15 w-auto filter grayscale" 
                whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0)" }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src={logo2} 
                alt="Client Logo" 
                className="h-15 w-auto filter grayscale" 
                whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0)" }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src={logo3} 
                alt="Client Logo" 
                className="h-15 w-auto filter grayscale" 
                whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0)" }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src={logo4} 
                alt="Client Logo" 
                className="h-15 w-auto filter grayscale" 
                whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0)" }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src={logo5} 
                alt="Client Logo" 
                className="h-15 w-auto filter grayscale" 
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
