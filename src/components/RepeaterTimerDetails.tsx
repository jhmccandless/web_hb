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
      {/* <IncrementCounter
        action={"reps"}
        currentAct={props.currentAction}
        actionTime={props.currActTime}
        timerState={props.timerState.repCount}
        currentSets={props.currentSets}
        currentReps={props.currentReps}
        stylingProp="timer-item-3"
      /> */}
      {/* <IncrementCounter
        action={"sets"}
        currentAct={props.currentAction}
        actionTime={props.currActTime}
        timerState={props.timerState.setCount}
        stylingProp="timer-item-3"
      /> */}
    </div>
  );
}

export default RepeaterTimerDetails;
