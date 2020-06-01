//import models
const User = require("../Models/UserModel");

//GETTING ALL THE USERS FROM THE DATABASE
exports.getAllUsers = (req, res) => {
  User.find({}, (err, user) => {
    res.send(user);
  });
};

//GET A SPECIFIC USER FROM THE DATABASE
exports.getSpecificUser = (req, res) => {
  User.find({ username: req.params.username }, (err, user) => {
    if (user.length == 0) {
      res.json({ message: "User doesn't exists" });
    } else {
      res.send(user);
    }
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
  const param = req.params.username;
  User.deleteOne({ username: param }, (err) =>
    !err ? res.send(param + " is deleted successfuly") : res.send(err)
  );
};

//Updating a user
exports.updateUser = (req, res) => {
  User.updateOne(
    { username: req.params.username },
    { $set: req.body },
    (err) => {
      if (!err) {
        res.send("Updated successfully");
      } else {
        if (err.keyPattern.username == 1 || err.keyPattern.email == 1) {
          res.send(
            `Sorry, ${
              err.keyValue.username || err.keyValue.email
            } is taken already`
          );
        }
      }
    }
  );
};
