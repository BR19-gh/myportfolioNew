import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import NewQuestion from "./NewQuestion";

describe("NewQuestion", () => {
  it("should render the component", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewQuestion />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it("should display all elements", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewQuestion />
        </BrowserRouter>
      </Provider>
    );

    const firstOptionLabelElement = component.getByTestId("firstOptionLabel");
    const firstOptionInputElement = component.getByTestId("firstOption");
    const secondOptionLabelElement = component.getByTestId("secondOptionLabel");
    const secondOptionInputElement = component.getByTestId("secondOption");
    const submitButtonElement = component.getByTestId("submitQuestion");

    expect(firstOptionLabelElement.textContent).toBe("First Option");
    expect(secondOptionLabelElement.textContent).toBe("Second Option");
    expect(submitButtonElement.textContent).toBe("Submit");

    fireEvent.change(firstOptionInputElement, {
      target: { value: "have a pizza party" },
    });
    fireEvent.change(secondOptionInputElement, {
      target: { value: "have a promotion" },
    });
    expect(firstOptionInputElement.value).toBe("have a pizza party");
    expect(secondOptionInputElement.value).toBe("have a promotion");
  });
});
