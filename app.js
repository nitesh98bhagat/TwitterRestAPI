//MODULES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

//Custom Routes
const usersRoute = require("./Routes/usersRoute");

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", usersRoute);

//DATABASE
mongoose.connect("mongodb://localhost:27017/wikkiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//home route
app.get("/", (req, res) => {
  res.send("home page");
});

//SERVER startup code
app.listen(3000, () => console.log("SERVER IS STARTED ON PORT:3000"));
