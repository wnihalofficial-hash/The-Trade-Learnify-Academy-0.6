import React from "react";
import { Star, Play, ExternalLink } from "lucide-react";

const TestimonialsPage = () => {
  const videoTestimonials = [
    {
      title: "Success Story: From Loss to Consistent Profits",
      thumbnail:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "3:45",
    },
    {
      title: "How I Achieved Financial Freedom",
      thumbnail:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "4:20",
    },
    {
      title: "My Trading Transformation Journey",
      thumbnail:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "5:15",
    },
  ];

  const googleReviews = [
    {
      name: "Rohit Mehta",
      rating: 5,
      review:
        "Outstanding teaching methodology. The practical approach and real-time market analysis sessions are invaluable.",
      date: "2 weeks ago",
    },
    {
      name: "Sneha Gupta",
      rating: 5,
      review:
        "Best trading academy in Nagpur! The mentors are extremely knowledgeable and supportive.",
      date: "1 month ago",
    },
    {
      name: "Vikash Singh",
      rating: 5,
      review:
        "Excellent course structure and personalized attention. Highly recommend for serious traders.",
      date: "3 weeks ago",
    },
    {
      name: "Anita Desai",
      rating: 5,
      review:
        "The risk management techniques taught here saved me from huge losses. Worth every penny!",
      date: "2 months ago",
    },
  ];

  const studentEarnings = [
    {
      name: "Rajesh Kumar",
      experience: "8 months post-course",
      earnings: "₹2.5L per month",
      background: "Software Engineer turned full-time trader",
      story:
        "Went from making ₹50K salary to ₹2.5L monthly trading income within 8 months of completing the course.",
    },
    {
      name: "Priya Sharma",
      experience: "6 months post-course",
      earnings: "₹1.8L per month",
      background: "Homemaker with no prior trading experience",
      story:
        "Started with zero knowledge and now earns more than her husband's corporate salary through part-time trading.",
    },
    {
      name: "Amit Patel",
      experience: "1 year post-course",
      earnings: "₹3.2L per month",
      background: "Business owner expanding investment portfolio",
      story:
        "Diversified business income with systematic trading, achieving consistent returns month after month.",
    },
    {
      name: "Sunita Joshi",
      experience: "4 months post-course",
      earnings: "₹1.2L per month",
      background: "Teacher seeking additional income",
      story:
        "Balanced teaching career with trading, generating substantial additional income through disciplined strategies.",
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                Learners Say
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Real stories from real students who transformed their financial
              future
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
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
              Hear from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                Our Students
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-green-500/20 hover:border-green-400/50 transition-all duration-300 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Play className="text-white" size={48} />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
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
              Google{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                Reviews
              </span>
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-green-400 fill-current"
                    size={24}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">4.9/5</span>
              <span className="text-gray-400">(127 reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {googleReviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">{review.name}</h3>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-green-400 fill-current"
                        size={16}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  "{review.review}"
                </p>
                <p className="text-gray-400 text-sm">{review.date}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=The+Trade+Learnify+Academy+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 font-semibold"
            >
              <span>View All Google Reviews</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Student Earnings Showcase */}
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
              Student{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
                Earnings Showcase
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real earnings from real students - see how our education
              translates to financial success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {studentEarnings.map((student, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {student.name}
                    </h3>
                    <p className="text-gray-400">{student.background}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">
                      {student.earnings}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {student.experience}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">
                  "{student.story}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            Ready to Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
              Success Story?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join hundreds of successful traders who transformed their financial
            future
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-400 text-black px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105"
          >
            <span>Get Started Today</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
