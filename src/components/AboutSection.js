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
                className={`text-lg leading-relaxed text-justify ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                At Backend and Beyond, we are a multidisciplinary collective of
                backend engineers, UI/UX designers, full-stack developers, and
                visual storytellers united by a passion for building purposeful
                digital experiences. Our team brings together the precision of
                systems architects, the vision of creative technologists, and
                the craftsmanship of interface artisans to translate complex
                ideas into intuitive, high-performing solutions. From clean API
                architecture to elegant front-end aesthetics, we operate at the
                intersection of functionality and form—engineering tools that
                are not only powerful but beautifully executed.
              </p>
              <p
                className={`text-lg leading-relaxed text-justify ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                We specialize in crafting bespoke applications, internal
                dashboards, automations, and digital products that drive
                business efficiency, brand identity, and user engagement.
                Whether you're a startup with a disruptive idea or an enterprise
                seeking operational tools, we bring your concepts to life
                through tailored solutions grounded in clean code, scalable
                infrastructure, and human-centered design. From ideation to
                deployment, we partner with you to build technology that goes
                beyond just working—it works brilliantly.
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
