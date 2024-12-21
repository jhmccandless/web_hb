import { render, screen } from "@testing-library/react";
import IncrementTime from "./IncrementTime";

const mockData = {
  action: "hang",
  currentAct: "hang",
  actionTime: 12,
  timerState: 12,
  stylingProp: "black",
};
describe("incrementtime", () => {
  render(<IncrementTime {...mockData} />);

  test("Action renders successfully", () => {
    const element = screen.getByText(/hang/i);
    expect(element).toBeInTheDocument();
  });

  test("time renders successfully", () => {});
});
