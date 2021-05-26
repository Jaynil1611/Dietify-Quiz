const { Quiz } = require("../models/quiz.model");

const getAllQuizzes = async (req, res, next) => {
  try {
    const quizzes = await Quiz.find({});
    res.status(200).json({ success: true, quizzes });
  } catch (error) {
    next(error);
  }
};

const getQuizById = async (req, res, next) => {
  try {
    let { quiz } = req;
    res.status(200).json({ success: true, quiz });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllQuizzes, getQuizById };
