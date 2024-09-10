import { TimerDetailsProps } from "./_constants/sharedInterfaces";
import IncrementCounter from "./IncrementCounter";
import IncrementTime from "./IncrementTime";

function RepeaterTimerDetails(props: TimerDetailsProps) {
  return (
    <div className="timer-wrapper-details">
      <div className="">
        <p>Next:</p>
        <p>
          {props.nextAction
            //Make this a function, been using this alot
            .at(0)
            ?.toUpperCase()
            .concat(props.nextAction.slice(1))}
        </p>
      </div>
      {/* <div className="">
        <p>Next:</p>
        <p>
          {props.nextAction
            //Make this a function, been using this alot
            .at(0)
            ?.toUpperCase()
            .concat(props.nextAction.slice(1))}
        </p>
      </div> */}
      <IncrementTime
        action={"hang"}
        currentAct={props.currentAct}
        actionTime={props.actionTime}
        timerState={props.timerState.hangTime}
        stylingProp="timer-item-2-1 timer-item-1-1-land"
      />
      <IncrementTime
        action={"off"}
        currentAct={props.currentAct}
        actionTime={props.actionTime}
        timerState={props.timerState.offTime}
        stylingProp="timer-item-2-2 timer-item-1-3-land"
      />
      <IncrementTime
        action={"rest"}
        currentAct={props.currentAct}
        actionTime={props.actionTime}
        timerState={props.timerState.restTime}
        stylingProp="timer-item-2-3 timer-item-1-2-land"
      />
      <IncrementCounter
        whichCounter={"reps"}
        stylingProp="timer-item-3-1 timer-item-left timer-item-2-2-land"
        counter={props.repsCounter}
      />
      <IncrementCounter
        whichCounter={"sets"}
        counter={props.setsCounter}
        stylingProp="timer-item-3-3 timer-item-right timer-item-3-3-land"
      />
    </div>
  );
}

export default RepeaterTimerDetails;
