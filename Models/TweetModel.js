const mongoose = require("mongoose");

const options = { year: "numeric", month: "long", day: "numeric" };
const today = new Date();
const date = today.toLocaleDateString("en-US", options);
const time = today.toLocaleTimeString();

const TweetModel = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  tweet: {
    type: String,
    require: true,
    trim: true,
    maxlenght: 256,
  },
  date: {
    type: String,
    default: `${date} [${time}]`,
  },
  like: {
    type: Number,
    default: 0,
  },
  reply: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Tweet", TweetModel);
