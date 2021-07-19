import { Action, InitialState } from "../contexts";
import {
  getUpdatedScore,
  getUpdatedOptions,
  getUpdatedQuestionNumber,
  getUpdatedCorrectValue,
} from "../utils";
import {
  INCREMENT_QUESTION_NUMBER,
  INITIALISE_QUIZZES,
  INITIALISE_QUIZ_ATTEMPT,
  RESET_QUIZ,
  SELECT_OPTION,
  SHOW_RESULT,
  UPDATE_SCORE,
  UPDATE_USER_DETAILS,
} from "./actions";

export default function quizReducer(
  prevState: InitialState,
  action: Action
): InitialState {
  switch (action.type) {
    case INITIALISE_QUIZZES:
      return {
        ...prevState,
        quizzes: action.payload.quizzes,
      };

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
          currentQuestionNumber: getUpdatedQuestionNumber(
            prevState.currentQuestionNumber,
            action.payload?.questionNumber
          ),
        };
      }
      throw new Error("No quiz found!");

    case UPDATE_SCORE:
      if (prevState.quizAttempt) {
        const { questionId } = action.payload;
        const score = getUpdatedScore(prevState.quizAttempt, questionId);
        return {
          ...prevState,
          quizAttempt: {
            ...prevState.quizAttempt,
            score: score,
            correct: getUpdatedCorrectValue(
              prevState.quizAttempt.correct,
              score,
              prevState.quizAttempt.score
            ),
          },
        };
      }
      throw new Error("No quiz found!");

    case UPDATE_USER_DETAILS:
      const { firstname, lastname } = action.payload;
      return {
        ...prevState,
        firstname,
        lastname,
      };

    case SHOW_RESULT:
      return {
        ...prevState,
        quizAttempt: { ...prevState.quizAttempt!, isSubmitted: true },
        showReview: true,
      };

    case RESET_QUIZ:
      return {
        ...prevState,
        quizAttempt: null,
        currentQuestionNumber: 1,
        showReview: false,
      };

    default:
      throw new Error("Invalid Action");
  }
}
