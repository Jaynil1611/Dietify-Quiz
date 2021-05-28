import { showToast } from "../components";
import { Quiz } from "../database";
import {
  INCREMENT_QUESTION_NUMBER,
  INITIALISE_QUIZ_ATTEMPT,
} from "../reducers";
import { constructURL, findCurrentQuestionNumber } from "../utils";
import callMockServer from "./server.request";
import { Action } from "../contexts";

export const submitQuiz = async (quizAttempt: Quiz, quizId: string) => {
  const { error } = await callMockServer({
    type: "post",
    url: `${constructURL()}/attempt/${quizId}`,
    data: { ...quizAttempt, isSubmitted: true },
  });
  if (!error) {
    showToast("Your quiz results have been saved!", "success");
  }
};

export const getQuizAttempt = async (
  dispatch: (action: Action) => void,
  quizId: string
) => {
  const { response, error } = await callMockServer({
    type: "get",
    url: `${constructURL()}/attempt/${quizId}`,
  });
  const quizResponse = response?.data.quiz;
  if (!error) {
    dispatch({
      type: INITIALISE_QUIZ_ATTEMPT,
      payload: { quiz: quizResponse },
    });
    dispatch({
      type: INCREMENT_QUESTION_NUMBER,
      payload: {
        questionNumber: findCurrentQuestionNumber(quizResponse),
      },
    });
    return true;
  }
  return false;
};

export const updateQuizAttempt = async (quizAttempt: Quiz, quizId: string) => {
  await callMockServer({
    type: "post",
    data: quizAttempt,
    url: `${constructURL()}/attempt/${quizId}`,
  });
};
