const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  category: {
    type: String,
  },
  date: {
    type: Date,
  },
  pages: {
    type: Number,
  },
  ratings: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
  review: {
    type: String,
  },
});

module.exports = mongoose.model("Book", BookSchema);
