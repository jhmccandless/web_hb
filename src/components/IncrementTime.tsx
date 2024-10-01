import React from "react";
import { secondsToTimeString } from "./_constants/sharedFunctions";

interface IncrementTimeProps {
  action: string;
  currentAct: string;
  actionTime: number;
  timerState: number;
  stylingProp: string;
  nextAct: string;
}

function IncrementTime(props: IncrementTimeProps) {
  return (
    <div className={props.stylingProp}>
      <p>{props.nextAct.toLowerCase() === props.action ? "Next" : "--"}</p>
      <p style={{ margin: 0 }}>
        {props.action.at(0)?.toUpperCase().concat(props.action.slice(1))}:
      </p>
      <p style={{ margin: 0 }}>
        {props.currentAct === props.action
          ? secondsToTimeString(props.actionTime + 1)
          : secondsToTimeString(props.timerState)}
      </p>
    </div>
  );
}

export default IncrementTime;
