import React, { Component, Fragment } from "react";

import VendorForm from "./components/VendorForm.jsx";
import NavBar from "./components/NavBar.jsx";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <VendorForm />
      </Fragment>
    );
  }
}

export default App;
