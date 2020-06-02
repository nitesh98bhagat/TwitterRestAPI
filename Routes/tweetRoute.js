const express = require("express");
const router = express.Router();

const {
  tweetNow,
  getAllTweets,
  updateTweet,
  getSpecificTweet,
} = require("../Controllers/Tweet");

router.get("/", getAllTweets);
router.get("/:id", getSpecificTweet);
router.post("/", tweetNow);
router.patch("/:id", updateTweet);

module.exports = router;
