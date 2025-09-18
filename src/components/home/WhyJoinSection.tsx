import React from "react";
import { Clock, TrendingUp, Users, BookOpen, Target } from "lucide-react";

const WhyJoinSection = () => {
  const reasons = [
    {
      // icon: '✨',
      title: "6 Months of Complete Support",
      description:
        "Get continuous mentorship and guidance throughout your journey, ensuring every doubt is resolved.",
      iconComponent: Clock,
    },
    {
      // icon: '⚡',
      title: "Higher Win-Rate Trading Setups",
      description:
        "Learn strategies backed by data and testing that give you an edge in the market.",
      iconComponent: TrendingUp,
    },
    {
      // icon: '👥',
      title: "Exclusive Traders' Community",
      description:
        "Connect with like-minded learners and mentors in a supportive environment where growth is collective.",
      iconComponent: Users,
    },
    {
      // icon: '📚',
      title: "Highly Interactive Notes",
      description:
        "Structured, simplified, and engaging study material designed to make learning easy and effective.",
      iconComponent: BookOpen,
    },
    {
      // icon: '🎯',
      title: "Personalized Trading Plan via One-on-One Viva",
      description:
        "Instead of generic teaching, we help you build your own trading plan suited to your personality and goals.",
      iconComponent: Target,
    },
    {
      // icon: '🏆',
      title: "Proven Track Record",
      description:
        "Join 1000+ successful traders who have transformed their financial future with our proven methodologies.",
      iconComponent: Target,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
              Join Us
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover the unique advantages that set us apart from other trading
            education providers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.iconComponent;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className="flex items-center space-x-4 mb-6">
                  {/* <div className="text-3xl">{reason.icon}</div> */}
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all duration-300">
                    <IconComponent
                      className="text-green-400 group-hover:text-green-300"
                      size={24}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-400 text-black px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105"
          >
            <span>Enroll Now</span>
          </a>
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

export default WhyJoinSection;
