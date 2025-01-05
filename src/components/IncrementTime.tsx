import React from "react";
import { secondsToTimeString } from "./_constants/sharedFunctions";

interface IncrementTimeProps {
  action: string;
  currentAct: string;
  actionTime: number;
  timerState: number;
  stylingProp: string;
}

function IncrementTime(props: IncrementTimeProps) {
  return (
    <div data-testid="hangTestDiv" className={props.stylingProp}>
      <p data-testid="hangTestP1" style={{ margin: 0 }}>
        {props.action.at(0)?.toUpperCase().concat(props.action.slice(1))}:
      </p>
      <p data-testid="hangTestP2" style={{ margin: 0 }}>
        {props.currentAct === props.action
          ? secondsToTimeString(props.actionTime)
          : secondsToTimeString(props.timerState * 10)}
      </p>
    </div>
  );
}

export default IncrementTime;
