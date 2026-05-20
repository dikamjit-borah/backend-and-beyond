import React from "react";
import { motion } from "framer-motion";

const AboutContent = () => (
  <motion.div
    className="flex flex-col md:flex-row gap-4 md:gap-8 w-full mt-6"
    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    transition={{ duration: 0.6 }}
  >
    <motion.div
      className="flex-1 flex flex-col space-y-4"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <motion.p
        className="font-barlow text-sm leading-relaxed"
        style={{ color: 'var(--text-sub)' }}
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        At Backend and Beyond, we are a multidisciplinary collective of backend engineers, UI/UX designers, full-stack developers, and visual storytellers united by a passion for building purposeful digital experiences.
      </motion.p>
      <motion.p
        className="font-barlow text-sm leading-relaxed"
        style={{ color: 'var(--text-sub)' }}
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        We operate at the intersection of functionality and form — engineering tools that are not only powerful but beautifully executed.
      </motion.p>
    </motion.div>

    <motion.div
      className="flex-1 flex flex-col space-y-4"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <motion.p
        className="font-barlow text-sm leading-relaxed"
        style={{ color: 'var(--text-sub)' }}
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        We specialise in bespoke applications, internal dashboards, automations, and digital products that drive business efficiency and elevate user engagement.
      </motion.p>
      <motion.p
        className="font-barlow text-sm leading-relaxed"
        style={{ color: 'var(--text-sub)' }}
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        From ideation to deployment, we partner with you to build technology that goes beyond just working — it works brilliantly.
      </motion.p>
    </motion.div>
  </motion.div>
);

export default AboutContent;
