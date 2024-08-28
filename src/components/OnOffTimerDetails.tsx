import IncrementCounter from "./IncrementCounter";
import IncrementTime from "./IncrementTime";

function OnOffTimerDetails(props: any) {
  // console.log(props);
  return (
    <div className="timer-wrapper-details">
      <div className="timer-details-top-repeater">
        <IncrementTime
          action={"hang"}
          currentAct={props.currentAct}
          actionTime={props.actionTime}
          timerState={props.timerState.hangTime}
          stylingProp="timer-item-1-1 timer-item-left"
        />

        {/* <IncrementTime
          action={"off"}
          currentAct={props.currentAct}
          actionTime={props.actionTime}
          timerState={props.timerState.offTime}
          stylingProp="timer-item-1-2"
        /> */}
        <IncrementTime
          action={"rest"}
          currentAct={props.currentAct}
          actionTime={props.actionTime}
          timerState={props.timerState.restTime}
          stylingProp="timer-item-1-3 timer-item-right"
        />
      </div>
      <div className="timer-details-bottom-repeater">
        {/* <IncrementCounter
          whichCounter={"reps"}
          stylingProp="timer-item-2-1"
          counter={props.repsCounter}
        /> */}
        <IncrementCounter
          whichCounter={"sets"}
          counter={props.setsCounter}
          // stylingProp="timer-item-2-2"
        />
      </div>
    </div>
  );
}

export default OnOffTimerDetails;
