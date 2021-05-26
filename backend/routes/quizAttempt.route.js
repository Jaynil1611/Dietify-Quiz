const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  quizAttemptParamHandler,
  questionAttemptParamHandler,
} = require("../middlewares/paramHandler");
const {
  getAllQuizAttempts,
  getQuizAttempt,
  postQuizAttempt,
  updateQuizAttempt,
  getQuizAttemptQuestion,
  updateQuizAttemptQuestion,
  deleteQuizAttempt,
} = require("../controllers/quizAttempt.controller");

router.route("/").get(getAllQuizAttempts).post(postQuizAttempt);

router.param("quizId", quizAttemptParamHandler);

router
  .route("/:quizId")
  .get(getQuizAttempt)
  .post(updateQuizAttempt)
  .delete(deleteQuizAttempt);

router.param("questionId", questionAttemptParamHandler);

router
  .route("/:quizId/:questionId")
  .get(getQuizAttemptQuestion)
  .post(updateQuizAttemptQuestion);

module.exports = router;
