import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { useDispatch } from "react-redux";
import firebase from "firebase";
import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { login } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/auth/login"
            isLoggedIn={isLoggedIn}
            component={AuthRouter}
          ></PublicRoute>

          <PrivateRoute
            path="/"
            isLoggedIn={isLoggedIn}
            component={JournalScreen}
          ></PrivateRoute>

          {/* <Route path="/auth" component={AuthRouter} />

          <Route exact path="/" component={JournalScreen} /> */}

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
