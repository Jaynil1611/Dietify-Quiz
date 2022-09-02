const { QuizAttempt } = require("../models/quizAttempt.model");
const { extend } = require("lodash");
const { getRequiredDataFromQuiz } = require("../utils/quizAttemptUtils");

const getAllQuizAttempts = async (req, res, next) => {
  const { userId } = req;
  const quizzes = QuizAttempt.find({ userId });
  res.status(201).json({ success: true, quizzes });
};

const postQuizAttempt = async (req, res, next) => {
  try {
    let quiz = req.body;
    const { userId } = req;
    const quizExist = await QuizAttempt.findOne({
      userId,
      quizId: quiz.quizId,
    }).select("-__v");

    if (!quizExist) {
      quiz = {
        userId,
        ...getRequiredDataFromQuiz(quiz),
      };
      quiz = new QuizAttempt(quiz);
      quiz = await quiz.save();
      return res.status(201).json({ success: true, quiz });
    }
    res
      .status(409)
      .json({ success: false, message: "Quiz attempt already exists" });
  } catch (error) {
    next(error);
  }
};

const getQuizAttempt = async (req, res) => {
  const { quiz } = req;
  res.status(200).json({ success: true, quiz });
};

const updateQuizAttempt = async (req, res, next) => {
  try {
    const quizUpdates = req.body;
    let { quiz } = req;
    console.log(quizUpdates);
    quiz = extend(quiz, getRequiredDataFromQuiz(quizUpdates));
    quiz = await quiz.save();
    console.log({ quiz });
    res.status(201).json({ success: true, quiz });
  } catch (error) {
    next(error);
  }
};

const deleteQuizAttempt = async (req, res, next) => {
  try {
    const { quiz } = req;
    await quiz.delete();
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

const getQuizAttemptQuestion = async (req, res) => {
  const { question } = req;
  res.status(200).json({ success: true, question });
};

const updateQuizAttemptQuestion = async (req, res, next) => {
  try {
    let updatedQuestion = req.body;
    const { quiz, question } = req;
    if (question) {
      updatedQuestion = extend(question, updatedQuestion);
    }
    question.set(updatedQuestion);
    await quiz.save();
    res.status(201).json({ success: true, question });
  } catch (error) {
    next(error);
  }
};

const clearAllQuizAttempts = async (req, res, next) => {
  try {
    const { userId } = req;
    await QuizAttempt.deleteMany({ userId });
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllQuizAttempts,
  getQuizAttempt,
  getQuizAttemptQuestion,
  postQuizAttempt,
  updateQuizAttempt,
  updateQuizAttemptQuestion,
  deleteQuizAttempt,
  clearAllQuizAttempts,
};
