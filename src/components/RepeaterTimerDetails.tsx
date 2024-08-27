import IncrementCounter from "./IncrementCounter";
import IncrementTime from "./IncrementTime";

function RepeaterTimerDetails(props: any) {
  // console.log(props);
  return (
    <div className="timer-wrapper-details">
      <IncrementTime
        action={"hang"}
        currentAct={props.currentAct}
        actionTime={props.actionTime}
        timerState={props.timerState.hangTime}
        stylingProp="timer-item-1"
      />

      <IncrementTime
        action={"off"}
        currentAct={props.currentAct}
        actionTime={props.actionTime}
        timerState={props.timerState.offTime}
        stylingProp="timer-item-2"
      />

      <IncrementTime
        action={"rest"}
        currentAct={props.currentAct}
        actionTime={props.actionTime}
        timerState={props.timerState.restTime}
        stylingProp="timer-item-3"
      />
      <IncrementCounter
        whichCounter={"reps"}
        stylingProp="timer-item-3"
        counter={props.repsCounter}
      />
      <IncrementCounter
        whichCounter={"sets"}
        stylingProp="timer-item-3"
        counter={props.setsCounter}
      />
    </div>
  );
}

export default RepeaterTimerDetails;
