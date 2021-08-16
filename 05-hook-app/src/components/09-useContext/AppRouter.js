import React from "react";
import { NavBar } from "./NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen}></Route>
            <Route exact path="/about" component={AboutScreen}></Route>
            <Route exact path="/login" component={LoginScreen}></Route>
            <Redirect to="/" />

            {/* <Route path="/about" component=AboutScreen}></Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};
