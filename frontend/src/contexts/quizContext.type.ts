import { Quiz } from "../database";
import {
  INITIALISE_QUIZ_ATTEMPT,
  INCREMENT_QUESTION_NUMBER,
  UPDATE_SCORE,
  RESET_QUIZ,
  SELECT_OPTION,
  SHOW_RESULT,
  INITIALISE_QUIZZES,
  UPDATE_USER_DETAILS,
} from "../reducers";

export type InitialState = {
  quizzes: Array<Quiz>;
  quizAttempt: Quiz | null;
  currentQuestionNumber: number;
  showReview: boolean;
  firstname?: string;
  lastname?: string;
};

export type QuizContextType = {
  state: InitialState;
  dispatch: (action: Action) => void;
  loginUser: (email: string, password: string) => Promise<Boolean>;
  token: string;
  logoutUser: () => void;
};

export type Action =
  | {
      type: typeof INITIALISE_QUIZ_ATTEMPT;
      payload: { quiz: Quiz };
    }
  | { type: typeof INITIALISE_QUIZZES; payload: { quizzes: Array<Quiz> } }
  | {
      type: typeof INCREMENT_QUESTION_NUMBER;
      payload?: { questionNumber: number };
    }
  | {
      type: typeof UPDATE_SCORE;
      payload: { questionId: string };
    }
  | {
      type: typeof SELECT_OPTION;
      payload: { questionId: string; optionId: string };
    }
  | {
      type: typeof UPDATE_USER_DETAILS;
      payload: { firstname: string; lastname: string };
    }
  | { type: typeof SHOW_RESULT }
  | { type: typeof RESET_QUIZ };
