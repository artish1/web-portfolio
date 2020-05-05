import React, { useEffect } from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { withTheme } from "styled-components";

import Home from "./components/organisms/Home";

function App({ theme }) {
  //Change body color based off of theme.
  useEffect(() => {
    document.querySelector("body").style.backgroundColor =
      theme.backgroundColor;
  }, [theme]);

  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about"></Route>
    </div>
  );
}

export default withTheme(App);
