const express = require("express");
const router = express.Router({ mergeParams: true });
const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const {
  getUserDetails,
  changePassword,
} = require("../controllers/user.controller");

router.route("/user").get(getUserDetails).post(changePassword);

module.exports = router;
