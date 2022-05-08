import React from "react";
import { GlobalProvider } from "./globalContext";
import { AppLayout } from "./layoutComponents/AppLayout";
import "./styles.css";
import { Usecase1 } from "./usecase1/Usecase1";

export default function App() {
  return (
    // as provider is a component, we can put the state to provider, instead of in the app
    <GlobalProvider>
      <AppLayout>
        <Usecase1 />
      </AppLayout>
    </GlobalProvider>
  );
}
