import IncrementCounter from "./IncrementCounter";
import IncrementTime from "./IncrementTime";

function RepeaterTimerDetails(props: any) {
  // console.log(props);
  return (
    <div className="timer-wrapper-details">
      <div className="timer-details-top">
        <IncrementTime
          action={"hang"}
          currentAct={props.currentAct}
          actionTime={props.actionTime}
          timerState={props.timerState.hangTime}
          stylingProp="timer-item-1-1"
        />

        <IncrementTime
          action={"off"}
          currentAct={props.currentAct}
          actionTime={props.actionTime}
          timerState={props.timerState.offTime}
          stylingProp="timer-item-1-2"
        />
        <IncrementTime
          action={"rest"}
          currentAct={props.currentAct}
          actionTime={props.actionTime}
          timerState={props.timerState.restTime}
          stylingProp="timer-item-1-3"
        />
      </div>
      <div className="timer-details-bottom">
        <IncrementCounter
          whichCounter={"reps"}
          stylingProp="timer-item-2-1 timer-item-left"
          counter={props.repsCounter}
        />
        <IncrementCounter
          whichCounter={"sets"}
          counter={props.setsCounter}
          stylingProp="timer-item-2-3 timer-item-right"
        />
      </div>
    </div>
  );
}

export default RepeaterTimerDetails;
