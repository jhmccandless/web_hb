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

describe("incrementtime", () => {
  test("action div renders successfully", () => {
    render(<IncrementTime {...mockProps1} />);
    // const element = screen.getByText(/hang/i);
    const element = screen.getByTestId("hangTestDiv");
    expect(element).toBeInTheDocument();
  });
  test("action title renders", () => {
    render(<IncrementTime {...mockProps1} />);
    const { getByText } = within(screen.getByTestId("hangTestP1"));
    expect(
      getByText(
        `${mockProps1.action
          .at(0)
          ?.toUpperCase()
          .concat(mockProps1.action.slice(1))}:`
      )
    ).toBeInTheDocument();
  });
  test("curr act equals props.action", () => {
    render(<IncrementTime {...mockProps1} />);
    const { getByText } = within(screen.getByTestId("hangTestP2"));
    expect(
      getByText(secondsToTimeString(mockProps1.actionTime))
    ).toBeInTheDocument();
  });
  test("curr act does not equal props.action", () => {
    render(<IncrementTime {...mockProps2} />);
    const { getByText } = within(screen.getByTestId("hangTestP2"));
    expect(
      getByText(secondsToTimeString(mockProps2.timerState * 10))
    ).toBeInTheDocument();
  });
});
