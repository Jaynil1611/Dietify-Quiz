import { Navigate } from "react-router";
import { useQuiz } from "../../contexts";
import { PrivateRouteProps } from "./PrivateRoute.type";

function PrivateRoute({ children }: PrivateRouteProps) {
  const { token } = useQuiz();
  return <>{token ? children : <Navigate replace to="/login" />}</>;
}

export default PrivateRoute;
