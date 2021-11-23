import React, { useEffect, useState } from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { withTheme } from "styled-components";

import Home from "./components/organisms/Home";
import AppLoading from "./components/AppLoading";

function App({ theme }) {
  const [loaded, setLoaded] = useState(false);
  //Change body color based off of theme.
  useEffect(() => {
    document.querySelector("body").style.backgroundColor =
      theme.backgroundColor;
  }, [theme]);

  return (
    <div className="App">
      <AppLoading finished={() => setLoaded(true)} />
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about"></Route>
    </div>
  );
}

export default withTheme(App);
