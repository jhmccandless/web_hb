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
    let roundedNum = Math.round(milsec / 100);
    if (roundedNum.toString().length > 1 || roundedNum.toString() === "NaN") {
      // console.log("not a number");
      // console.log(roundedNum);
      roundedNum = 9;
    }
    if (roundedNum.toString().length <= 0) {
      return `0`;
    } else {
      return roundedNum.toString();
    }
  }

  function mainTimerColor(act: string): string {
    if (act === "hang") {
      return "lightGreen";
    } else if (act === "off") {
      return "pink";
    } else {
      return "lightBlue";
    }
  }

  return (
    <div
      style={{ backgroundColor: mainTimerColor(props.curAct) }}
      className="main-timer-div"
    >
      <div className="main-action">
        <p>{props.curAct.at(0)?.toUpperCase().concat(props.curAct.slice(1))}</p>
      </div>
      <div className="main-action-time">
        <p style={{ fontSize: 70, textAlign: "right" }}>
          {mainSecondsToTimeString(props.number)}.
        </p>
        <p
          style={{
            fontSize: 50,
            textAlign: "left",
            bottom: 0,
            alignContent: "end",
            paddingBottom: "3px",
            paddingLeft: "3px",
          }}
        >
          {mainMillisecondsToString(props.milliseconds)}
        </p>
      </div>
    </div>
  );
}

export default MainTime;
