import React from "react";
import { Code } from "lucide-react";

const AboutSection = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Us
            </h2>
            <div className="space-y-6">
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className={`w-full h-96 rounded-2xl ${
                darkMode
                  ? "bg-gradient-to-br from-blue-900 to-purple-900"
                  : "bg-gradient-to-br from-blue-100 to-purple-100"
              } flex items-center justify-center`}
            >
              <div className="text-center">
                <Code
                  size={80}
                  className={`mx-auto mb-4 ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <h3 className="text-2xl font-semibold mb-2">
                  Innovation Driven
                </h3>
                <p
                  className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  Building tomorrow's technology today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
