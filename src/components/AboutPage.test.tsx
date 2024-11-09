import { render, screen } from "@testing-library/react";
import AboutPage from "./AboutPage";

// test("should render header component", () => {
//   render(<AboutPage />);
//   const aboutpageElement = screen.getByTestId("aboutpage-1");
//   // expect(aboutpageElement).toBeInTheDocument();  //could be redundant
//   expect(aboutpageElement).toHaveTextContent("pho");
// });
test("should render header component", () => {
  render(<AboutPage />);
  const aboutpageElement = screen.getByTestId("aboutpage-1");
  // expect(aboutpageElement).toBeInTheDocument();  //could be redundant
  expect(aboutpageElement).toHaveTextContent("pho");
});
