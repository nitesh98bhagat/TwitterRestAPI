const express = require("express");
const router = express.Router();

//controllers
const { login, signup } = require("../Controllers/Auth");

router.get("/", (req, res) => res.send("AUTHENTICATION ROUTE"));

router.post("/login", login);

router.post("/signup", signup);

module.exports = router;
