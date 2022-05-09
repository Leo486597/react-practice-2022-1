import React, { createContext } from "react";
import { initializeGlobalContext } from "./useGlobalContext";

export const GlobalContext = createContext();

export function GlobalProvider({
  value = initializeGlobalContext(),
  children
}) {
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
