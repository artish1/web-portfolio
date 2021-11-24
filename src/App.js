import React, { useContext, useEffect } from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { withTheme } from "styled-components";

import Home from "./components/organisms/Home";
import AppLoading from "./components/AppLoading";
import { AppStateContext } from "./contexts/AppStateContext";

function App({ theme }) {
  const {
    appState: { resourcesLoaded },
  } = useContext(AppStateContext);
  //Change body color based off of theme.
  useEffect(() => {
    document.querySelector("body").style.backgroundColor =
      theme.backgroundColor;
  }, [theme]);

  return (
    <div className="App">
      {!resourcesLoaded && <AppLoading />}
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about"></Route>
    </div>
  );
}

export default withTheme(App);
