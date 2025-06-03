import React from 'react';
import { Database, Layers, Code } from 'lucide-react';

const ServicesSection = ({ darkMode }) => {
  const services = [
    {
      category: "Backend",
      icon: <Database size={40} />,
      technologies: [
        { name: "Node.js", icon: "🟢", desc: "Scalable server-side applications" },
        { name: "NestJS", icon: "🔴", desc: "Enterprise-grade framework" },
        { name: "Java", icon: "☕", desc: "Robust enterprise solutions" },
        { name: "Python", icon: "🐍", desc: "AI & data processing" }
      ]
    },
    {
      category: "Frontend",
      icon: <Layers size={40} />,
      technologies: [
        { name: "React", icon: "⚛️", desc: "Interactive user interfaces" },
        { name: "Next.js", icon: "▲", desc: "Full-stack React framework" },
        { name: "Svelte", icon: "🧡", desc: "Lightweight & fast UIs" },
        { name: "CSS", icon: "🎨", desc: "Beautiful responsive designs" }
      ]
    },
    {
      category: "Blockchain",
      icon: <Code size={40} />,
      technologies: [
        { name: "Solidity", icon: "💎", desc: "Smart contract development" },
        { name: "Ethereum", icon: "Ξ", desc: "Decentralized applications" },
        { name: "Web3", icon: "🌐", desc: "Blockchain integration" },
        { name: "DeFi", icon: "💰", desc: "Financial protocols" }
      ]
    }
  ];

  return (
    <section id="services" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            We specialize in cutting-edge technologies to build scalable, modern applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} rounded-2xl p-8 border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <div className={`inline-flex p-3 rounded-xl mb-6 ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{service.category}</h3>
              <div className="space-y-4">
                {service.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-start space-x-3">
                    <span className="text-2xl">{tech.icon}</span>
                    <div>
                      <h4 className="font-semibold">{tech.name}</h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;