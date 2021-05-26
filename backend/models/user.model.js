const mongoose = require("mongoose");
const { Schema } = mongoose;
const { opts } = require("../utils/schemaOptions");

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: String,
  },
  opts
);

const User = mongoose.model("User", UserSchema);

module.exports = { User };
