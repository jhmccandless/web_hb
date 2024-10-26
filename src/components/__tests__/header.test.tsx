import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { SetStateAction } from "react";

test("should render header", () => {
  render(
    <Header
      menuOpen={false}
      toggleButton={function (value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
  const headerElement = screen.getByTestId("header1");
});
