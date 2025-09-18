import React from "react";
import { Star, Play, ExternalLink, ArrowRight } from "lucide-react";

const TestimonialsSection = () => {
  const videoTestimonials = [
    {
      title: "From Zero to Profitable Trader",
      thumbnail:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "3:45",
      student: "Rajesh Kumar",
    },
    {
      title: "My Trading Success Story",
      thumbnail:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "4:20",
      student: "Priya Sharma",
    },
    {
      title: "How I Achieved Financial Freedom",
      thumbnail:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "5:15",
      student: "Amit Patel",
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
  ];

  const instagramComments = [
    {
      username: "@trading_enthusiast",
      comment:
        "Amazing content! Your strategies really work in live markets 🔥",
      likes: 24,
    },
    {
      username: "@market_learner",
      comment:
        "Thank you for the detailed explanation. Finally understood risk management properly! 💯",
      likes: 18,
    },
    {
      username: "@future_trader",
      comment: "Best trading education content on Instagram. Keep it up! 📈",
      likes: 31,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
              Learners Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real success stories from our students across video testimonials,
            Google reviews, and social media
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Hear from Our Students
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-green-500/20 hover:border-green-400/50 transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-500/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white ml-1" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-white font-semibold mb-2">
                    {video.title}
                  </h4>
                  <p className="text-gray-400 text-sm">by {video.student}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Google Reviews
            </h3>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-green-400 fill-current"
                    size={20}
                  />
                ))}
              </div>
              <span className="text-xl font-bold text-white">4.9/5</span>
              <span className="text-gray-400">(127 reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {googleReviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-green-400 fill-current"
                        size={14}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-3 text-sm">
                  "{review.review}"
                </p>
                <p className="text-gray-400 text-xs">{review.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Comments */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Instagram Comments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instagramComments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-green-400 font-semibold text-sm">
                    {comment.username}
                  </h4>
                  <span className="text-gray-400 text-xs">
                    ❤️ {comment.likes}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {comment.comment}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/testimonials"
            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105"
          >
            <span>View All Testimonials</span>
            <ArrowRight size={20} />
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

export default TestimonialsSection;
