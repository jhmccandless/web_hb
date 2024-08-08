import React from "react";

interface MainTimeInterface {
  number: number;
  curAct: string;
}

function MainTime(props: MainTimeInterface) {
  return (
    <div className="main-timer-div">
      <p>{props.number}</p>
    </div>
  );
}

export default MainTime;
