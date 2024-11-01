import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";
import { SetStateAction } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../appSlices/store";

it("should load header", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header
          menuOpen={false}
          toggleButton={function (value: SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          }}
        />
      </BrowserRouter>
    </Provider>
  );

  const headerElement = screen.getByTestId("header-1");
  const headerText = screen.getByTestId("headerTitle-1");
  expect(headerElement).toBeInTheDocument();
  // expect(headerText).toBeInTheDocument();
  fireEvent.click(headerText);
  expect(screen.getByText("Hangboarding")).toBeInTheDocument();
});
