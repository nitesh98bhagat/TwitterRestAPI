//import models
const User = require("../Models/UserModel");


//ADDING A USER TO THE DATABASE 
exports.addUser = (req, res) => {
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
    .then((data) => res.send(data.name + " is added to the database"))
    .catch((err) => {
      if (err.keyPattern.username == 1 || err.keyPattern.email == 1) {
        res.send(
          `Sorry, ${err.keyValue.username || err.keyValue.email} already exists`
        );
      }
    });
};

//GETTING ALL THE USERS FROM THE DATABASE
exports.getAllUsers = (req, res) => {
  User.find({}, (err, user) => {
    res.send(user);
  });
};

//GET A SPECIFIC USER FROM THE DATABASE
exports.getSpecificUser = (req, res) => {
  User.find({ name: req.params.userid }, (err, user) => {
    res.send(user);
  });
};

//DELETING ALL USERS FROM THE DATABASE
exports.deleteAllUser = (req, res) => {
  User.deleteMany({}, (err) =>
    !err ? res.send("Deleted all users from DB successfuly") : res.send(err)
  );
};

//DELETING A SPECIFIC USER FROM THE DATABASE
exports.deleteSpecificUser = (req, res) => {
  const param = req.params.name;
  User.deleteOne({ name: param }, (err) =>
    !err ? res.send(param + " is deleted successfuly") : res.send(err)
  );
};
