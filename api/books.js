const express = require("express");
const { getBooks } = require("../controllers/books");

const router = express.Router();

router.route("/").get(getBooks);

//.post(createUser);

//router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
