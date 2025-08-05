import React from "react";
import { motion } from "framer-motion";

const AboutContent = () => {
  return (
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
            From ideation to deployment, we partner with you to build technology that goes beyond just working—it works brilliantly. Backed by clean code, robust infrastructure, and human-centered design, we create digital ecosystems that don't just solve problems—they move businesses forward.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;
