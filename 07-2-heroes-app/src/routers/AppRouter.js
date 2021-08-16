import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { user } = React.useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            isAuthenticated={user.logged}
            path="/login"
            component={LoginScreen}
          />

          <PrivateRoute
            path="/"
            isAuthenticated={user.logged}
            component={DashboardRoutes}
          />
        </Switch>
      </div>
    </Router>
  );
};
