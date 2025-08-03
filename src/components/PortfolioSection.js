import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  projects,
  PortfolioImage,
  PortfolioHeader,
  PortfolioContent,
  PortfolioNavigation,
  PortfolioGradients
} from "./portfolio";



const PortfolioSection = () => {
	const [current, setCurrent] = useState(0);
	const [direction, setDirection] = useState(0); // -1 for left, 1 for right
	const [isAnimating, setIsAnimating] = useState(false);
	const [previousIndex, setPreviousIndex] = useState(null);
	const [isHovered, setIsHovered] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const [timerKey, setTimerKey] = useState(0); // Key to force timer animation reset
	const [isMobile, setIsMobile] = useState(false);
	
	// Animation controls for scroll-triggered animations
	const controls = useAnimation();
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
	
	// Detect mobile devices
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		
		checkIfMobile();
		window.addEventListener('resize', checkIfMobile);
		
		return () => window.removeEventListener('resize', checkIfMobile);
	}, []);
	
	// Trigger animations when section comes into view
	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [controls, isInView]);
	
	const prev = useCallback(() => {
		if (isAnimating) return;
		setDirection(-1); // moving left
		setIsAnimating(true);
		setPreviousIndex(current);
		setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
		setTimerKey(prev => prev + 1); // Reset timer on manual slide change
	}, [isAnimating, current]);
	
	const next = useCallback(() => {
		if (isAnimating) return;
		setDirection(1); // moving right
		setIsAnimating(true);
		setPreviousIndex(current);
		setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));
		setTimerKey(prev => prev + 1); // Reset timer on manual slide change
	}, [isAnimating, current]);
	
	// Reset animation state after transition completes
	useEffect(() => {
		if (!isAnimating) return;
		
		const timer = setTimeout(() => {
			setIsAnimating(false);
			setPreviousIndex(null);
		}, 800); // Match this with the CSS transition duration (0.8s)
		
		return () => clearTimeout(timer);
	}, [isAnimating, current]);
	
	// Reset timer when slide changes
	useEffect(() => {
		setTimerKey(prev => prev + 1);
	}, [current]);
	
	// We don't need the interval-based auto-slide anymore since the timer animation handles it
	// The onAnimationComplete handler on the circle will trigger the slide change

	return (
		<motion.section
			ref={sectionRef}
			id="work"
			className="relative w-full bg-black overflow-hidden"
			initial="hidden"
			animate={controls}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 }
			}}
			transition={{ duration: 0.7 }}
			onMouseEnter={() => {
				setIsHovered(true);
				//setIsPaused(true); // Pause auto-slide on hover
			}}
			onMouseLeave={() => {
				setIsHovered(false);
				//setIsPaused(false); // Resume auto-slide when not hovering
				setTimerKey(prev => prev + 1); // Reset timer on mouse leave
			}}
		>
			
			{/* Full-bleed background image container */}
			<div className="relative w-full flex items-center justify-center">
				<div className="relative w-full">
					<PortfolioImage 
						current={current}
						isAnimating={isAnimating}
						previousIndex={previousIndex}
						direction={direction}
					/>
                        
					<PortfolioGradients 
						isHovered={isHovered}
						isMobile={isMobile}
					/>
					
					{/* Content Container - Fixed positioning relative to image */}
					<div className="absolute inset-0">
						{/* Main content container - matches the max-w-[1400px] from other sections */}
						<div className="absolute inset-0 flex flex-col justify-between z-20">
							<PortfolioHeader 
								current={current}
								timerKey={timerKey}
								isPaused={isPaused}
								isInView={isInView}
								isAnimating={isAnimating}
								next={next}
								isHovered={isHovered}
								isMobile={isMobile}
							/>

							<PortfolioContent 
								current={current}
								isAnimating={isAnimating}
								previousIndex={previousIndex}
								direction={direction}
								isHovered={isHovered}
								isMobile={isMobile}
							/>
						</div>

						<PortfolioNavigation 
							prev={prev}
							next={next}
							isInView={isInView}
							isHovered={isHovered}
							isMobile={isMobile}
						/>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default PortfolioSection;
