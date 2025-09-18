import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  TrendingUp,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Resources", path: "/resources" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const courses = [
    // "Foundation of Financial Markets",
    // "Equity Mastery Program",
    // "Futures & Options Masterclass",
    // "Forex & Global Markets",
    // "Commodity Trading",
    // "Crypto & Digital Assets",
    "Professional Trader Development Program (PTDP)",
    "Online Trading Mastery Program",
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/19p8keJthv/?mibextid=wwXIfr",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/thetradelearnify?igsh=NG9yZmV4bWd2NTd0&utm_source=qr",
      label: "Instagram",
    },
    { icon: Twitter, href: "https://x.com/tradelearnify", label: "Twitter" },
    {
      icon: Youtube,
      href: " https://www.youtube.com/@TheTradeLearnify",
      label: "Youtube",
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-green-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/Logo_a_page-0001-removebg-preview.png"
                  alt="Logo"
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="text-white">
                  <div className="text-lg font-bold">
                    The Trade Learnify Academy
                  </div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering individuals to achieve financial freedom through
                comprehensive trading education, proven strategies, and
                personalized mentorship.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <IconComponent
                        className="text-gray-400 group-hover:text-black"
                        size={18}
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Courses */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Our Courses</h3>
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <li
                    key={index}
                    className="text-gray-400 text-sm leading-relaxed"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin
                    className="text-green-400 flex-shrink-0 mt-1"
                    size={18}
                  />
                  <div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Shreyash Apartment, Opposite of HDFC Bank,
                      <br />
                      Aath Rasta Square, Laxmi Nagar,
                      <br />
                      Nagpur - 440022, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="text-green-400 flex-shrink-0" size={18} />
                  <div className="space-y-1">
                    <a
                      href="tel:+919373228941"
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm block"
                    >
                      +91 9373228941
                    </a>
                    <a
                      href="tel:+917972299513"
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm block"
                    >
                      +91 7972299513
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="text-green-400 flex-shrink-0" size={18} />
                  <a
                    href="mailto:thetradelearnify@gmail.com"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
                  >
                    thetradelearnify@gmail.com
                  </a>
                </div>

                {/* WhatsApp Button */}
                <div className="pt-4">
                  <a
                    href="https://wa.me/919373228941"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p className="text-gray-500 text-xs">
                © {currentYear} Website designed and managed by{" "}
                <a
                  href="https://webtekdi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300"
                >
                  webtekdi.com
                </a>
              </p>
            </div>

            {/* <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/refund-policy"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                Refund Policy
              </Link>
            </div> */}
          </div>
        </div>

        {/* Trading Disclaimer */}
        {/* <div className="border-t border-gray-800 py-6">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <p className="text-gray-400 text-xs leading-relaxed text-center">
              <strong className="text-gray-300">Trading Disclaimer:</strong> Trading in financial markets involves substantial risk and may not be suitable for all investors. 
              Past performance is not indicative of future results. The information provided is for educational purposes only and should not be considered as financial advice. 
              Please consult with a qualified financial advisor before making any investment decisions.
            </p>
            <div className="text-center mt-4 pt-4 border-t border-gray-700">
              <p className="text-gray-500 text-xs">
                Website designed and managed by{' '}
                <a href="https://webtekdi.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                  webtekdi.com
                </a>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
