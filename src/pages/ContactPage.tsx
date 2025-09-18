import React, { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", phone: "", city: "", message: "" });
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                Us
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Ready to start your trading journey? Get in touch with us today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-900/30 relative">
        {/* Section Separator */}
        <div className="absolute top-0 left-0 right-0">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-green-500/20"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-black px-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Get In Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      Our Address
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Shreyash Apartment, Opposite of HDFC Bank,
                      <br />
                      Aath Rasta Square, Laxmi Nagar,
                      <br />
                      Nagpur – 440022, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      Phone Numbers
                    </h3>
                    <div className="space-y-1">
                      <p className="text-gray-300">+91 9373228941</p>
                      <p className="text-gray-300">+91 7276476410</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:thetradelearnify@gmail.com"
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                    >
                      thetradelearnify@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center">
                    <Clock className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      Office Hours
                    </h3>
                    <div className="space-y-1">
                      <p className="text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-300">
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                      <p className="text-gray-300">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8">
                <a
                  href="https://wa.me/919373228941"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-semibold mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-green-500/20 focus:border-green-400 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-white font-semibold mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-green-500/20 focus:border-green-400 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-white font-semibold mb-2"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-green-500/20 focus:border-green-400 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your city"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-semibold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-green-500/20 focus:border-green-400 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your trading goals and any specific questions you have"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black relative">
        {/* Section Separator */}
        <div className="absolute top-0 left-0 right-0">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-green-500/20"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gray-900/30 px-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Find{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                Our Location
              </span>
            </h2>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Shreyash+Apartment+Aath+Rasta+Square+Laxmi+Nagar+Nagpur&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                className="rounded-lg border-0"
              ></iframe>
            </div>

            <div className="text-center mt-6">
              {/* <p className="text-white text-lg font-semibold mb-2">
                Interactive Map
              </p> */}
              <p className="text-gray-300">
                Shreyash Apartment, Aath Rasta Square, Laxmi Nagar, Nagpur
              </p>
              <a
                href="https://maps.google.com/?q=Shreyash+Apartment+Aath+Rasta+Square+Laxmi+Nagar+Nagpur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 mt-4 text-green-400 hover:text-green-300 font-semibold"
              >
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
