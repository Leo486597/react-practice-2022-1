import React from "react";

export const themeMeta = {
  light: {
    backgroundColor: "pink"
  },
  dark: {
    backgroundColor: "yellow"
  }
};

export const globalReducerActions = {
  toggle: "TOGGLE-THEME"
};

export const globalReducer = function (state, { type }) {
  switch (type) {
    case globalReducerActions.toggle:
      if (state.theme === themeMeta.light) {
        return { ...state, theme: themeMeta.dark };
      }
      return { ...state, theme: themeMeta.light };
    default:
      throw new Error(`globalContextReducer: ${type} not defined!`);
      break;
  }
};

export const useGlobalContext = function (initialState) {
  initialState = initialState || {
    theme: themeMeta.dark
  };

  const [state, dispatch] = React.useReducer(globalReducer, initialState);

  // combined context
  const context = { ...initialState, ...state, dispatch };

  return context;
};
