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
