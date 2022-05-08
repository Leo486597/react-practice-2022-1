import { useContext } from "react";
import { GlobalContext } from "../GlobalContextProvider";
import { AppBar } from "./AppBar";

export const AppLayout = function ({ children }) {
  const { theme } = useContext(GlobalContext);

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        minHeight: 100
      }}
    >
      <AppBar />

      {children}
    </div>
  );
};
