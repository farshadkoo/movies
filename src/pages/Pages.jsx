import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoutes from "../component/PrivateRoutes/PrivateRoutes";
import Home from "./Home";
import About from "./About";
import Auth from "./Auth";
import Movie from "./Movie";
import TvShow from "./TvShow";
import Celebrity from "./clebrity";
import Profile from "./Profile";

export default function Pages() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <PrivateRoutes path="/profile">
        <Profile />
      </PrivateRoutes>
      <Route path="/movies/:id/:movieTitel ">
        <Movie />
      </Route>
      <Route path="/tv-shows/:id/:tvshowsName ">
        <TvShow />
      </Route>
      <Route path="/celebrites/:id/:celebrityName ">
        <Celebrity />
      </Route>
    </Switch>
  );
}
