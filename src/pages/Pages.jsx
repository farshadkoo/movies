import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default function Pages() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
    </Switch>
  );
}
