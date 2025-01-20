import { render, screen, within } from "@testing-library/react";
import IncrementTime from "./IncrementTime";
import { secondsToTimeString } from "./_constants/sharedFunctions";

const mockProps1 = {
  action: "hang",
  currentAct: "hang",
  actionTime: 12,
  timerState: 12,
  stylingProp: "black",
};

const mockProps2 = {
  action: "fall",
  currentAct: "hang",
  actionTime: 12,
  timerState: 120,
  stylingProp: "black",
};

describe("IncrementTime", () => {
  test("should styling prop be passed down", () => {
    render(<IncrementTime {...mockProps1} />);
    // const element = screen.getByText(/hang/i);
    const element = screen.getByTestId("inc-timer-div");
    expect(element).toHaveClass("black");
  });
  test("should action title renders", () => {
    render(<IncrementTime {...mockProps1} />);
    expect(screen.getByTestId("inc-timer-title")).toHaveTextContent("Hang:");
    // checks whole document, not just desired element (if this is in, so is the div)
  });
  test("should current action text equals props.action text", () => {
    render(<IncrementTime {...mockProps1} />);
    const { getByText } = within(screen.getByTestId("inc-timer-time"));
    expect(
      getByText(secondsToTimeString(mockProps1.actionTime))
    ).toBeInTheDocument();
  });
  test("should curr action text does NOT equal props.action text", () => {
    render(<IncrementTime {...mockProps2} />);
    const { getByText } = within(screen.getByTestId("inc-timer-time"));
    expect(
      getByText(secondsToTimeString(mockProps2.timerState * 10))
    ).toBeInTheDocument();
  });
});

// all tests shouuld have "should" for the start of the test title DONE
// test ids should be more informative - readible and understandable DONE

//style props test DONE
// combine tests together DONE
//momoize the two funciton in the ternery function
