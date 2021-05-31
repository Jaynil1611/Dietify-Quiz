import React from "react";

export type PrivateRouteProps = {
  token: string;
  path: string;
  element: React.ReactElement;
};
