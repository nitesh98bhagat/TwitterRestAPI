//MODULES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

//User Model
const User = require("./Models/UserModel");

//Custom Routes
const usersRoute = require("./Routes/usersRoute");
const authRoute = require("./Routes/authRoute");

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", usersRoute);
app.use("/auth", authRoute);

//DATABASE
mongoose.connect("mongodb://localhost:27017/wikkiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//home route
const { tweetNow } = require("./Controllers/Tweet");

app.get("/", (req, res) => {
  User.find({}, (err, users) => {
    res.send(users);
  });
});

app.post("/", tweetNow);

//SERVER startup code

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`SERVER IS STARTED ON PORT:${port}`));
