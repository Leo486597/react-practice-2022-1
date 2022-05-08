import React from "react";
import styled from "styled-components";
import { GlobalContext } from "../GlobalContextProvider";
import { globalReducerActions } from "../useGlobalContext";

const StyledAppBar = styled.div`
  height: 100;
  display: flex;
  /* border: 1px solid black; */
  justify-content: space-around;
`;

export function AppBar() {
  const { dispatch } = React.useContext(GlobalContext);

  return (
    <StyledAppBar>
      <p>Coinbase </p>
      <button
        onClick={() => {
          dispatch({ type: globalReducerActions.toggle });
        }}
      >
        toggle theme
      </button>
    </StyledAppBar>
  );
}
