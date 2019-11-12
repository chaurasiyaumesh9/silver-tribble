import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home.jsx";
import Users from "./Users.jsx"; //list of all users
import User from "./User.jsx"; //individual user
import Categories from "./Categories.jsx";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/users" component={Users} />
    <Route exact path="/categories" component={Categories} />
    <Route exact path="/users/:userid" component={User} />
  </Switch>
);

export default Routes;
