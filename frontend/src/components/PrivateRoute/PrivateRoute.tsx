import { Navigate, Route } from "react-router";
import { PrivateRouteProps } from "./PrivateRoute.type";

function PrivateRoute({ token, path, element }: PrivateRouteProps) {
  return (
    <>
      {token ? (
        <Route element={element} path={path} />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default PrivateRoute;
