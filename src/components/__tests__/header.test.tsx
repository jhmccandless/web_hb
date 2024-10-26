import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { SetStateAction } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

test("should render header", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Header
          menuOpen={false}
          toggleButton={function (value: SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Routes>
    </BrowserRouter>
  );
  const headerElement = screen.getByTestId("header1");
});
