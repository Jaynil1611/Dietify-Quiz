import { showToast } from "../components";
import { Quiz } from "../database";
import {
  INCREMENT_QUESTION_NUMBER,
  INITIALISE_QUIZ_ATTEMPT,
  UPDATE_USER_DETAILS,
} from "../reducers";
import { constructURL, findCurrentQuestionNumber } from "../utils";
import callMockServer from "./server.request";
import { Action } from "../contexts";
import { SignUp } from "./server.type";

export const submitQuiz = async (quizAttempt: Quiz, quizId: string) => {
  const { error } = await callMockServer({
    type: "post",
    url: `${constructURL()}/attempt/${quizId}`,
    data: { ...quizAttempt, quizId, isSubmitted: true },
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
    data: { ...quizAttempt, quizId },
    url: `${constructURL()}/attempt/${quizId}`,
  });
};

export const signUpUser = async ({
  firstname,
  lastname,
  email,
  password,
}: SignUp): Promise<Boolean> => {
  const { error } = await callMockServer({
    type: "post",
    url: `${constructURL()}/users`,
    data: { firstname, lastname, email, password },
  });
  if (!error) {
    showToast("Sign up successful", "success");
    return true;
  }
  showToast("Sign up failed!", "error");
  return false;
};

export const getUserDetails = async (dispatch: (action: Action) => void) => {
  const { response, error } = await callMockServer({
    type: "get",
    url: `${constructURL()}/users/user`,
  });
  if (!error) {
    const { firstname, lastname } = response?.data.user;
    dispatch({ type: UPDATE_USER_DETAILS, payload: { firstname, lastname } });
  }
};
