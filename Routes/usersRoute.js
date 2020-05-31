const express = require("express");
const router = express.Router();


//User controller
const {
  addUser,
  getAllUsers,
  getSpecificUser,
  deleteAllUser,
  deleteSpecificUser,
} = require("../Controllers/Users");

//USERS ENDPOINT
router.get("/", getAllUsers);
router.post("/", addUser);
//GET A SPECIFIC USERSDATA
router.get("/:userid", getSpecificUser);

//DELETING A SPECIFIC USER FROM DB
router.delete("/:name");

//DELETING ALL USERS FROM DB
router.delete("/", deleteAllUser);

module.exports = router;
