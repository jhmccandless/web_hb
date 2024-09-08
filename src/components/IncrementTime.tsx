import React from "react";
import { secondsToTimeString } from "./constants/sharedFunctions";

interface IncrementTimeProps {
  action: string;
  currentAct: string;
  actionTime: number;
  timerState: number;
  stylingProp: string;
}

function IncrementTime(props: IncrementTimeProps) {
  return (
    <div className={props.stylingProp}>
      <p style={{ margin: 0 }}>
        {props.action.at(0)?.toUpperCase().concat(props.action.slice(1))}:
      </p>
      <p style={{ margin: 0 }}>
        {props.currentAct === props.action
          ? secondsToTimeString(props.actionTime)
          : secondsToTimeString(props.timerState)}
      </p>
    </div>
  );
}

export default IncrementTime;
