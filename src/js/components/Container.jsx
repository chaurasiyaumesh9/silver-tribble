import React, { Component, Fragment } from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar.jsx";
import Routes from "./Routes.jsx";

const Container = () => {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route component={Routes} />
      </Switch>
    </Fragment>
  );
};
export default withRouter(Container);
