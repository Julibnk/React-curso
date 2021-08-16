import React from "react";
import { Route, Redirect } from "react-router";

export const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/login"></Redirect>
        );
      }}
    ></Route>
  );
};
