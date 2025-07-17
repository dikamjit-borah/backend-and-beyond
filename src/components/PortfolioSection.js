import React, { useState, useEffect } from "react";
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



const PortfolioSection = ({ darkMode }) => {
	const [current, setCurrent] = useState(0);
	const [direction, setDirection] = useState(0); // -1 for left, 1 for right
	const [isAnimating, setIsAnimating] = useState(false);
	const [previousIndex, setPreviousIndex] = useState(null);
	
	const prev = () => {
		if (isAnimating) return;
		setDirection(-1); // moving left
		setIsAnimating(true);
		setPreviousIndex(current);
		setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
	};
	
	const next = () => {
		if (isAnimating) return;
		setDirection(1); // moving right
		setIsAnimating(true);
		setPreviousIndex(current);
		setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));
	};
	
	// Reset animation state after transition completes
	useEffect(() => {
		if (!isAnimating) return;
		
		const timer = setTimeout(() => {
			setIsAnimating(false);
			setPreviousIndex(null);
		}, 800); // Match this with the CSS transition duration (0.8s)
		
		return () => clearTimeout(timer);
	}, [isAnimating, current]);

	return (
		<section
			id="work"
			className="relative w-full bg-black overflow-hidden"
		>
			{/* Full-bleed background image container */}
			<div className="relative w-full flex items-center justify-center">
				<div className="relative w-full">
					<div className="relative w-full overflow-hidden" style={{ position: 'relative' }}>
						{/* Show both previous and current images during animation */}
						{isAnimating && previousIndex !== null && (
							<img
								src={projects[previousIndex].image}
								alt="Previous Project"
								className={`w-full h-auto min-h-[600px] object-cover object-center absolute top-0 left-0 ${
									direction > 0 ? 'slide-out-left' : 'slide-out-right'
								}`}
							/>
						)}
						<img
							src={projects[current].image}
							alt="Project Background"
							className={`w-full h-auto min-h-[600px] object-cover object-center ${
								isAnimating ? (direction > 0 ? 'slide-in-right' : 'slide-in-left') : ''
							}`}
						/>
                        
                        {/* Top Gradient - Moved inside the image container but above the images */}
						<div className="absolute top-0 w-full h-96 bg-gradient-to-b from-black/100 to-transparent pointer-events-none z-10" />
						{/* Bottom Gradient - Moved inside the image container but above the images */}
						<div className="absolute bottom-0 w-full h-[25rem] bg-gradient-to-t from-black/100 to-transparent pointer-events-none z-10" />
					</div>
					
					{/* Content Container - Fixed positioning relative to image */}
					<div className="absolute inset-0">

						
						{/* Main content container - matches the max-w-[1400px] from other sections */}
						<div className="absolute inset-0 flex flex-col justify-between z-20">
							<div className="max-w-[1400px] mx-auto px-16 md:px-24 sm:px-8 w-full pt-16">
								<h2 className="font-boowie text-5xl md:text-5xl text-white mb-8 drop-shadow-xl">
									Projects That Left Our Clients Smiling:
								</h2>
							</div>

							{/* Project Info Overlay - matching the padding/layout of other sections */}
							<div className="max-w-[1400px] mx-auto px-16 md:px-24 sm:px-8 w-full pb-16">
								<div className="max-w-2xl relative" style={{ position: 'relative', overflow: 'hidden', minHeight: '180px' }}>
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
									<div className={`${isAnimating ? (direction > 0 ? 'slide-in-right' : 'slide-in-left') : ''}`}>
										<h3 className="font-boowie text-4xl md:text-3xl text-white mb-4 drop-shadow-xl">
											{projects[current].title}
										</h3>
										<p className="text-lg md:text-sm text-white/90 drop-shadow-lg mb-2 font-neutraface">
											{projects[current].description}
										</p>
										<p className="text-lg md:text-sm text-white/90 drop-shadow-lg mb-2 leading-relaxed font-neutraface">
											{projects[current].description2}
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Navigation Arrows - Positioned within the layout bounds */}
						<div className="absolute w-full max-w-[1400px] left-1/2 -translate-x-1/2 top-0 bottom-0 pointer-events-none px-4 z-30">
							<button
								onClick={prev}
								className="absolute left-8 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white group rounded-full w-26 h-26 flex items-center justify-center transition-all duration-300 pointer-events-auto"
								aria-label="Previous"
							>
								<svg width="64" height="64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
									<g>
										<path d="M127.107 41.149 133 47.04l-53.039 53.03L133 153.107 127.107 159l-58.925-58.926 58.925-58.925Z" 
											className="fill-white group-hover:fill-black transition-colors duration-300"
											fillRule="evenodd">
										</path>
									</g>
								</svg>
							</button>

							<button
								onClick={next}
								className="absolute right-8 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white group rounded-full w-26 h-26 flex items-center justify-center transition-all duration-300 pointer-events-auto"
								aria-label="Next"
							>
								<svg width="64" height="64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)" }}>
									<g>
										<path d="M127.107 41.149 133 47.04l-53.039 53.03L133 153.107 127.107 159l-58.925-58.926 58.925-58.925Z" 
											className="fill-white group-hover:fill-black transition-colors duration-300"
											fillRule="evenodd">
										</path>
									</g>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioSection;
