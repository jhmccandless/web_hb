import { render, screen } from "@testing-library/react";
import IncrementTime from "./IncrementTime";

const mockData = {
  action: 'hang',
  currentAct: 'hang',
  actionTime: 12,
  timerState: 12,
  stylingProp: 'black',
}

test(" renders successfully", () => {
  render(<IncrementTime {...mockData}/>);
  const element = screen.getByText(/hang/i);
  expect(element).toBeInTheDocument();
})

test('')