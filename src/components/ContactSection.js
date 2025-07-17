import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
// Add Formspree hook
import { useForm } from "@formspree/react";

const ContactSection = ({ darkMode = false }) => {
  // Use Formspree hook
  const [state, handleSubmit] = useForm("xkgboyjn");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
    privacyPolicy: false,
  });

  // Reset form fields after successful submission
  React.useEffect(() => {
    if (state.succeeded) {
      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
        privacyPolicy: false,
      });
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <section
      id="contact"
      className="bg-black py-[10rem] px-4 relative"
    >
      {/* Vertical CONTACT label */}
      <div className="absolute left-0 top-24 h-auto flex items-start z-10">
        <div className="bg-gray-900 px-4 py-8 flex items-center" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.2em', borderRadius: '0 0.5rem 0.5rem 0' }}>
          <span className="text-white text-lg font-semibold tracking-widest">CONTACT</span>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1.5fr] gap-16">
          {/* Left Side - Contact Info */}
          <div className="bg-gradient-to-b from-[#4A9EFF] via-[#4A9EFF] to-[#cae1fa] p-6 lg:p-10 text-white rounded-2xl">
            <h3 className="font-boowie text-md mb-6 font-bold">Get in touch</h3>
            
            <div className="space-y-6">
              <div className="space-y-1">
                <h4 className="font-medium text-sm">Visit us</h4>
                <p className="text-xs opacity-90">Come say hello at our office HQ.</p>
                <p className="text-xs opacity-90">67 Wisteria Way Croydon South VIC 3136 AU</p>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-medium text-sm">Chat to us</h4>
                <p className="text-xs opacity-90">Our friendly team is here to help.</p>
                <p className="text-xs opacity-90">hello@paysphere.com</p>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-medium text-sm">Call us</h4>
                <p className="text-xs opacity-90">Mon-Fri from 8am to 5pm</p>
                <p className="text-xs opacity-90">(+995) 555-55-55-55</p>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-medium text-sm">Social media</h4>
                <div className="flex space-x-3">
                  <a href="#" aria-label="Facebook" className="hover:text-blue-200 transition-colors">
                    <Facebook size={16} />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-blue-200 transition-colors">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" aria-label="Instagram" className="hover:text-blue-200 transition-colors">
                    <Instagram size={16} />
                  </a>
                  <a href="#" aria-label="Twitter" className="hover:text-blue-200 transition-colors">
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="pl-10">
            {state.succeeded ? (
              <div className="text-green-500 text-lg font-semibold text-center h-full flex items-center justify-center">
                <div>
                  <svg className="w-16 h-16 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p>Message sent! We'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-2 text-gray-300">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Randomfirst"
                      className="w-full px-3 py-2 rounded-lg border border-gray-800 bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2 text-gray-300">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Randomlast"
                      className="w-full px-3 py-2 rounded-lg border border-gray-800 bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium mb-2 text-gray-300">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="RandomCompany"
                    className="w-full px-3 py-2 rounded-lg border border-gray-800 bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Random@gmail.com"
                    className="w-full px-3 py-2 rounded-lg border border-gray-800 bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium mb-2 text-gray-300">Phone Number</label>
                  <div className="flex">
                    <div className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-800 bg-transparent">
                      <span className="text-gray-400 text-xs">IN</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="555-55-55-55"
                      className="w-full px-3 py-2 rounded-r-lg border border-gray-800 bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium mb-2 text-gray-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Tell us what we can help you with"
                    className="w-full px-3 py-4 rounded-lg border border-gray-800 bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm"
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacyPolicy"
                      name="privacyPolicy"
                      type="checkbox"
                      checked={formData.privacyPolicy}
                      onChange={handleChange}
                      required
                      className="w-3 h-3 text-blue-600 rounded border border-gray-600 focus:ring-blue-500 appearance-none checked:bg-blue-600 bg-gray-900"
                      style={{ backgroundColor: '#121212' }}
                    />
                  </div>
                  <label htmlFor="privacyPolicy" className="ml-2 text-xs text-gray-400">
                    I'd like to receive more information about company, I understand and agree to the{" "}
                    <a href="#" className="text-blue-400 hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-[#4A9EFF] hover:bg-[#3A8EEF] text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 mt-4 text-sm"
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
      </div>
    </section>
  );
};

export default ContactSection;
