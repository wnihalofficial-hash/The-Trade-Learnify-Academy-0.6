import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, TrendingUp } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-2xl border-b border-green-500/20"
          : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center space-x-3">
            <img
              src="/Logo_a_page-0001-removebg-preview.png"
              alt="Logo"
              className="w-16 h-16 rounded-lg object-contain bg-white/10 p-1"
            />
            <div className="text-white">
              <div className="text-xl font-bold tracking-tight">
                The Trade Learnify Academy
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`text-base font-medium transition-all duration-300 hover:text-green-400 relative group ${
                  location.pathname === item.path
                    ? "text-green-400"
                    : "text-gray-300"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.path ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            ))}

            {/* Enroll Now Button */}
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="bg-green-500 hover:bg-green-400 text-black px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 mb-4 border border-green-500/20">
            <div className="py-4 px-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block text-base font-medium transition-colors duration-200 hover:text-green-400 ${
                    location.pathname === item.path
                      ? "text-green-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={handleNavClick}
                className="block bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-center mt-4"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
