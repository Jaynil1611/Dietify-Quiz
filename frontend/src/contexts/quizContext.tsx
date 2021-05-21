import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducers";
import { initialState } from "./initialState";
import { QuizContextType } from "./quizContext.type";

const QuizContext = createContext<QuizContextType>({} as QuizContextType);

export const QuizContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
