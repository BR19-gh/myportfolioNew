import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import { handleInitialData } from "../actions/shared";
import "jest-localstorage-mock";

window.alert = jest.fn();

describe("Login", () => {
  it("should render the component", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should clear input elements after clicking submit button", async () => {
    await store.dispatch(handleInitialData());

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const usernameInputElement = screen.getByTestId("username");
    const passwordInputElement = screen.getByTestId("password");
    const loginButtonElement = screen.getByTestId("LoginBtn");

    expect(usernameInputElement.value).toBe("");
    expect(passwordInputElement.value).toBe("");

    fireEvent.change(usernameInputElement, { target: { value: "br19" } });
    fireEvent.change(passwordInputElement, {
      target: { value: "password123" },
    });

    expect(usernameInputElement.value).toBe("br19");
    expect(passwordInputElement.value).toBe("password123");

    fireEvent.click(loginButtonElement);

    expect(usernameInputElement.value).toBe("");
    expect(passwordInputElement.value).toBe("");
  });
});
