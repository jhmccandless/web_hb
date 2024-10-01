import { secondsToTimeString } from "./_constants/sharedFunctions";
import { TimerDetailsProps } from "./_constants/sharedInterfaces";
import IncrementCounter from "./IncrementCounter";
import IncrementTime from "./IncrementTime";

function OnOffTimerDetails(props: TimerDetailsProps) {
  return (
    <div className="timer-wrapper-details">
      <div className="timer-item-1-2-single timer-item-1-land-center">
        <p>Total Workout:</p>
        <p>{secondsToTimeString(props.totalWorkout)}</p>
      </div>
      <IncrementTime
        action={"hang"}
        currentAct={props.currentAct}
        actionTime={props.actionTime}
        timerState={props.timerState.hangTime}
        nextAct={props.nextAction}
        stylingProp="timer-item-2-1 timer-item-left timer-item-2-1-land"
      />
      <IncrementTime
        action={"rest"}
        currentAct={props.currentAct}
        actionTime={props.actionTime}
        timerState={props.timerState.restTime}
        nextAct={props.nextAction}
        stylingProp="timer-item-2-3 timer-item-right timer-item-2-3-land"
      />
      <IncrementCounter
        whichCounter={"sets"}
        counter={props.setsCounter}
        stylingProp="timer-item-3-2 timer-item-3-2-land"
      />
    </div>
  );
}

export default OnOffTimerDetails;
