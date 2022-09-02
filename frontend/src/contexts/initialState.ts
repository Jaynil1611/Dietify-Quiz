import { InitialState } from "./quizContext.type";

export const initialState: InitialState = {
  quizzes: [],
  quizAttempt: null,
  currentQuestionNumber: 1,
  showReview: false,
};
