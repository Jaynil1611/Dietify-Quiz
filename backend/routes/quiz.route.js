const express = require("express");
const router = express.Router({ mergeParams: true });
const { quizParamHandler } = require("../middlewares/paramHandler");
const {
  getAllQuizzes,
  getQuizById,
} = require("../controllers/quiz.controller");


router.route("/").get(getAllQuizzes);

router.param("quizId", quizParamHandler);

router.route("/:quizId").get(getQuizById);

module.exports = router;
