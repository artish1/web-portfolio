import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Home from "./components/organisms/Home";

/*
 primary: #c07c84,
  secondary: #6c5b7b,
  accent: #fffcf1,
  texts: #05386b
*/

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about"></Route>
    </div>
  );
}

export default App;
