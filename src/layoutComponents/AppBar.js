import React from "react";
import styled from "styled-components";
import { GlobalContext, themeMeta } from "../globalContext";
import { globalReducerActions } from "../globalReducer";

const StyledAppBar = styled.div`
  height: 100;
  display: flex;
  /* border: 1px solid black; */
  justify-content: space-around;
`;

export function AppBar() {
  // const { toggleThemeCallback } = React.useContext(GlobalContext);
  const { dispatch } = React.useContext(GlobalContext);

  return (
    <StyledAppBar>
      <p>Coinbase </p>
      {/* <button onClick={toggleThemeCallback}>toggle theme</button> */}
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
