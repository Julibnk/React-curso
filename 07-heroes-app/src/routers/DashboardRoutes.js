import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MarvelSreen } from "../components/marvel/MarvelScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { Navbar } from "../components/ui/Navbar";
import { SearchScreen } from "../components/search/SearchScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelSreen}></Route>
          <Route exact path="/hero/:heroeId" component={HeroScreen}></Route>
          <Route exact path="/dc" component={DcScreen}></Route>
          <Route exact path="/search" component={SearchScreen}></Route>

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
