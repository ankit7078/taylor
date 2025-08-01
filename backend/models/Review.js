// server/models/Review.js
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", reviewSchema);
