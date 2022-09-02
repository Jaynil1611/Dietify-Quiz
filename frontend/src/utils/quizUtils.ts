import axios from "axios";
import { Quiz } from "../database";
import { Option, Question } from "../database";
import { checkSelectedOption } from "./quizReducerUtils";

export const findQuiz = (quizList: Array<Quiz>, quizId: string) => {
  return quizList.find(({ id }) => id === quizId);
};

export const getPoints = (
  options: Array<Option>,
  points: number,
  negativePoints: number
): number => {
  return checkSelectedOption(options) ? points : -1 * negativePoints;
};

export const getAttemptedQuestions = (questions: Array<Question>): number => {
  return questions.filter(({ isAttempted }) => isAttempted === true).length;
};

export const constructURL = () => {
  return `${process.env.REACT_APP_BACKEND_URL}`;
};

export const findCurrentQuestionNumber = (quiz: Quiz) => {
  const number = quiz.questions.filter(
    (question) => "isAttempted" in question
  ).length;
  return number > 0 ? number : 0;
};

export const checkQuizEnd = (
  currentQuestionNumber: number,
  totalQuestions: number
): boolean => currentQuestionNumber === totalQuestions;

export const setupAuthHeaderForServerCalls = (AUTH_TOKEN: string | null) => {
  return AUTH_TOKEN
    ? (axios.defaults.headers.common["Authorization"] = AUTH_TOKEN)
    : delete axios.defaults.headers.common["Authorization"];
};
