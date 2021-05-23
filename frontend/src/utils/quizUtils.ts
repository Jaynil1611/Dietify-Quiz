import { Quiz } from "../database";

export const findQuiz = (quizList: Array<Quiz>, quizId: string) => {
  return quizList.find(({ id }) => id === quizId);
};
