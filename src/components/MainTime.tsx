import { secondsToTimeString } from "./_constants/sharedFunctions";

interface MainTimeProps {
  number: number;
  curAct: string;
  // milliseconds: number;
}

function MainTime(props: MainTimeProps) {
  // function mainSecondsToTimeString(sec: number): string {
  //   if (sec / 60 >= 1) {
  //     return secondsToTimeString(sec);
  //   } else {
  //     return sec.toString();
  //   }
  // }

  // function mainMillisecondsToString(milsec: number) {
  //   let roundedNum = Math.round(milsec / 10);
  //   if (roundedNum.toString().length > 2 || roundedNum.toString() === "NaN") {
  //     // console.log("not a number");
  //     // console.log(roundedNum);
  //     roundedNum = 99;
  //   }
  //   if (roundedNum.toString().length <= 0) {
  //     return `00`;
  //   } else if (roundedNum.toString().length === 1) {
  //     return `0${roundedNum}`;
  //   } else {
  //     return roundedNum.toString();
  //   }
  // }

  // function mainMillisecondsToString2(milsec: number) {
  //   return milsec;
  // }
  function secondsToTimeString(sec: number): string {
    const secArray = sec.toString().split("");
    const milliseconds = secArray.splice(-1);

    const dec = Number(secArray?.join("")) / 60;
    const minutes = Math.floor(dec);
    const seconds = Number(secArray?.join("")) - minutes * 60;

    if (minutes > 0) {
      if (minutes.toString().length === 1) {
        if (seconds.toString().length < 2) {
          return `0${minutes}:0${seconds}`;
        }
        return `0${minutes}:${seconds}`;
      } else if (minutes.toString().length < 2) {
        if (seconds.toString().length === 2) {
          return `${minutes}:0${seconds}`;
        }
        return `${minutes}:${seconds}`;
      }
    } else {
      if (seconds.toString().length < 2) {
        return `${seconds}:${milliseconds}`;
      }
      return `${seconds}:${milliseconds}`;
    }
    return "";
  }

  return (
    <div className="main-timer-div">
      <div className="main-action">
        <p>{props.curAct.at(0)?.toUpperCase().concat(props.curAct.slice(1))}</p>
      </div>
      <div className="main-action-time">
        <p>
          {/* {mainSecondsToTimeString(props.number)}:
          {mainMillisecondsToString(props.milliseconds)} */}
          {secondsToTimeString(props.number)}
        </p>
      </div>
    </div>
  );
}

export default MainTime;
