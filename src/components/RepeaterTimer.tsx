import React, { useEffect, useState } from "react";
import MainTime from "./MainTime";
import { useAppSelector } from "./hooks";
import IncrementTime from "./IncrementTime";

export interface RepeaterTimerInt {
  hangTime: number;
  offTime: number;
  restTime: number;
  repCount: number;
  setCount: number;
  delayStartTime: number;
}

function RepeaterTimer() {
  const timerDataState = useAppSelector((state: any) => state.timerInfo);

  const [timeArray, setTimeArray] = useState<(string | number)[][]>([]);
  const [currentAction, setCurrentAction] = useState<string>("rest");
  const [currActTime, setCurrActTime] = useState<number>(
    Number(timerDataState.timerTimes.delayStartTime)
  );
  const [isPaused, setIsPaused] = useState(true);
  // console.log(timeArray);

  useEffect(() => {}, []);

  // ---Creates array to go through---
  function settingUpTimingInterval(obj: RepeaterTimerInt) {
    const finalArray = [];

    finalArray.push(["rest", obj.delayStartTime]); //starting interval means that second delay needs to be accounted for
    if (timerDataState.timerType === "repeaters") {
      for (let j = obj.setCount; j > 0; j--) {
        for (let i = obj.repCount; i > 0; i--) {
          if (i > 1) {
            finalArray.push(["hang", obj.hangTime]);
            finalArray.push(["off", obj.offTime]);
          } else {
            finalArray.push(["hang", obj.hangTime]);
          }
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
  console.log(timeArray);

  useEffect(() => {
    const timerDataStateNumbers: any = {};
    Object.entries(timerDataState.timerTimes).forEach(([key, val]) => {
      timerDataStateNumbers[key] = Number(val);
    });
    setTimeArray(settingUpTimingInterval(timerDataStateNumbers));
  }, [timerDataState]);

  useEffect(() => {
    // ---Takes in an array of the times to do in sequence--
    function timer1(arr: (string | number)[][]): void {
      let arrayCounter: number = 0;
      let intervalTime: any =
        Number(timerDataState.timerTimes.delayStartTime) - 1;

      const int1 = setInterval(() => {
        if (intervalTime > 1) {
          // console.log('else');
          setCurrActTime(intervalTime);
          intervalTime--;
        } else if (intervalTime === 1) {
          // console.log('if');
          setCurrActTime(1);
          intervalTime--;
          arrayCounter++;
        } else if (intervalTime < 1) {
          intervalTime = arr.at(arrayCounter)?.at(1);
          setCurrActTime(arr.at(arrayCounter)?.at(1) as number);
          setCurrentAction(arr.at(arrayCounter)?.at(0) as string);
          intervalTime--;
          if (arrayCounter === arr.length - 1) {
            clearInterval(int1);
          }
        }
      }, 500);
    }
    if (!isPaused) {
      timer1(timeArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);

  return (
    <div className="timer-wrapper">
      <button
        className="timer-start-button form-button"
        onClick={() => {
          setIsPaused(!isPaused);
        }}
      >
        Start Timer
      </button>
      <MainTime number={currActTime} curAct={currentAction} />
      <IncrementTime
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
      />
    </div>
  );
}

export default RepeaterTimer;
