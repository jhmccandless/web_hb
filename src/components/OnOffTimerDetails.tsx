import { TimerDetailsProps } from "./_constants/sharedInterfaces";
import IncrementCounter from "./IncrementCounter";
import IncrementTime from "./IncrementTime";

function OnOffTimerDetails(props: TimerDetailsProps) {
  return (
    <div className="timer-wrapper-details">
      <IncrementTime
        action={"hang"}
        currentAct={props.currentAct}
        actionTime={props.actionTime}
        timerState={props.timerState.hangTime}
        stylingProp="timer-item-1-1 timer-item-left timer-item-1-1-land"
      />
      <IncrementTime
        action={"rest"}
        currentAct={props.currentAct}
        actionTime={props.actionTime}
        timerState={props.timerState.restTime}
        stylingProp="timer-item-1-3 timer-item-right timer-item-1-3-land"
      />
      <IncrementCounter
        whichCounter={"sets"}
        counter={props.setsCounter}
        stylingProp="timer-item-2-2 timer-item-2-2-land"
      />
    </div>
  );
}

export default OnOffTimerDetails;
