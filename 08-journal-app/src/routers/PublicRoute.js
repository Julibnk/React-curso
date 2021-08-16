import React from "react";
import { Route, Redirect } from "react-router";

export const PublicRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        return isLoggedIn ? (
          <Redirect to="/" />
        ) : (
          <Component {...props}></Component>
        );
      }}
    ></Route>
  );
};
