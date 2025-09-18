import React from 'react';
import { ExternalLink, BookOpen, TrendingUp, Globe } from 'lucide-react';

const ResourcesPage = () => {
  const tradingPlatforms = [
    {
      name: '5paisa Demat Account',
      description: 'Open your demat account with our preferred broker partner',
      url: 'https://www.5paisa.com/demat-account?ReferralCode=53836047&ReturnUrl=invest-open-account',
      icon: TrendingUp,
      benefits: ['Zero brokerage for equity delivery', 'Advanced trading platforms', 'Research reports included']
    },
    {
      name: 'Exness Trading Platform',
      description: 'International forex and CFD trading platform',
      url: 'https://exness.com',
      icon: Globe,
      benefits: ['Tight spreads', 'Multiple trading instruments', 'Professional trading tools']
    }
  ];

  const recommendedBooks = [
    {
      title: 'Technical Analysis of the Financial Markets',
      author: 'John J. Murphy',
      description: 'Comprehensive guide to technical analysis principles and chart patterns'
    },
    {
      title: 'Market Wizards',
      author: 'Jack Schwager',
      description: 'Interviews with top traders revealing their secrets to success'
    },
    {
      title: 'The Intelligent Investor',
      author: 'Benjamin Graham',
      description: 'Classic value investing principles and market philosophy'
    },
    {
      title: 'Trading Psychology',
      author: 'Brett N. Steenbarger',
      description: 'Mental strategies for consistent trading performance'
    },
    {
      title: 'Japanese Candlestick Charting Techniques',
      author: 'Steve Nison',
      description: 'Master the art of candlestick pattern analysis'
    },
    {
      title: 'Options as a Strategic Investment',
      author: 'Lawrence G. McMillan',
      description: 'Complete guide to options trading strategies and risk management'
    }
  ];

  const articles = [
    {
      title: 'Understanding Market Volatility',
      description: 'Learn how to navigate and profit from volatile market conditions',
      readTime: '8 min read'
    },
    {
      title: 'Risk Management Fundamentals',
      description: 'Essential principles for protecting your trading capital',
      readTime: '12 min read'
    },
    {
      title: 'Building a Trading Plan',
      description: 'Step-by-step guide to creating your personal trading strategy',
      readTime: '15 min read'
    },
    {
      title: 'Market Psychology Insights',
      description: 'Understanding crowd behavior and market sentiment',
      readTime: '10 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trading{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                Resources
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Essential tools, platforms, and educational materials to accelerate your trading journey
            </p>
          </div>
        </div>
      </section>

      {/* Trading Platforms */}
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Recommended{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                Trading Platforms
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Start your trading journey with our trusted platform partners
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tradingPlatforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center">
                      <IconComponent className="text-green-400" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{platform.name}</h3>
                      <p className="text-gray-300 mb-6">{platform.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-green-400 font-semibold mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {platform.benefits.map((benefit, i) => (
                            <li key={i} className="text-gray-300 flex items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                      >
                        <span>Open Account</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recommended Books */}
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Essential{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                Reading List
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Curated collection of must-read books for serious traders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedBooks.map((book, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <BookOpen className="text-green-400 mr-3" size={24} />
                  <h3 className="text-lg font-bold text-white">{book.title}</h3>
                </div>
                <p className="text-green-400 font-semibold mb-3">by {book.author}</p>
                <p className="text-gray-300 leading-relaxed">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Articles */}
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Educational{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                Articles
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              In-depth articles on trading concepts and market analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <span className="text-gray-400 text-sm">{article.readTime}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{article.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need More{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
              Resources?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Our team is here to help you find the right tools and materials for your trading journey
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105"
          >
            <span>Contact Us</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;