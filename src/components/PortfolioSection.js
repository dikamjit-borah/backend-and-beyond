import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import your images
import project1 from "../images/projects/Apex Luxe Case Study (1).avif";
import project2 from "../images/projects/Strideform Case Study (1).avif";
import project3 from "../images/projects/Trailblaze Outfitters Case Study (1).avif";

const projects = [
	{
		title: "Hearth & Honey",
		description:
			"Hearth & Honey aimed to create an online presence that embodied the warmth and authenticity of their artisanal bakery. ",
    	description2:
			"We developed a charming, inviting website featuring vibrant photography, handcrafted design touches, and a straightforward ordering process. Customers can now practically smell the freshly baked goods right from their screens.",
		image: project1,
	},
	{
		title: "Modernist Homes",
		description:
			"A showcase for a luxury real estate brand, blending modern aesthetics with immersive browsing and seamless property exploration.",
    description2:"",
		image: project2,
	},
	{
		title: "Artisan Coffee",
		description:
			"Trailblaze Outfitters wanted their website to inspire adventure seekers.",
    description2:
    "We created an energetic, bold digital experience featuring striking imagery, interactive product displays, and a seamless e-commerce platform. The final result is a website as rugged and reliable as the gear they offer.",
		image: project3,
	},
];



const PortfolioSection = () => {
	const [current, setCurrent] = useState(0);
	const [direction, setDirection] = useState(0); // -1 for left, 1 for right
	const [isAnimating, setIsAnimating] = useState(false);
	const [previousIndex, setPreviousIndex] = useState(null);
	const [isHovered, setIsHovered] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const [timerKey, setTimerKey] = useState(0); // Key to force timer animation reset
	
	// Animation controls for scroll-triggered animations
	const controls = useAnimation();
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
	
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
					<div className="relative w-full overflow-hidden" style={{ position: 'relative' }}>
						{/* Show both previous and current images during animation */}
						{isAnimating && previousIndex !== null && (
							<motion.img
								src={projects[previousIndex].image}
								alt="Previous Project"
								className={`w-full h-auto min-h-[600px] object-cover object-center absolute top-0 left-0 ${
									direction > 0 ? 'slide-out-left' : 'slide-out-right'
								}`}
								initial={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
							/>
						)}
						<motion.img
							src={projects[current].image}
							alt="Project Background"
							className={`w-full h-auto min-h-[600px] object-cover object-center ${
								isAnimating ? (direction > 0 ? 'slide-in-right' : 'slide-in-left') : ''
							}`}
							initial={{ scale: isAnimating ? 1.05 : 1 }}
							animate={{ scale: 1 }}
							transition={{ 
								duration: isAnimating ? 0.8 : 1.2, 
								ease: "easeOut" 
							}}
						/>
                        
                        {/* Top Gradient - Moved inside the image container but above the images */}
						<motion.div 
							className="absolute top-0 w-full h-96 bg-gradient-to-b from-black/100 to-transparent pointer-events-none z-10"
							initial={{ opacity: 0, y: -50 }}
							animate={{ 
								opacity: isHovered ? 1 : 0, 
								y: isHovered ? 0 : -50 
							}}
							transition={{ duration: 0.5 }}
						/>
						{/* Bottom Gradient - Moved inside the image container but above the images */}
						<motion.div 
							className="absolute bottom-0 w-full h-[25rem] bg-gradient-to-t from-black/100 to-transparent pointer-events-none z-10"
							initial={{ opacity: 0, y: 50 }}
							animate={{ 
								opacity: isHovered ? 1 : 0, 
								y: isHovered ? 0 : 50 
							}}
							transition={{ duration: 0.5 }}
						/>
					</div>
					
					{/* Content Container - Fixed positioning relative to image */}
					<div className="absolute inset-0">

						
						{/* Main content container - matches the max-w-[1400px] from other sections */}
						<div className="absolute inset-0 flex flex-col justify-between z-20">
							<motion.div 
								className="max-w-[1400px] mx-auto px-16 md:px-24 sm:px-8 w-full pt-16"
								initial={{ opacity: 0, y: 30 }}
								animate={{ 
									opacity: isHovered ? 1 : 0, 
									y: isHovered ? 0 : 30 
								}}
								transition={{ duration: 0.5 }}
							>
								<div className="flex items-center gap-6">
									<motion.h2 
										className="font-boowie text-5xl md:text-5xl text-white mb-8 drop-shadow-xl"
										initial={{ opacity: 0, y: 20 }}
										animate={{ 
											opacity: isHovered ? 1 : 0, 
											y: isHovered ? 0 : 20 
										}}
										transition={{ 
											duration: 0.5,
											delay: 0.1
										}}
									>
										Projects That Left Our Clients Smiling:
									</motion.h2>
									
									{/* Circular Timer */}
									<motion.div 
										className="relative w-12 h-12 mb-8 cursor-pointer"
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ 
											opacity: isHovered ? 0.8 : 1, 
											scale: isHovered ? 0.8 : 1
										}}
										whileHover={{ scale: 1.1 }}
										transition={{ duration: 0.5 }}
										onClick={next} // Allow clicking the timer to advance to the next slide
									>
										{/* Background circle */}
										<div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
										
										{/* Progress circle */}
										<motion.svg 
											viewBox="0 0 100 100" 
											className="absolute inset-0 w-full h-full rotate-[-90deg]"
										>
											<motion.circle
												key={timerKey}
												cx="50"
												cy="50"
												r="40"
												fill="none"
												strokeWidth="4"
												stroke="white"
												strokeLinecap="round"
												strokeDasharray={251.2} // Circumference of circle with r=40: 2 * π * r
												initial={{ strokeDashoffset: 251.2 }} // Start from full offset (empty)
												animate={{ 
													strokeDashoffset: isPaused ? 251.2 : 0 // Animate to 0 offset (full circle)
												}}
												transition={isPaused ? 
													{ duration: 0 } : 
													{ duration: 4, ease: "linear" }
												}
												className="opacity-60"
												onAnimationComplete={() => {
													if (!isPaused && isInView && !isAnimating) {
														next(); // Trigger slide change when animation completes
													}
												}}
											/>
										</motion.svg>
										
										{/* Number in the middle */}
										<div className="absolute inset-0 flex items-center justify-center font-medium text-white">
											<motion.span 
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												className="text-xs"
											>
												{current + 1}/{projects.length}
											</motion.span>
										</div>
									</motion.div>
								</div>
							</motion.div>

							{/* Project Info Overlay - matching the padding/layout of other sections */}
							<motion.div 
								className="max-w-[1400px] mx-auto px-16 md:px-24 sm:px-8 w-full pb-16"
								initial={{ opacity: 0 }}
								animate={{ 
									opacity: isHovered ? 1 : 0
								}}
								transition={{ duration: 0.5, delay: 0.15 }}
							>
								<motion.div 
									className="max-w-2xl relative" 
									style={{ position: 'relative', overflow: 'hidden', minHeight: '180px' }}
									initial={{ opacity: 0, y: 30 }}
									animate={{ 
										opacity: isHovered ? 1 : 0, 
										y: isHovered ? 0 : 30 
									}}
									transition={{ duration: 0.5, delay: 0.2 }}
								>
									{isAnimating && previousIndex !== null && (
										<div className={`absolute w-full ${direction > 0 ? 'slide-out-left' : 'slide-out-right'}`}>
											<h3 className="font-boowie text-4xl md:text-3xl text-white mb-4 drop-shadow-xl">
												{projects[previousIndex].title}
											</h3>
											<p className="text-lg md:text-sm text-white/90 drop-shadow-lg mb-2 font-neutraface">
												{projects[previousIndex].description}
											</p>
											<p className="text-lg md:text-sm text-white/90 drop-shadow-lg mb-2 leading-relaxed font-neutraface">
												{projects[previousIndex].description2}
											</p>
										</div>
									)}
									<motion.div 
										className={`${isAnimating ? (direction > 0 ? 'slide-in-right' : 'slide-in-left') : ''}`}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.5 }}
									>
										<motion.h3 
											className="font-boowie text-4xl md:text-3xl text-white mb-4 drop-shadow-xl"
											variants={{
												hidden: { opacity: 0, y: 20 },
												visible: { opacity: 1, y: 0 }
											}}
											transition={{ duration: 0.6, delay: 0.1 }}
										>
											{projects[current].title}
										</motion.h3>
										<motion.p 
											className="text-lg md:text-sm text-white/90 drop-shadow-lg mb-2 font-neutraface"
											variants={{
												hidden: { opacity: 0, y: 10 },
												visible: { opacity: 1, y: 0 }
											}}
											transition={{ duration: 0.6, delay: 0.2 }}
										>
											{projects[current].description}
										</motion.p>
										<motion.p 
											className="text-lg md:text-sm text-white/90 drop-shadow-lg mb-2 leading-relaxed font-neutraface"
											variants={{
												hidden: { opacity: 0, y: 10 },
												visible: { opacity: 1, y: 0 }
											}}
											transition={{ duration: 0.6, delay: 0.3 }}
										>
											{projects[current].description2}
										</motion.p>
									</motion.div>
								</motion.div>
							</motion.div>
						</div>

						{/* Navigation Arrows - Positioned within the layout bounds */}
						<motion.div 
							className="absolute w-full max-w-[1400px] left-1/2 -translate-x-1/2 top-0 bottom-0 pointer-events-none px-4 z-30"
							initial={{ opacity: 0 }}
							animate={{ 
								opacity: isHovered ? 1 : 0 
							}}
							transition={{ duration: 0.5, delay: 0.25 }}
						>
							<motion.button
								onClick={prev}
								className="absolute left-8 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white group rounded-full w-26 h-26 flex items-center justify-center transition-all duration-300 pointer-events-auto"
								aria-label="Previous"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								transition={{ type: "spring", stiffness: 400, damping: 17 }}
								initial={{ x: -20, opacity: 0 }}
								animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
							>
								<motion.svg 
									width="64" 
									height="64" 
									viewBox="0 0 200 200" 
									xmlns="http://www.w3.org/2000/svg"
									animate={{ x: [0, -5, 0] }}
									transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.5, ease: "easeInOut" }}
								>
									<g>
										<path d="M127.107 41.149 133 47.04l-53.039 53.03L133 153.107 127.107 159l-58.925-58.926 58.925-58.925Z" 
											className="fill-white group-hover:fill-black transition-colors duration-300"
											fillRule="evenodd">
										</path>
									</g>
								</motion.svg>
							</motion.button>

							<motion.button
								onClick={next}
								className="absolute right-8 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white group rounded-full w-26 h-26 flex items-center justify-center transition-all duration-300 pointer-events-auto"
								aria-label="Next"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								transition={{ type: "spring", stiffness: 400, damping: 17 }}
								initial={{ x: 20, opacity: 0 }}
								animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
							>
								<motion.svg 
									width="64" 
									height="64" 
									viewBox="0 0 200 200" 
									xmlns="http://www.w3.org/2000/svg"
									animate={{ x: [0, 5, 0] }}
									transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.5, ease: "easeInOut" }}
								>
									<g>
										<path d="M72.893 41.149 67 47.04l53.039 53.03L67 153.107 72.893 159l58.925-58.926L72.893 41.149Z" 
											className="fill-white group-hover:fill-black transition-colors duration-300"
											fillRule="evenodd">
										</path>
									</g>
								</motion.svg>
							</motion.button>
						</motion.div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default PortfolioSection;
