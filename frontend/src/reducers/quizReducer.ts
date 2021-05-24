import { Action, InitialState } from "../contexts";
import { initialState } from "../contexts/initialState";
import { getUpdatedScore, getUpdatedOptions } from "../utils";

import {
  INCREMENT_QUESTION_NUMBER,
  INITIALISE_QUIZ_ATTEMPT,
  RESET_QUIZ,
  SELECT_OPTION,
  SHOW_RESULT,
  UPDATE_SCORE,
} from "./actions";

export default function quizReducer(
  prevState: InitialState,
  action: Action
): InitialState {
  switch (action.type) {
    case INITIALISE_QUIZ_ATTEMPT:
      return {
        ...prevState,
        quizAttempt: action.payload.quiz,
      };

    case SELECT_OPTION:
      if (prevState.quizAttempt) {
        const { questionId, optionId } = action.payload;
        return {
          ...prevState,
          quizAttempt: {
            ...prevState.quizAttempt,
            questions: getUpdatedOptions(
              prevState.quizAttempt.questions,
              questionId,
              optionId
            ),
          },
        };
      }
      throw new Error("No quiz found!");

    case INCREMENT_QUESTION_NUMBER:
      if (prevState.quizAttempt) {
        return {
          ...prevState,
          currentQuestionNumber: prevState.currentQuestionNumber + 1,
        };
      }
      throw new Error("No quiz found!");

    case UPDATE_SCORE:
      if (prevState.quizAttempt) {
        const { questionId } = action.payload;
        const prevScore = prevState.quizAttempt.score;
        const score = getUpdatedScore(prevState.quizAttempt, questionId);
        return {
          ...prevState,
          quizAttempt: {
            ...prevState.quizAttempt,
            score: score,
          },
          correct: prevState.correct + (score > prevScore ? 1 : 0),
        };
      }
      throw new Error("No quiz found!");

    case SHOW_RESULT:
      return {
        ...prevState,
        showReview: true,
      };

    case RESET_QUIZ:
      return {
        ...initialState,
      };

    default:
      throw new Error("Invalid Action");
  }
}
