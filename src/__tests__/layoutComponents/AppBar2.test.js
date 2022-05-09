import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AppBar } from "../../layoutComponents/AppBar";
import userEvent from "@testing-library/user-event";
import { globalReducerActions } from "../../useGlobalContext";
import { act } from "react-dom/test-utils";

// common practice for using testing-library
// https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

// test custom React hooks
// https://kentcdodds.com/blog/how-to-test-custom-react-hooks

// how to mock useContext
// https://medium.com/@whitewoodcc/mocking-react-context-in-consumer-component-fb384234a573
let mockDispatch = jest.fn();
let onClickCallback = jest.fn();
beforeAll(() => {
  // mock the context
  const mockContext = jest.spyOn(React, "useContext");
  mockDispatch = jest.fn();
  mockContext.mockReturnValue({ dispatch: mockDispatch, onClickCallback });
});

// test("AppBar component should contain the Company name", () => {
//   render(<AppBar />);
//   expect(screen.getByText(/coinbase/)).toBeTruthy();
// });

// test("AppBar component should contain a toggle theme button", () => {
//   render(<AppBar />);
//   expect(screen.getByRole("button", /toggle theme/).closest("button")).toBeTruthy();
// });

test("The toggle button will dispatch a toggle action when invoked", () => {
  render(<AppBar />);

  fireEvent.click(screen.getByText(/^toggle theme$/));
  // fireEvent.click(screen.getByRole("button", /toggle theme/));
  expect(mockDispatch).toHaveBeenCalledWith({
    type: globalReducerActions.toggleTheme
  });

  // expect(mockDispatch).toHaveBeenCalledTimes(1);
});

// test("The toggle button 2 will dispatch a toggle action when invoked", () => {
//   render(<AppBar />);

//   fireEvent.click(screen.getByText(/toggle theme 2/));
//   // fireEvent.click(screen.getByRole("button", /toggle theme/));
//   // expect(mockDispatch).toHaveBeenCalledWith({
//   //   type: globalReducerActions.toggleTheme
//   // });

//   expect(onClickCallback).toBeCalled()

//   // userEvent.click(screen.getByText(/toggle theme 2/))
// });
