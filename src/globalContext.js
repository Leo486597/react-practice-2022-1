import React, { createContext } from "react";
import { globalReducer } from "./globalReducer";

export const themeMeta = {
  light: {
    backgroundColor: "pink"
  },
  dark: {
    backgroundColor: "yellow"
  }
};

export const GlobalContext = createContext(null);

export function GlobalProvider({ value, children }) {
  const initialState = {
    theme: themeMeta.dark
  };

  const [state, dispatch] = React.useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ dispatch, ...state, ...value }}>
      {children}
    </GlobalContext.Provider>
  );
}
