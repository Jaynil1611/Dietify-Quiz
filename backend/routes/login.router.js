const express = require("express");
const router = express.Router({ mergeParams: true });
const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { signUpNewUser, verifyUserCredentials } = require("../controllers/login.controller");

router.route("/").post(signUpNewUser);

router.route("/login").post(verifyUserCredentials);

module.exports = router;
