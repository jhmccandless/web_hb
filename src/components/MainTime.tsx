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

  return (
    <div className="main-timer-div">
      <div className="main-action">
        <p>{props.curAct.at(0)?.toUpperCase().concat(props.curAct.slice(1))}</p>
      </div>
      <div className="main-action-time">
        <p>
          {mainSecondsToTimeString(props.number)}:{props.milliseconds}
        </p>
      </div>
    </div>
  );
}

export default MainTime;
