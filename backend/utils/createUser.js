const { User } = require("../models/user.model");

async function createUser() {
  try {
    const user = new User({
      username: "dieitifyQuiz",
      password: "quizify1234",
    });
    await user.save();
  } catch (error) {
    console.error("Error while registering user", error.message);
  }
}

//userId: 60ae411072e44c2e44da4814

module.exports = { createUser };
