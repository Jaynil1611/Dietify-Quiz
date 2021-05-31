import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
import { showToast } from "../components";
import { quizReducer, UPDATE_USER_DETAILS } from "../reducers";
import { callMockServer } from "../server";
import { constructURL, setupAuthHeaderForServerCalls } from "../utils";
import { initialState } from "./initialState";
import { QuizContextType } from "./quizContext.type";

const QuizContext = createContext<QuizContextType>({} as QuizContextType);

export const QuizContextProvider: React.FC = ({ children }) => {
  const savedToken = localStorage.getItem("isUserLoggedIn");
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [token, setToken] = useState(
    savedToken ? JSON.parse(savedToken) : null
  );

  const setupAuthExceptionHandler = () => {
    const UNAUTHORIZED = 401;
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error?.response?.status === UNAUTHORIZED) {
          logoutUser();
        }
        return Promise.reject(error);
      }
    );
  };

  const loginUser = async (
    email: string,
    password: string
  ): Promise<Boolean> => {
    const { response, error } = await callMockServer({
      type: "post",
      url: `${constructURL()}/login`,
      data: { email, password },
    });
    if (!error) {
      const responseToken = response?.data.token;
      setToken(responseToken);
      setupAuthHeaderForServerCalls(responseToken);
      localStorage.setItem("isUserLoggedIn", JSON.stringify(responseToken));
      const { firstname, lastname } = response?.data;
      dispatch({ type: UPDATE_USER_DETAILS, payload: { firstname, lastname } });
      showToast("Login successful", "success");
      return true;
    }
    showToast("Email or password is incorrect", "error");
    return false;
  };

  const logoutUser = () => {
    setToken(null);
    setupAuthHeaderForServerCalls(null);
    localStorage.removeItem("isUserLoggedIn");
    showToast("Logout successful", "success");
  };

  return (
    <QuizContext.Provider
      value={{
        state,
        dispatch,
        loginUser,
        logoutUser,
        token,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
