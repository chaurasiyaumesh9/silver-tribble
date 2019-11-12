import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home.jsx";
import Users from "./Users.jsx";
import Categories from "./Categories.jsx";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/users" component={Users} />
    <Route exact path="/categories" component={Categories} />
  </Switch>
);

export default Routes;
