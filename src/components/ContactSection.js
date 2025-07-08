import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
// Add Formspree hook
import { useForm } from "@formspree/react";

const ContactSection = ({ darkMode }) => {
  // Use Formspree hook
  const [state, handleSubmit] = useForm("xkgboyjn");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Reset form fields after successful submission
  React.useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: "", email: "", message: "" });
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } max-w-3xl mx-auto`}
          >
            Ready to start your next project? Let's discuss how we can help you
            achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-gray-50 border-gray-200"
            } rounded-2xl p-8 border`}
          >
            <div className="space-y-6">
              {state.succeeded ? (
                <div className="text-green-500 text-lg font-semibold text-center">
                  Message sent! We'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    />
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    />
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none`}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>
                  {state.errors && state.errors.length > 0 && (
                    <div className="text-red-500 mt-4 text-sm">
                      {state.errors.map((err, idx) => (
                        <div key={idx}>{err.message}</div>
                      ))}
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-lg ${
                      darkMode
                        ? "bg-blue-900/30 text-blue-400"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                      backendandbeyond@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-lg ${
                      darkMode
                        ? "bg-blue-900/30 text-blue-400"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Phone/WhatsApp</p>
                    <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                      (+91) 70029 36200
                    </p>
                    <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                      (+91) 84020 89446
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-lg ${
                      darkMode
                        ? "bg-blue-900/30 text-blue-400"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                      Guwahati, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Connect with Us</h3>
              <div className="flex space-x-6">
                {/* Company GitHub */}
                <a
                  href="https://github.com/Backend-and-Beyond"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-colors duration-200 hover:bg-blue-600/20 ${
                    darkMode
                      ? "bg-gray-800 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                  aria-label="GitHub Company"
                  title="Company GitHub"
                >
                  <Github size={24} />
                </a>
                {/* Personal GitHub 1 */}
                <a
                  href="https://github.com/dikamjit-borah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-colors duration-200 hover:bg-green-600/20 ${
                    darkMode
                      ? "bg-gray-800 text-green-400"
                      : "bg-green-100 text-green-600"
                  }`}
                  aria-label="Dikamjit Borah GitHub"
                  title="Dikamjit Borah GitHub"
                >
                  <Github size={24} />
                </a>
                {/* Personal GitHub 2 */}
                <a
                  href="https://github.com/biswajit-debnath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-colors duration-200 hover:bg-green-600/20 ${
                    darkMode
                      ? "bg-gray-800 text-green-400"
                      : "bg-green-100 text-green-600"
                  }`}
                  aria-label="Biswajit Debnath GitHub"
                  title="Biswajit Debnath GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/backend-and-beyond"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-colors duration-200 hover:bg-blue-600/20 ${
                    darkMode
                      ? "bg-gray-800 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://twitter.com/backendandbeyond"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-colors duration-200 hover:bg-blue-600/20 ${
                    darkMode
                      ? "bg-gray-800 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
