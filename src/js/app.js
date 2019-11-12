import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Container from "./components/Container.jsx";

const App = () => {
  return (
    <Router>
      <Container />
    </Router>
  );
};
export default App;
