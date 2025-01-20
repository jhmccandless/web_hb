import React, { useMemo } from "react";
import { secondsToTimeString } from "./_constants/sharedFunctions";

interface IncrementTimeProps {
  action: string;
  currentAct: string;
  actionTime: number;
  timerState: number;
  stylingProp: string;
}

function IncrementTime(props: IncrementTimeProps) {
  const incrementalTitle = useMemo(
    () => props.action?.at(0)?.toUpperCase().concat(props.action.slice(1)),
    [props.action]
  );

  const useActionTime = useMemo(
    () => secondsToTimeString(props.actionTime),
    [props.actionTime]
  );

  const useTimerStateMod = useMemo(
    () => secondsToTimeString(props.timerState * 10),
    [props.timerState]
  );

  const whichTimeToUse =
    props.currentAct === props.action ? useActionTime : useTimerStateMod;

  return (
    <div data-testid="inc-timer-div" className={props.stylingProp}>
      <p data-testid="inc-timer-title" style={{ margin: 0 }}>
        {incrementalTitle}:
      </p>
      <p data-testid="inc-timer-time" style={{ margin: 0 }}>
        {whichTimeToUse}
      </p>
    </div>
  );
}

export default IncrementTime;
