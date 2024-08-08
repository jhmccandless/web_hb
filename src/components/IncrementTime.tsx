import React from "react";

interface IncrementTimeInt {
  action: string;
  currentAct: string;
  actionTime: number;
  timerState: string;
  stylingProp: string;
}

function IncrementTime(props: IncrementTimeInt) {
  return (
    <div className={props.stylingProp}>
      <p>
        {props.action.at(0)?.toUpperCase().concat(props.action.slice(1))}:{" "}
        {props.currentAct === props.action
          ? props.actionTime
          : props.timerState}
      </p>
    </div>
  );
}

export default IncrementTime;
