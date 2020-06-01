const User = require("../Models/UserModel");

const options = { year: "numeric", month: "long", day: "numeric" };
const today = new Date();
const date = today.toLocaleDateString("en-US", options);
const time = today.toLocaleTimeString();

exports.tweetNow = (req, res) => {
  User.updateOne(
    { username: req.body.username },
    {
      $push: {
        tweets: {
          username: req.body.username,
          tweet: req.body.tweet,
          like: 0,
          date: `${date} , ${time}`,
          reply: [],
        },
      },
    },
    (err) => {
      if (!err) {
        res.send("Tweet Sent");
      } else {
        res.send(err);
      }
    }
  );
};
