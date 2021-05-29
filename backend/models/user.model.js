const mongoose = require("mongoose");
const { Schema } = mongoose;
const { opts } = require("../utils/schemaOptions");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: "Email is required",
      unique: true,
      validate: {
        validator: function (email) {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/g.test(email);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    password: {
      type: String,
      required: "Password is required",
      validate: {
        validator: function (value) {
          return /^(?=.*[A-Za-z])(?=.*\d).{6,}$/g.test(value);
        },
        message: () =>
          `Password should contain atleast 6 characters (atleast one number & one letter)`,
      },
    },
    name: { type: String, required: true },
  },
  opts
);

const User = mongoose.model("User", UserSchema);

module.exports = { User };
