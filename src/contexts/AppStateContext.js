import React, { createContext, useState } from "react";

const defaultValue = {
  resourcesLoaded: false,
};

export const AppStateContext = createContext(null);

export const AppStateProvider = ({ children }) => {
  const [appState, setAppState] = useState(defaultValue);

  return (
    <AppStateContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppStateContext.Provider>
  );
};
