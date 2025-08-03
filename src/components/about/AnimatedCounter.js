import React, { useEffect, useState } from "react";

// Custom component for animated counting
const AnimatedCounter = ({ value, duration = 2, className }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Extract numeric part and suffix (like + or %)
    const numericValue = parseInt(value.toString().replace(/[^0-9]/g, ''));
    
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

export default AnimatedCounter;
