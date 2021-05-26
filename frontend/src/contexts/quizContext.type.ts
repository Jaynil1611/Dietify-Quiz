import { Quiz } from "../database";
import {
  INITIALISE_QUIZ_ATTEMPT,
  INCREMENT_QUESTION_NUMBER,
  UPDATE_SCORE,
  RESET_QUIZ,
  SELECT_OPTION,
  SHOW_RESULT,
} from "../reducers";

export type InitialState = {
  quizAttempt: Quiz | null;
  currentQuestionNumber: number;
  showReview: boolean;
};

export type QuizContextType = {
  state: InitialState;
  dispatch: (action: Action) => void;
};

export type Action =
  | {
      type: typeof INITIALISE_QUIZ_ATTEMPT;
      payload: { quiz: Quiz };
    }
  | { type: typeof INCREMENT_QUESTION_NUMBER }
  | {
      type: typeof UPDATE_SCORE;
      payload: { questionId: string };
    }
  | {
      type: typeof SELECT_OPTION;
      payload: { questionId: string; optionId: string };
    }
  | { type: typeof SHOW_RESULT }
  | { type: typeof RESET_QUIZ };
