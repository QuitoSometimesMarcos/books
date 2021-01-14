const Book = require("../models/Book");

const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.json({ success: true, msg: "show all books", data: books });
  } catch (err) {
    next(err);
  }
};

module.exports = { getBooks };
