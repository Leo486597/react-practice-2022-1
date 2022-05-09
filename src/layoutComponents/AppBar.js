import React from "react";
import styled from "styled-components";
import { globalReducerActions, useGlobalContext } from "../useGlobalContext";

// const StyledAppBar = styled.div`
//   height: 100;
//   display: flex;
//   /* border: 1px solid black; */
//   justify-content: space-around;
// `;

export function AppBar() {
  const { dispatch, onClickCallback } = useGlobalContext();

  return (
    <div>
      <p>coinbase</p>
      <button
        onClick={() => {
          console.log("toggle button triggered!");
          dispatch({ type: globalReducerActions.toggleTheme });
        }}
      >
        toggle theme
      </button>

      <button onClick={onClickCallback}>toggle theme 2</button>
    </div>
  );
}
