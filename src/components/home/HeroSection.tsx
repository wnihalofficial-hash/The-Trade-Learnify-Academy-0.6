import React from "react";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Trading chart visualization (subtle) */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-10">
          <div className="flex items-end space-x-2 h-64">
            <div className="w-8 bg-green-500 h-32 rounded-t"></div>
            <div className="w-8 bg-green-400 h-48 rounded-t"></div>
            <div className="w-8 bg-green-500 h-40 rounded-t"></div>
            <div className="w-8 bg-green-600 h-56 rounded-t"></div>
            <div className="w-8 bg-green-400 h-44 rounded-t"></div>
            <div className="w-8 bg-green-500 h-52 rounded-t"></div>
          </div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left max-w-xl">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Master the Markets with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-amber-400">
                Professional
              </span>{" "}
              Trading Education
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
              Join our elite trading academy and gain the skills, strategies,
              and mindset needed to succeed in today's volatile financial
              markets.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="/courses"
                className="group bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105 flex items-center space-x-3"
              >
                <span>Explore Courses</span>
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                />
              </a>

              <a
                href="https://wa.me/919373228941"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3 animate-pulse"
              >
                <span>💬</span>
                <span>Chat with Us - WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Content - Trading Visualization */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main chart container */}
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
                {/* Chart header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-semibold">
                      Live Market Data
                    </span>
                  </div>
                  <div className="text-green-400 font-mono text-lg">+24.7%</div>
                </div>

                {/* Chart bars */}
                <div className="flex items-end justify-center space-x-3 h-48 mb-6">
                  {[40, 65, 45, 80, 55, 90, 70, 85].map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg transition-all duration-1000 ease-out"
                      style={{
                        height: `${height}%`,
                        width: "24px",
                        animationDelay: `${index * 200}ms`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Success metrics */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">95%</div>
                    <div className="text-green-400 text-sm">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-green-400 text-sm">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">₹2.5L</div>
                    <div className="text-green-400 text-sm">Avg Monthly</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-green-500 text-black px-4 py-2 rounded-lg font-bold text-sm animate-bounce shadow-lg">
                Learn. Trade. Succeed.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">
              6 Months
            </div>
            <div className="text-gray-400">Comprehensive Program</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">1-on-1</div>
            <div className="text-gray-400">Expert Mentorship</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">Elite</div>
            <div className="text-gray-400">Small Batches</div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Separator */}
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
  );
};

export default HeroSection;
