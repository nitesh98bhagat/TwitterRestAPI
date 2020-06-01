//import models
const User = require("../Models/UserModel");

//LOGIN LOGIC
exports.login = (req, res) => {
  username = req.body.username;
  password = req.body.password;
  User.findOne({ username: username, password: password }, (err, user) => {
    if (user.length == 0) {
      res.json({ message: "either username or password is wrong" });
    } else {
      res.send(`Welcome ${user.name}`);
    }
  });
};

//SIGN UP LOGIC
exports.signup = (req, res) => {
  //Getting a formated joining date
  var options = { year: "numeric", month: "long", day: "numeric" };
  var today = new Date();

  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    bio: req.body.bio,
    salt: req.body.salt,
    joiningDate: today.toLocaleDateString("en-US", options),
  });
  newUser
    .save()
    .then((user) =>
      res.send(`Sign up successfully done, wellcome ${user.name}`)
    )
    .catch((err) => {
      if (err.keyPattern.username == 1 || err.keyPattern.email == 1) {
        res.send(
          `Sorry, ${err.keyValue.username || err.keyValue.email} already exists`
        );
      }
    });
};
