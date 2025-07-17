import React from "react";
import aboutImage from "../images/about.avif";
import logo1 from "../images/logo1.avif";
import logo2 from "../images/logo2.avif";
import logo3 from "../images/logo3.avif";
import logo4 from "../images/logo4.avif";
import logo5 from "../images/logo5.avif";
import arrowImg from "../images/arrow (1).avif";

const AboutSection = ({ darkMode }) => {
  return (
    <section
      id="about"
      className="py-24 bg-[#0D0D0D] text-white"
    >
      <div className="max-w-[1400px] mx-auto px-16 md:px-24 sm:px-8">
        
        
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Left column with heading and image */}
          <div className="flex flex-col items-left lg:w-2/5">
            <div className="mb-4 flex items-center justify-left pl-8">
              <span className="text-sm uppercase tracking-wider text-gray-400">OUR ETHOS</span>
              <img src={arrowImg} alt="Arrow" className="ml-2 h-6 w-auto" />
            </div>
            <div className="relative mb-12 max-w-lg">
              <div className="absolute top-0 bottom-0 left-0 w-5 bg-gradient-to-b from-purple-900 to-black"></div>
              <div className="pl-8">
                <h2 className="font-boowie text-3xl md:text-3xl mb-2">Boutique By Choice.</h2>
                <h2 className="font-boowie text-3xl md:text-3xl mb-2">Because You Can't Scale</h2>
                <h2 className="font-boowie text-3xl md:text-3xl mb-2 text-purple-600">Great Design.</h2>
              </div>
            </div>
            
            <div className="mt-4 max-w-[25rem] w-full">
              <img 
                src={aboutImage} 
                alt="Design workspace with notes and sketches" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
          
          {/* Right column with content */}
          <div className="flex flex-col items-start lg:w-3/5 pl-8 pt-2">
            {/* Two column layout with two text items in each column */}
            <div className="flex gap-8 w-full mt-6">
              {/* Left Column */}
              <div className="flex-1 flex flex-col space-y-6">
                {/* Top text item */}
                <div>
                  <p className="text-base leading-relaxed text-gray-300 text-sm font-neutraface">
                    Design matters to us—and truly exceptional design is rare. Big agencies often scale by standardizing their process, churning out predictable work that, to us, misses the whole point of design.
                  </p>
                </div>
                
                {/* Bottom text item */}
                <div>
                  <p className="text-base leading-relaxed text-gray-300 text-sm font-neutraface">
                    Keeping things small allows us to be selective. Every designer or strategist who joins is here intentionally—not because they tick boxes, but because they deliver exceptional work.
                  </p>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="flex-1 flex flex-col space-y-6">
                {/* Top text item */}
                <div>
                  <p className="text-base leading-relaxed text-gray-300 text-sm font-neutraface">
                    because their work speaks for itself. It's less about prestige and more about pride: pride in delivering designs clients are excited to show off.
                  </p>
                </div>
                
                {/* Bottom text item */}
                <div>
                  <p className="text-base leading-relaxed text-gray-300 text-sm font-neutraface">
                    Working with us isn't about choosing perfection; it's about choosing people who actually care about how things turn out. The kind of work that looks, feels, and works like it's worth every dollar invested.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stats section */}
            <div className="grid grid-cols-4 gap-4 pt-8 mt-8 w-full">
              <div className="text-left">
                <p className="text-4xl font-bold text-white">85%</p>
                <p className="text-xs text-white mt-1 font-bold font-neutraface">Client Referral Rate</p>
              </div>
              <div className="text-left">
                <p className="text-4xl font-bold text-white">210+</p>
                <p className="text-xs text-white mt-1 font-bold font-neutraface">Projects Delivered</p>
              </div>
              <div className="text-left">
                <p className="text-4xl font-bold text-white">30+</p>
                <p className="text-xs text-white mt-1 font-bold font-neutraface">Industry Served</p>
              </div>
              <div className="text-left">
                <p className="text-4xl font-bold text-white">100%</p>
                <p className="text-xs text-white mt-1 font-bold font-neutraface">In-House Designers</p>
              </div>
            </div>
            
            {/* Client logos */}
            <div className="pt-8 grid grid-cols-5 gap-6 items-center opacity-70 w-full">
              <img src={logo1} alt="Client Logo" className="h-15 w-auto filter grayscale" />
              <img src={logo2} alt="Client Logo" className="h-15 w-auto filter grayscale" />
              <img src={logo3} alt="Client Logo" className="h-15 w-auto filter grayscale" />
              <img src={logo4} alt="Client Logo" className="h-15 w-auto filter grayscale" />
              <img src={logo5} alt="Client Logo" className="h-15 w-auto filter grayscale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
