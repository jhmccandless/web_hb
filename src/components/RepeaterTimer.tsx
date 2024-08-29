import { useEffect, useState } from "react";
import MainTime from "./MainTime";
import { useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import RepeaterTimerDetails from "./RepeaterTimerDetails";
import OnOffTimerDetails from "./OnOffTimerDetails";

export interface RepeaterTimerInt {
  hangTime: number;
  offTime: number;
  restTime: number;
  repCount: number;
  setCount: number;
  delayStartTime: number;
}

function RepeaterTimer() {
  const navigate = useNavigate();
  const timerDataState = useAppSelector((state: any) => state.timerInfo);

  const [timeArray, setTimeArray] = useState<(string | number)[][]>([]);
  const [currentAction, setCurrentAction] = useState<string>("delay");
  const [currActTime, setCurrActTime] = useState<number>(
    Number(timerDataState.timerTimes.delayStartTime)
  );
  const [repsCounter, setRepsCounter] = useState<number>(
    timerDataState.timerTimes.repCount
  );
  const [setsCounter, setSetsCounter] = useState<number>(
    timerDataState.timerTimes.setCount
  );
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [nextAction, setNextAction] = useState<string>("Hang");
  // console.log(timeArray);

  useEffect(() => {
    if (!timerDataState.timerType) {
      navigate("/");
    }
  });

  // ---Creates array to go through---
  function settingUpTimingInterval(obj: RepeaterTimerInt) {
    const finalArray = [];

    finalArray.push(["delay", obj.delayStartTime]); //starting interval means that second delay needs to be accounted for
    if (timerDataState.timerType === "repeaters") {
      for (let j = obj.setCount; j > 0; j--) {
        for (let i = obj.repCount; i > 0; i--) {
          if (i > 1) {
            // if (i > 3) {
            //   finalArray.push(["hang", obj.hangTime]);
            //   finalArray.push(["off", obj.offTime]);
            // }
            finalArray.push(["hang", obj.hangTime]);
            finalArray.push(["off", obj.offTime, "repsMinusOne"]);
          } else {
            finalArray.push(["hang", obj.hangTime]);
          }
          // if (i === obj.repCount) {
          //   finalArray.push(["hang", obj.hangTime]);
          //   finalArray.push(["off", obj.offTime]);
          // } else if (i > 1 && i < obj.repCount) {
          //   // if (i > 3) {
          //   //   finalArray.push(["hang", obj.hangTime]);
          //   //   finalArray.push(["off", obj.offTime]);
          //   // }
          //   finalArray.push(["hang", obj.hangTime, "repsMinusOne"]);
          //   finalArray.push(["off", obj.offTime]);
          // } else {
          //   finalArray.push(["hang", obj.hangTime, "repsMinusOne"]);
          // }
        }
        if (j > 1) {
          finalArray.push(["rest", obj.restTime]);
        }
      }
    } else if (timerDataState.timerType === "on-off") {
      for (let i = obj.setCount; i > 0; i--) {
        if (i > 1) {
          finalArray.push(["hang", obj.hangTime]);
          if (obj.offTime !== -1) {
            finalArray.push(["off", obj.offTime]);
          }
          finalArray.push(["rest", obj.restTime]);
        } else {
          finalArray.push(["hang", obj.hangTime]);
        }
      }
    } else if (timerDataState.timerType === "circuit") {
      console.log("circuit");
      for (let j = obj.setCount; j > 0; j--) {
        for (let i = obj.repCount; i > 0; i--) {
          finalArray.push(["hang", obj.hangTime]);
        }
        if (j > 1) {
          finalArray.push(["rest", obj.restTime]);
        }
      }
    }

    // console.log(finalArray);
    return finalArray;
  }

  useEffect(() => {
    const timerDataStateNumbers: any = {};
    Object.entries(timerDataState.timerTimes).forEach(([key, val]) => {
      timerDataStateNumbers[key] = Number(val);
    });
    setTimeArray(settingUpTimingInterval(timerDataStateNumbers));
    // eslint-disable-next-line
  }, [timerDataState]);

  useEffect(() => {
    // ---Takes in an array of the times to do in sequence--
    let int1: any;
    function timer1(arr: (string | number)[][]): void {
      let arrayCounter: number = 0;
      let intervalTime: any =
        Number(timerDataState.timerTimes.delayStartTime) - 1;
      let tempRepsCounter: number = timerDataState.timerTimes.repCount - 1;
      let tempSetsCounter: number = timerDataState.timerTimes.setCount - 1;
      int1 = setInterval(() => {
        if (intervalTime > 1) {
          // console.log('else');
          setCurrActTime(intervalTime);
          intervalTime--;
        } else if (intervalTime === 1) {
          console.log("if");
          setCurrActTime(1);
          intervalTime--;
          arrayCounter++;
        } else if (intervalTime < 1) {
          intervalTime = arr.at(arrayCounter)?.at(1);
          setCurrActTime(arr.at(arrayCounter)?.at(1) as number);
          setCurrentAction(arr.at(arrayCounter)?.at(0) as string);
          setNextAction(
            (arr.at(arrayCounter + 1)?.at(0) as string) || "Finished!"
          );
          if (intervalTime > 1) {
            intervalTime--;
          }
          if (arr.at(arrayCounter)?.at(2)) {
            setRepsCounter(tempRepsCounter--);
          }
          if (arr.at(arrayCounter)?.at(0) === "rest") {
            tempRepsCounter = timerDataState.timerTimes.repCount;
            setRepsCounter(tempRepsCounter);
            setSetsCounter(tempSetsCounter--);
          }
          if (arrayCounter === arr.length - 1) {
            clearInterval(int1);
          }
        }
      }, 500);
    }
    if (!isPaused) {
      timer1(timeArray);
    }
    return () => {
      clearInterval(int1);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);

  return (
    <div className="timer-wrapper">
      <button
        className="timer-start-button"
        onClick={() => {
          setIsPaused(!isPaused);
        }}
      >
        Start Timer
      </button>
      <MainTime
        number={currActTime}
        curAct={currentAction}
        nextAction={nextAction}
      />
      {timerDataState.timerType === "repeaters" && (
        <RepeaterTimerDetails
          currentAct={currentAction}
          actionTime={currActTime}
          timerState={timerDataState.timerTimes}
          repsCounter={repsCounter}
          setsCounter={setsCounter}
        />
      )}
      {timerDataState.timerType === "on-off" && (
        <OnOffTimerDetails
          currentAct={currentAction}
          actionTime={currActTime}
          timerState={timerDataState.timerTimes}
          repsCounter={repsCounter}
          setsCounter={setsCounter}
        />
      )}
      {/* <p>{repsCounter}</p>
      <p>{setsCounter}</p> */}
      {/* <IncrementTime
        action={"hang"}
        currentAct={currentAction}
        actionTime={currActTime}
        timerState={timerDataState.timerTimes.hangTime}
        stylingProp="timer-item-1"
      />

      <IncrementTime
        action={"off"}
        currentAct={currentAction}
        actionTime={currActTime}
        timerState={timerDataState.timerTimes.offTime}
        stylingProp="timer-item-2"
      />

      <IncrementTime
        action={"rest"}
        currentAct={currentAction}
        actionTime={currActTime}
        timerState={timerDataState.timerTimes.restTime}
        stylingProp="timer-item-3"
      /> */}
    </div>
  );
}

export default RepeaterTimer;
