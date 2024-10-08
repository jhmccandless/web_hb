import { useEffect, useState } from "react";
import MainTime from "./MainTime";
import { useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import RepeaterTimerDetails from "./RepeaterTimerDetails";
import OnOffTimerDetails from "./OnOffTimerDetails";
import { ITimeObject } from "./_constants/sharedInterfaces";
import { TIME_MILLISECONDS } from "./_constants/sharedConstants";
import StartButton from "./StartButton";

function WorkoutTimer() {
  const navigate = useNavigate();
  const timerDataState = useAppSelector((state) => state.timerInfo);
  //PO Does this selector need to be typed??

  const [timeArray, setTimeArray] = useState<(string | number)[][]>([]);
  const [currentAction, setCurrentAction] = useState<string>("Start In");
  const [currActTime, setCurrActTime] = useState<number>(
    timerDataState.timerTimes.delayStartTime
  );
  const [repsCounter, setRepsCounter] = useState<number>(
    timerDataState.timerTimes.repCount
  );
  const [setsCounter, setSetsCounter] = useState<number>(
    timerDataState.timerTimes.setCount
  );
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [nextAction, setNextAction] = useState<string>("Hang");
  const [totalWorkoutTime, setTotalWorkoutTime] = useState<number>(-1);
  const [milliseconds, setMilliseconds] = useState<number>(0);

  useEffect(() => {
    if (!timerDataState.timerType) {
      navigate("/");
    }
  });

  // ---Creates array to go through---
  function settingUpTimingInterval(obj: ITimeObject) {
    const finalArray = [];

    finalArray.push(["delay", obj.delayStartTime]); //starting interval means that second delay needs to be accounted for
    if (timerDataState.timerType === "repeaters") {
      for (let j = obj.setCount; j > 0; j--) {
        for (let i = obj.repCount; i > 0; i--) {
          if (i > 1) {
            finalArray.push(["hang", obj.hangTime]);
            finalArray.push(["off", obj.offTime, "repsMinusOne"]);
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
    }
    return finalArray;
  }

  //---- creates total time based on workout ------
  function getTotalTime(arr: any): number {
    arr.shift();
    const total = arr.reduce((acc: number, el: any) => acc + el.at(1), 0);
    return total - 1;
  }

  useEffect(() => {
    setTimeArray(settingUpTimingInterval(timerDataState.timerTimes));
    // setTotalWorkoutTime(getTotalTime(timeArray));
    // getTotalTime(timeArray);
    // eslint-disable-next-line
  }, [timerDataState]);

  useEffect(() => {
    if (totalWorkoutTime < 0) setTotalWorkoutTime(getTotalTime(timeArray));
  }, [timeArray, totalWorkoutTime]);

  function stringToTitle(str: string) {
    let tempString: string;
    if (str.includes("-")) {
      tempString = str
        .split("-")
        .map((el) => el.at(0)?.toUpperCase().concat(el.slice(1)))
        .join("-");
      return tempString;
    } else if (str.includes(" ")) {
      tempString = str
        .split(" ")
        .map((el) => el.at(0)?.toUpperCase().concat(el.slice(1)))
        .join(" ");
      return tempString;
    } else {
      // tempString = str.at(0).toUpperCase().concat(str.slice(1));
      return str;
    }
  }

  useEffect(() => {
    // ---Takes in an array of the times to do in sequence--
    let int1: ReturnType<typeof setInterval>;
    let int2: ReturnType<typeof setInterval>;
    let int3: ReturnType<typeof setInterval>;
    function timer1(arr: (string | number)[][]): void {
      let totalTimeCounter = totalWorkoutTime - 1;
      let arrayCounter: number = -1;
      let intervalTime: number = timerDataState.timerTimes.delayStartTime - 2;
      let tempRepsCounter: number = timerDataState.timerTimes.repCount - 1;
      let tempSetsCounter: number = timerDataState.timerTimes.setCount - 1;
      int1 = setInterval(() => {
        let timerStart = performance.now();
        int2 = setInterval(() => {
          let elapse = performance.now() - timerStart;
          setMilliseconds(1000 - Math.floor(elapse % 1000));
        });
        if (arrayCounter > 0) {
          setTotalWorkoutTime(totalTimeCounter--);
        }
        if (intervalTime > 1) {
          clearInterval(int3);
          setCurrActTime(intervalTime);
          intervalTime--;
        } else if (intervalTime === 1) {
          setCurrActTime(1);
          intervalTime--;
          arrayCounter++;
        } else if (intervalTime < 1) {
          intervalTime = Number(arr.at(arrayCounter)?.at(1)); //PO would this be ok for number typoing??
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
      }, TIME_MILLISECONDS);
    }
    if (!isPaused) {
      setCurrActTime(currActTime - 1);
      let timerStart = performance.now();
      int3 = setInterval(() => {
        let elapse = performance.now() - timerStart;
        setMilliseconds(1000 - Math.floor(elapse % 1000));
      }, 10);
      timer1(timeArray);
    }
    return () => {
      clearInterval(int1);
      clearInterval(int2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);

  return (
    <div className="timer-wrapper">
      <h2>{stringToTitle(timerDataState.timerType)}</h2>
      <StartButton isPaused={isPaused} setIsPaused={setIsPaused} />
      <MainTime
        number={currActTime}
        curAct={currentAction}
        milliseconds={milliseconds}
      />
      {timerDataState.timerType === "repeaters" && (
        <RepeaterTimerDetails
          currentAct={currentAction}
          actionTime={currActTime}
          timerState={timerDataState.timerTimes}
          repsCounter={repsCounter}
          setsCounter={setsCounter}
          nextAction={nextAction}
          totalWorkout={totalWorkoutTime}
        />
      )}
      {timerDataState.timerType === "on-off" && (
        <OnOffTimerDetails
          currentAct={currentAction}
          actionTime={currActTime}
          timerState={timerDataState.timerTimes}
          repsCounter={repsCounter}
          setsCounter={setsCounter}
          nextAction={nextAction}
          totalWorkout={totalWorkoutTime}
        />
      )}
    </div>
  );
}

export default WorkoutTimer;
