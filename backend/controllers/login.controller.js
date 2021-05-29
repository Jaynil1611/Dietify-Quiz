const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");

const signUpNewUser = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(403)
        .json({ success: false, errorMessage: "User already exists!" });
    }

    user = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);
    user.set("password", newPassword);
    await user.save();
    res
      .status(201)
      .json({ success: true, message: "User registration successful" });
  } catch (error) {
    next(error);
  }
};

const verifyUserCredentials = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, errorMessage: "User doesn't exist!" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (isPasswordMatch) {
      const token = jwt.sign(
        {
          userId: user._id,
          expiry: "24h",
        },
        process.env["SECRET"]
      );
      return res.status(200).json({ success: true, token, name: user.name });
    }

    res
      .status(401)
      .json({ success: false, errorMessage: "Passwords don't match" });
  } catch (error) {
    next(error);
  }
};

module.exports = { signUpNewUser, verifyUserCredentials };
