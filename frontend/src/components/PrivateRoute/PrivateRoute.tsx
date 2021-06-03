import { Navigate, Route } from "react-router";
import { useQuiz } from "../../contexts";
import { PrivateRouteProps } from "./PrivateRoute.type";

function PrivateRoute({ path, element }: PrivateRouteProps) {
  const { token } = useQuiz();
  return (
    <>
      {token ? (
        <Route element={element} path={path} />
      ) : (
        <Navigate replace to="/login" />
      )}
    </>
  );
}

export default PrivateRoute;
