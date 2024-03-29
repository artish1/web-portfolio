import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Themes
import defaultTheme from "./themes/dark-theme";
import { AppStateProvider } from "./contexts/AppStateContext";
// import lightTheme from "./themes/light-theme";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <AppStateProvider>
          <App />
        </AppStateProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
