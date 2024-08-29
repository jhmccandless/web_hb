import IncrementCounter from "./IncrementCounter";
import IncrementTime from "./IncrementTime";

function RepeaterTimerDetails(props: any) {
  // console.log(props);
  return (
    <div className="timer-wrapper-details">
      {/* <div className="timer-details-top"> */}
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
      {/* </div> */}
      {/* <div className="timer-details-bottom timer-item-2-2-land"> */}
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
      {/* </div> */}
    </div>
  );
}

export default RepeaterTimerDetails;
