import { useEffect, useState } from "react";

interface MainTimeProps {
  number: number;
  curAct: string;
  // milliseconds: number;
}

function MainTime(props: MainTimeProps) {
  const [minSec, setMinSec] = useState<string>();
  const [milliSec, setMilliSec] = useState<string>();
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
  function withMilliSeconds() {
    return (
      <div className="main-action-time-with-ms">
        <p style={{ justifySelf: "right", fontSize: "40px", alignSelf: "end" }}>
          {minSec}.
        </p>
        <p
          style={{
            justifySelf: "left",
            alignSelf: "end",
            paddingBottom: "2px",
            paddingLeft: "2px",
            fontSize: "25px",
          }}
        >
          {milliSec}
        </p>
      </div>
    );
  }

  function withoutMilliSecond() {
    return (
      <div className="main-action-time-no-ms">
        {/* <p style={{ justifySelf: "right" }}>12.</p> */}
        <p style={{ justifySelf: "center", fontSize: "40px" }}>{minSec}</p>
      </div>
    );
  }

  function mainSecondsToTimeString(sec: number) {
    const secArray = sec.toString().split("");
    const milliseconds = secArray.splice(-1);

    const dec = Number(secArray?.join("")) / 60;
    const minutes = Math.floor(dec);
    const seconds = Number(secArray?.join("")) - minutes * 60;

    //This if else block needs refactoring
    if (minutes > 0) {
      setMilliSec("");
      if (minutes.toString().length === 1) {
        if (seconds.toString().length < 2) {
          setMinSec(`${minutes}:0${seconds}`);
        } else {
          setMinSec(`${minutes}:${seconds}`);
        }
      } else if (minutes.toString().length === 2) {
        if (seconds.toString().length === 2) {
          setMinSec(`${minutes}:0${seconds}`);
        } else {
          setMinSec(`${minutes}:${seconds}`);
        }
      }
    } else {
      setMinSec(`${seconds}`);
      setMilliSec(`${milliseconds}`);
    }
  }

  useEffect(() => {
    mainSecondsToTimeString(props.number);
  });

  return (
    <div className="main-timer-div">
      <div className="main-action">
        <p>{props.curAct.at(0)?.toUpperCase().concat(props.curAct.slice(1))}</p>
      </div>
      {milliSec ? withMilliSeconds() : withoutMilliSecond()}
    </div>
  );
}

export default MainTime;
