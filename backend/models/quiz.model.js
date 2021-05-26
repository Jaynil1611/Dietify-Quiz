const mongoose = require("mongoose");
const { Schema } = mongoose;
const { opts } = require("../utils/schemaOptions");
require("mongoose-type-url");

const OptionSchema = new Schema(
  {
    text: { type: String, required: true },
    isRight: { type: Boolean, required: true },
    isSelected: { type: Boolean },
  },
  opts
);

const QuestionSchema = new Schema(
  {
    question: { type: String, required: true },
    isAttempted: { type: Boolean },
    points: { type: Number, required: true },
    negativePoints: { type: Number, required: true },
    options: [OptionSchema],
  },
  opts
);
const QuizSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: mongoose.SchemaTypes.Url, required: true },
    totalQuestions: { type: Number, required: true },
    score: { type: Number, required: true },
    difficulty: { type: String, required: true },
    type: { type: String, required: true },
    questions: [QuestionSchema],
  },
  opts
);

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = { Quiz };
