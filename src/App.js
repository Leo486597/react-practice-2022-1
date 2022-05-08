import React from "react";
import { GlobalProvider } from "./GlobalContextProvider";
import { themeMeta, useGlobalContext } from "./useGlobalContext";
import { AppLayout } from "./layoutComponents/AppLayout";
import { Usecase1 } from "./usecase1/Usecase1";

export default function App() {
  // able to override the context
  const globalContext = useGlobalContext({ theme: themeMeta.light });

  return (
    // put combined context to provider
    <GlobalProvider value={globalContext}>
      <AppLayout>
        <Usecase1 />
      </AppLayout>
    </GlobalProvider>
  );
}
