import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the duration of the course?',
      answer: 'Our comprehensive trading course spans 6 months, providing ample time to master all aspects of trading including theory, practical application, and live market experience.'
    },
    {
      question: 'Do I need prior trading experience?',
      answer: 'No prior experience is required. Our course is designed to take you from complete beginner to proficient trader, with personalized guidance based on your learning pace.'
    },
    {
      question: 'What is the batch size?',
      answer: 'We maintain small batch sizes of maximum 15 students to ensure personalized attention and quality interaction with mentors.'
    },
    {
      question: 'Is there ongoing support after course completion?',
      answer: 'Yes, we provide 6 months of post-course support including doubt resolution, market analysis sessions, and access to our exclusive trader community.'
    },
    {
      question: 'What trading platforms do you recommend?',
      answer: 'We work with established platforms like 5paisa for Indian markets and Exness for international trading, providing you with the best tools for your trading journey.'
    },
    {
      question: 'How much capital do I need to start trading?',
      answer: 'You can start with as little as ₹25,000, but we recommend ₹1-2 lakhs for effective portfolio diversification and risk management.'
    },
    {
      question: 'What is your success rate?',
      answer: 'Over 85% of our students achieve consistent profitability within 6 months of course completion, with proper implementation of taught strategies.'
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'While we focus on creating independent traders, we do provide guidance on career opportunities in trading firms and financial institutions for interested students.'
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No, our course fee is transparent and all-inclusive. There are no hidden charges for study materials, doubt sessions, or community access.'
    },
    {
      question: 'What if I miss a class?',
      answer: 'All sessions are recorded and available for review. Additionally, we provide make-up sessions and one-on-one catch-up meetings to ensure you don\'t fall behind.'
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                Questions
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Get answers to common questions about our trading education programs
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-green-500/20 hover:border-green-400/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    {openQuestion === index ? (
                      <ChevronUp className="text-green-400" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400 group-hover:text-green-400 transition-colors duration-300" size={24} />
                    )}
                  </div>
                </button>

                {openQuestion === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-green-500/20 pt-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
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
            Still Have{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
              Questions?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Our team is ready to provide personalized answers to all your queries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105"
            >
              <span>Contact Us</span>
            </a>
            <a
              href="https://wa.me/919373228941"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;