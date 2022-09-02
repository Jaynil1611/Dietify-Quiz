const { Quiz } = require("../models/quiz.model");
const { Quizzes } = require("./quiz.data");

async function storeQuizzes() {
  try {
    Quizzes.forEach(async (quiz) => {
      const quizToBeSaved = new Quiz(quiz);
      await quizToBeSaved.save();
    });
  } catch (error) {
    console.log("Error saving quizzes to db!");
  }
}

module.exports = { storeQuizzes };
