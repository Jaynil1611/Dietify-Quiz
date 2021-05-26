const mongoose = require("mongoose");
const { Schema } = mongoose;
const { opts } = require("../utils/schemaOptions");
require("mongoose-type-url");

const OptionAttemptSchema = new Schema(
  {
    text: { type: String, required: true },
    isRight: { type: Boolean, required: true },
    isSelected: { type: Boolean },
  },
  opts
);

const QuestionAttemptSchema = new Schema(
  {
    question: { type: String, required: true },
    isAttempted: { type: Boolean },
    points: { type: Number, required: true },
    negativePoints: { type: Number, required: true },
    options: [OptionAttemptSchema],
  },
  opts
);

const QuizAttemptSchema = new Schema(
  {
    name: { type: String, required: true },
    userId: { type: String, required: true, ref: "User" },
    image: { type: mongoose.SchemaTypes.Url, required: true },
    totalQuestions: { type: Number, required: true },
    score: { type: Number, required: true },
    difficulty: { type: String, required: true },
    type: { type: String, required: true },
    correct: { type: Number, default: 0 },
    questions: [QuestionAttemptSchema],
  },
  opts
);

const QuizAttempt = mongoose.model("QuizAttempt", QuizAttemptSchema);

module.exports = { QuizAttempt };
