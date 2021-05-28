const { Quiz } = require("../models/quiz.model");
const { QuizAttempt } = require("../models/quizAttempt.model");

const quizParamHandler = async (req, res, next, quizId) => {
  try {
    const quiz = await Quiz.findById(quizId).select("-__v");
    if (!quiz) {
      return res
        .status(400)
        .json({ success: false, message: "Quiz not found!" });
    }
    req.quiz = quiz;
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't retrieve the quiz",
      errorMessage: error.message,
    });
  }
};

const quizAttemptParamHandler = async (req, res, next, quizId) => {
  try {
    const { userId } = req.params;
    const quiz = await QuizAttempt.findOne({ userId, _id: quizId }).select(
      "-__v"
    );
    const submitStatus = quiz.isSubmitted;
    if (!quiz || submitStatus) {
      return res
        .status(400)
        .json({ success: false, message: "Quiz not found!" });
    }
    req.quiz = quiz;
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't retrieve the quiz",
      errorMessage: error.message,
    });
  }
};

const questionAttemptParamHandler = async (req, res, next, questionId) => {
  try {
    const { quiz } = req;
    const question = quiz.questions.id(questionId);
    if (!question) {
      return res
        .status(400)
        .json({ success: false, message: "Question not found!" });
    }
    req.question = question;
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't retrieve the question",
      errorMessage: error.message,
    });
  }
};

module.exports = {
  quizParamHandler,
  questionAttemptParamHandler,
  quizAttemptParamHandler,
};
