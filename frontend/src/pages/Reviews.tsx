// src/pages/Reviews.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiStar,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiHeart,
  FiCheck,
  FiPhone,
} from "react-icons/fi";
import PageBanner from "../components/PageBanner";
import { ToastContainer, toast } from "react-toastify";
interface Review {
  _id?: string;
  name: string;
  email: string;
  phone?: string;
  rating: number;
  review: string;
  date?: string;
}

const Reviews = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Review>({
    name: "",
    email: "",
    phone: "",
    rating: 0,
    review: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);

  // Fetch existing reviews
  const fetchReviews = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/reviews");
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });
      toast.success("Form submitted successfully!");

      if (res.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setShowForm(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            rating: 0,
            review: "",
          });
          fetchReviews(); // Refresh the list
        }, 3000);
      } else {
        const err = await res.json();
        alert("Failed to submit: " + err.message);
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Please fill in all fields!");
    }
  };

  const handleRatingClick = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <PageBanner
        title="Customer Reviews"
        subtitle="Read testimonials from our satisfied customers and share your experience"
        backgroundImage="https://images.pexels.com/photos/7679722/pexels-photo-7679722.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumbs={[{ name: "Reviews" }]}
      />

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
              <FiHeart className="h-4 w-4 text-purple-600" />
              <span className="text-purple-600 font-semibold">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Happy Customers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Over 500+ satisfied customers and counting
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(!showForm)}
              className="mt-8 bg-gradient-to-r from-purple-600 to-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <FiMessageSquare className="h-5 w-5" />
              <span>{showForm ? "View Reviews" : "Give Review"}</span>
            </motion.button>
          </motion.div>

          {/* Reviews Grid */}
          {!showForm && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <motion.div
                  key={review._id || index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-3 font-bold text-sm uppercase">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold">{review.name}</h4>
                      <p className="text-sm text-gray-500">
                        {new Date(review.date || "").toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{review.review}"</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Review Form */}
      {showForm && (
        <section className="py-20 bg-gradient-to-br from-purple-50 to-rose-50">
          <div className="max-w-3xl mx-auto px-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
                <FiMessageSquare className="h-4 w-4 text-purple-600" />
                <span className="text-purple-600 font-semibold">
                  Share Your Experience
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Write a Review
              </h2>
              <p className="text-gray-600 text-lg">
                We'd love to hear your feedback
              </p>
            </motion.div>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-xl space-y-6"
            >
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-3"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-3"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-3"
                  placeholder="1234567890"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Rating *
                </label>
                <div className="flex space-x-2 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => handleRatingClick(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className={`text-3xl transition-all ${
                        star <= (hoveredRating || formData.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Review *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.review}
                  onChange={(e) =>
                    setFormData({ ...formData, review: e.target.value })
                  }
                  className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-3 resize-none"
                  placeholder="Write your review here..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition-all"
              >
                Submit Review
              </button>
            </form>
              <ToastContainer position="top-right" autoClose={3000} />
          </div>
        </section>
      )}
    </motion.div>
  );
};

export default Reviews;
