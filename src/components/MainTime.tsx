import React from "react";
import { secondsToTimeString } from "./IncrementTime";

interface MainTimeInterface {
  number: number;
  curAct: string;
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
      <p>{mainSecondsToTimeString(props.number)}</p>
    </div>
  );
}

export default MainTime;
