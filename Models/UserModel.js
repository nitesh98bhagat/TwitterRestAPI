const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    maxlenght: 32,
    required: true,
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    maxlenght: 32,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  //TODO:come back here
  password: {
    type: String,
    require: true,
    maxlenght: 32,
    trim: true,
  },
  bio: {
    type: String,
    maxlenght: 180,
    trim: true,
  },
  joiningDate: String,
  salt: String,
  followers: {
    type: Array,
    default: [],
  },
  follows: {
    type: Array,
    default: [],
  },
  tweets: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);
