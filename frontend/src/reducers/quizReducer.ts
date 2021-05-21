import { Action, InitialState } from "../contexts";

export default function quizReducer(
  prevState: InitialState,
  action: Action
): InitialState {
  switch (action.type) {
    case "INCREMENT_QUESTION_NUMBER":
      return prevState;
    default:
      return prevState;
  }
}
