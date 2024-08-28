import React from "react";

interface IncrementTimeInt {
  action: string;
  currentAct: string;
  actionTime: number;
  timerState: string;
  stylingProp: string;
}

export function secondsToTimeString(sec: number) {
  const dec = sec / 60;
  const minutes = Math.floor(dec);
  const seconds = sec - minutes * 60;
  if (minutes.toString().length < 2) {
    if (seconds.toString().length < 2) {
      return `0${minutes}:0${seconds}`;
    }
    return `0${minutes}:${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function IncrementTime(props: IncrementTimeInt) {
  return (
    <div className={props.stylingProp}>
      <p style={{ margin: 0 }}>
        {props.action.at(0)?.toUpperCase().concat(props.action.slice(1))}:
      </p>
      <p style={{ margin: 0 }}>
        {props.currentAct === props.action
          ? secondsToTimeString(props.actionTime)
          : //Fix the number here, refactor
            secondsToTimeString(Number(props.timerState))}
      </p>
    </div>
  );
}

export default IncrementTime;
