const express = require("express");
const router = express.Router();

//User controller
const {
  addUser,
  getAllUsers,
  getSpecificUser,
  deleteAllUser,
  deleteSpecificUser,
  updateUser,
} = require("../Controllers/Users");

//USERS ENDPOINT
router.get("/", getAllUsers).delete(deleteAllUser);

//GET A SPECIFIC USERSDATA
router
  .get("/:userid", getSpecificUser)
  .delete("/:username", deleteSpecificUser)
  .patch("/:username", updateUser);

module.exports = router;
