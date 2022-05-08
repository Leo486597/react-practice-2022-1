import { ErrorAlert } from "../sharedComponents/ErrorAlert";
import { Loader } from "../sharedComponents/Loader";
import { useGlobalContext } from "../useGlobalContext";
import { AppBar } from "./AppBar";

export const AppLayout = function ({ children }) {
  const { theme } = useGlobalContext();

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        minHeight: 100
      }}
    >
      <AppBar />

      {/* global shared components registered here and controlled by global context */}
      <ErrorAlert />

      <Loader />

      {children}
    </div>
  );
};
