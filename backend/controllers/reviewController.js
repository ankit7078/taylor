// server/controllers/reviewController.js
const Review = require("../models/Review");

// POST /api/reviews
exports.createReview = async (req, res) => {
  try {
    const { name, email, phone, rating, review } = req.body;

    if (!name || !email || !rating || !review) {
      return res.status(400).json({ message: "Please fill all required fields." });
    }

    const newReview = new Review({ name, email, phone, rating, review });
    await newReview.save();

    res.status(201).json({ message: "Review submitted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET /api/reviews
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
