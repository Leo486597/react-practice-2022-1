import { themeMeta } from "./globalContext";

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
