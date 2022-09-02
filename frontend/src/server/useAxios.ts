import { useEffect, useState } from "react";
import { useQuiz } from "../contexts/quizContext";
import { INITIALISE_QUIZZES } from "../reducers";
import { callMockServer } from "./index";

const userId = "60ae411072e44c2e44da4814";

export default function useAxios(resource: string, name: string) {
  const { dispatch } = useQuiz();
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoadingStatus(true);
    (async () => {
      try {
        const { error, response } = await callMockServer({
          type: "get",
          url: constructURL(resource),
        });
        if (!error && response) {
          dispatch({
            type: INITIALISE_QUIZZES,
            payload: { quizzes: response.data[name] },
          });
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoadingStatus(false);
      }
    })();
  }, [dispatch, name, resource]);

  return { loadingStatus, error };
}

const constructURL = (resource: string) => {
  if (resource === "quizzes") {
    return `${process.env.REACT_APP_BACKEND_URL}/${resource}`;
  }
  return `${process.env.REACT_APP_BACKEND_URL}/user/${userId}/${resource}`;
};
