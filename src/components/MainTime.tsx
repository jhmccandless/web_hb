import React from "react";
import { secondsToTimeString } from "./IncrementTime";

interface MainTimeInterface {
  number: number;
  curAct: string;
  nextAction: string;
}

function MainTime(props: MainTimeInterface) {
  function mainSecondsToTimeString(sec: number) {
    if (sec / 60 >= 1) {
      return secondsToTimeString(sec);
    } else {
      return sec;
    }
  }

  return (
    <div className="main-timer-div">
      <div className="main-action">
        <p>{props.curAct.at(0)?.toUpperCase().concat(props.curAct.slice(1))}</p>
      </div>
      <div className="main-action-time">
        <p>{mainSecondsToTimeString(props.number)}</p>
      </div>
      <div className="next-action">
        <p>Next:</p>
        <p>
          {props.nextAction
            //Make this a function, been using this alot
            .at(0)
            ?.toUpperCase()
            .concat(props.nextAction.slice(1))}
        </p>
      </div>
    </div>
  );
}

export default MainTime;
