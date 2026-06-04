import React, { useEffect, useState } from "react";

const AnimatedCounter = ({ value, duration = 2, className }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end    = parseInt(value.toString().replace(/[^0-9]/g, ''), 10);
    let rafId;
    let startTime = null;

    // 500ms delay before starting so scroll-in animation completes first
    const delayTimer = setTimeout(() => {
      const tick = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed  = timestamp - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        // Ease-out cubic — fast start, smooth finish
        const eased    = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * end));
        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setCount(end);
        }
      };
      rafId = requestAnimationFrame(tick);
    }, 500);

    return () => {
      clearTimeout(delayTimer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value, duration]);

  const suffix = value.toString().replace(/[0-9]/g, '');

  return <span className={className}>{count}{suffix}</span>;
};

export default AnimatedCounter;
