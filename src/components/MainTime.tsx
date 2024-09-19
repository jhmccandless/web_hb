import { secondsToTimeString } from "./_constants/sharedFunctions";

interface MainTimeProps {
  number: number;
  curAct: string;
  milliseconds: number;
}

function MainTime(props: MainTimeProps) {
  function mainSecondsToTimeString(sec: number): string {
    if (sec / 60 >= 1) {
      return secondsToTimeString(sec);
    } else {
      return sec.toString();
    }
  }

  function mainMillisecondsToString(milsec: number) {
    // if (milsec.toString().length > 3) {
    //   console.log("longer time", milsec, milsec.toString().length);
    //   console.log((milsec - 1).toString());
    // }
    if (milsec.toString().length <= 0) {
      return `000`;
    } else if (milsec.toString().length === 1) {
      return `00${milsec}`;
    } else if (milsec.toString().length === 2) {
      return `0${milsec}`;
    } else {
      return (milsec + 1).toString();
    }
  }

  return (
    <div className="main-timer-div">
      <div className="main-action">
        <p>{props.curAct.at(0)?.toUpperCase().concat(props.curAct.slice(1))}</p>
      </div>
      <div className="main-action-time">
        <p>
          {mainSecondsToTimeString(props.number)}:
          {mainMillisecondsToString(props.milliseconds)}
        </p>
      </div>
    </div>
  );
}

export default MainTime;
