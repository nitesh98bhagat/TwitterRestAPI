const Tweet = require("../Models/TweetModel");

//ADD A NEW TWEET
exports.tweetNow = (req, res) => {
  const tweet = new Tweet(req.body);
  tweet
    .save()
    .then((tweet) => res.send(`${tweet.username}'s you're Tweet was sent`))
    .catch((err) => res.send(err));
};

//GET ALL THE TWEETS
exports.getAllTweets = (req, res) => {
  Tweet.find({}, (err, tweet) => (!err ? res.send(tweet) : res.send(err)));
};

//GET A SPECIFIC TWEET
exports.getSpecificTweet = (req, res)=>{
  Tweet.findOne({_id:req.params.id}, (err, tweet) => (!err ? res.send(tweet) : res.send(err)));
}

//UPDATE A SPECIFIC TWEET
exports.updateTweet = (req, res) => {
  Tweet.updateOne({ _id: req.params.id }, { $set: req.body }, (err) =>
    !err ? res.send("Tweet Updated") : res.send(err)
  );
};
