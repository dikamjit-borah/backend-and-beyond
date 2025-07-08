import React, { useState } from "react";
import { Play, ExternalLink, X } from "lucide-react";

const PortfolioSection = ({ darkMode }) => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Modern full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image: "🛒",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "DeFi Protocol",
      description:
        "Decentralized finance protocol built on Ethereum with yield farming capabilities",
      image: "💰",
      tech: ["Solidity", "Web3.js", "React", "Ethereum"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "AI Analytics Dashboard",
      description:
        "Real-time analytics dashboard with machine learning insights and data visualization",
      image: "📊",
      tech: ["Python", "React", "TensorFlow", "D3.js"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication and real-time transactions",
      image: "🏦",
      tech: ["React Native", "Node.js", "PostgreSQL", "AWS"],
      video: null,
    },
    {
      title: "NFT Marketplace",
      description:
        "Complete NFT marketplace with minting, trading, and auction functionality",
      image: "🎨",
      tech: ["Solidity", "Next.js", "IPFS", "Web3"],
      video: null,
    },
    {
      title: "SaaS Management Tool",
      description:
        "Enterprise SaaS platform for project management and team collaboration",
      image: "⚙️",
      tech: ["NestJS", "React", "PostgreSQL", "Redis"],
      video: null,
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="portfolio"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            Showcasing our latest projects and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                darkMode
                  ? "bg-gray-900 border-gray-700"
                  : "bg-white border-gray-200"
              } rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div
                className={`h-48 ${
                  darkMode
                    ? "bg-gradient-to-br from-blue-900 to-purple-900"
                    : "bg-gradient-to-br from-blue-100 to-purple-100"
                } flex items-center justify-center text-6xl relative group cursor-pointer`}
                onClick={() => project.video && setSelectedProject(project)}
              >
                {project.image}
                {project.video && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="text-white" size={40} />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p
                  className={`${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  } mb-4`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode
                          ? "bg-blue-900/30 text-blue-400"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  className={`flex items-center space-x-2 ${
                    darkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                  } font-medium transition-colors`}
                >
                  {/* <span>View Project</span>
                  <ExternalLink size={16} /> */}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-lg overflow-hidden max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="aspect-video">
                <iframe
                  src={selectedProject.video}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
