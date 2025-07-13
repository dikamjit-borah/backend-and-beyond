import React, { useState } from "react";
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
	const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
	const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

	return (
		<section
			id="portfolio"
			className="relative w-full bg-black overflow-hidden"
		>
			{/* Full-bleed background image container */}
			<div className="relative w-full flex items-center justify-center">
				<div className="relative w-full">
					<div className="relative w-full overflow-hidden">
						<img
							src={projects[current].image}
							alt="Project Background"
							className="w-full h-auto min-h-[600px] object-cover object-center"
						/>
					</div>
					
					{/* Content Container - Fixed positioning relative to image */}
					<div className="absolute inset-0">
						{/* Top Gradient */}
						<div className="absolute top-0 w-full h-96 bg-gradient-to-b from-black/100 to-transparent pointer-events-none" />
						{/* Bottom Gradient */}
						<div className="absolute bottom-0 w-full h-[25rem] bg-gradient-to-t from-black/100 to-transparent pointer-events-none" />

						{/* Heading - Fixed position */}
						<div className="absolute top-16 left-40 max-w-5xl">
							<h2 className="text-5xl md:text-[3.2rem] font-medium text-white mb-8 drop-shadow-xl">
								Projects That Left Our Clients Smiling:
							</h2>
						</div>

						{/* Project Info Overlay - Fixed position */}
						<div className="absolute bottom-8 left-40 max-w-2xl">
							<h3 className="text-4xl md:text-[2.2rem] text-white mb-4 drop-shadow-xl">
								{projects[current].title}
							</h3>
							<p className="text-lg md:text-[0.7rem] text-white/90 drop-shadow-lg mb-2 ">
								{projects[current].description}
							</p>
							<p className="text-lg md:text-[0.7rem] text-white/90 drop-shadow-lg mb-2 leading-loose">
								{projects[current].description2}
							</p>
						</div>

						{/* Navigation Arrows - Fixed positions */}
						<button
							onClick={prev}
							className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 rounded-full p-3 transition"
						>
							<ChevronLeft size={40} className="text-white" />
						</button>

						<button
							onClick={next}
							className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 rounded-full p-3 transition"
						>
							<ChevronRight size={40} className="text-white" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioSection;
