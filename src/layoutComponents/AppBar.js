import React from "react";
import styled from "styled-components";
import { globalReducerActions, useGlobalContext } from "../useGlobalContext";

const StyledAppBar = styled.div`
  height: 100;
  display: flex;
  /* border: 1px solid black; */
  justify-content: space-around;
`;

export function AppBar() {
  const { dispatch } = useGlobalContext();

  return (
    <StyledAppBar>
      <p>Coinbase </p>
      <button
        onClick={() => {
          dispatch({ type: globalReducerActions.toggleTheme });
        }}
      >
        toggle theme
      </button>
    </StyledAppBar>
  );
}
