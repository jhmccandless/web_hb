import { ITimeObject } from "./constants/sharedInterfaces";
import IncrementCounter from "./IncrementCounter";
import IncrementTime from "./IncrementTime";

interface RepeaterTimerDetailsProps {
  currentAct: string;
  actionTime: number;
  repsCounter: number;
  setsCounter: number;
  timerState: ITimeObject;
}

function RepeaterTimerDetails(props: RepeaterTimerDetailsProps) {
  return (
    <div className="timer-wrapper-details">
      <IncrementTime
        action={"hang"}
        currentAct={props.currentAct}
        actionTime={props.actionTime}
        timerState={props.timerState.hangTime}
        stylingProp="timer-item-1-1 timer-item-1-1-land"
      />
      <IncrementTime
        action={"off"}
        currentAct={props.currentAct}
        actionTime={props.actionTime}
        timerState={props.timerState.offTime}
        stylingProp="timer-item-1-2 timer-item-1-3-land"
      />
      <IncrementTime
        action={"rest"}
        currentAct={props.currentAct}
        actionTime={props.actionTime}
        timerState={props.timerState.restTime}
        stylingProp="timer-item-1-3 timer-item-1-2-land"
      />
      <IncrementCounter
        whichCounter={"reps"}
        stylingProp="timer-item-2-1 timer-item-left timer-item-2-2-land"
        counter={props.repsCounter}
      />
      <IncrementCounter
        whichCounter={"sets"}
        counter={props.setsCounter}
        stylingProp="timer-item-2-3 timer-item-right timer-item-3-3-land"
      />
    </div>
  );
}

export default RepeaterTimerDetails;
