import React from "react";
import { GlobalContext } from "./GlobalContextProvider";

// the dispatch function is captured in here for reducer async usage
let globalContextDispatch = null;

export const themeMeta = {
  light: {
    backgroundColor: "pink"
  },
  dark: {
    backgroundColor: "yellow"
  }
};

// todo, put too many state to global provider may affect the performance
// aa one changed, all listeners will be notified
// we can split to more providers for more simpler responsiblity
const getInitialState = (initialState) => {
  return {
    theme: themeMeta.dark,
    userPermissions: {},
    isLoading: false,
    errorMessage: "",
    ...initialState
  };
};

export const globalReducerActions = {
  toggleTheme: "TOGGLE-THEME",
  loadUserPermissions: "LOAD-USER-PERMISSIONS",
  loadedUserPermissions: "LOADED-USER-PERMISSIONS",
  popErrorMessageAlert: "POP-GENERAL-ERROR-MESSAGE-ALERT"
};

const mockLoadMetaDataAsync = async function () {
  const mockUserPermissions = {
    usecase1: true
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockUserPermissions);
      // reject("mock failed!");
    }, 3000);
  });
};

export const globalReducer = function (state, action) {
  switch (action.type) {
    case globalReducerActions.toggleTheme:
      if (state.theme === themeMeta.light) {
        return { ...state, theme: themeMeta.dark };
      }

      return { ...state, theme: themeMeta.light };

    case globalReducerActions.loadUserPermissions:
      mockLoadMetaDataAsync()
        .then((res) => {
          // dispatch a new event after loaded
          globalContextDispatch({
            type: globalReducerActions.loadedUserPermissions,
            payload: {
              userPermissions: res,
              isLoading: false,
              errorMessage: ""
            }
          });
        })
        .catch((error) => {
          globalContextDispatch({
            type: globalReducerActions.popErrorMessageAlert,
            payload: {
              userPermissions: {},
              isLoading: false,
              errorMessage: error
            }
          });
        });

      return {
        ...state,
        userPermissions: {},
        isLoading: true,
        errorMessage: ""
      };

    case globalReducerActions.loadedUserPermissions:
      return { ...state, ...action.payload };

    case globalReducerActions.popErrorMessageAlert:
      return { ...state, ...action.payload };

    default:
      return {
        ...state,
        ...action.payload,
        errorMessage: `${type} is not been handled in reducer!`
      };
      break;
  }
};

export const initializeGlobalContext = function (initialState = {}) {
  const [state, dispatch] = React.useReducer(
    globalReducer,
    getInitialState(initialState)
  );

  // dispatch action to load meta data from server
  React.useEffect(() => {
    dispatch({ type: globalReducerActions.loadUserPermissions });
    globalContextDispatch = dispatch;
  }, []);

  // combined context
  const context = { ...initialState, ...state, dispatch };

  return context;
};

export const useGlobalContext = function () {
  const context = React.useContext(GlobalContext);

  if (!context) {
    throw new Error(`GlobalContext must be used under a provider`);
  }

  return context;
};
