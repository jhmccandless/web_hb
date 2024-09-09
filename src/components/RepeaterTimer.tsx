import { useEffect, useState } from "react";
import MainTime from "./MainTime";
import { useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import RepeaterTimerDetails from "./RepeaterTimerDetails";
import OnOffTimerDetails from "./OnOffTimerDetails";
import { ITimeObject } from "./_constants/sharedInterfaces";
import { TIME_MILLISECONDS } from "./_constants/sharedConstants";
import StartButton from "./StartButton";

function RepeaterTimer() {
  const navigate = useNavigate();
  const timerDataState = useAppSelector((state) => state.timerInfo);
  //PO Does this selector need to be typed??

  console.log(timerDataState);

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
    }
    return finalArray;
  }

  useEffect(() => {
    setTimeArray(settingUpTimingInterval(timerDataState.timerTimes));
    // eslint-disable-next-line
  }, [timerDataState]);

  useEffect(() => {
    // ---Takes in an array of the times to do in sequence--
    let int1: ReturnType<typeof setInterval>;
    function timer1(arr: (string | number)[][]): void {
      let arrayCounter: number = 0;
      let intervalTime: number = timerDataState.timerTimes.delayStartTime - 1;
      let tempRepsCounter: number = timerDataState.timerTimes.repCount - 1;
      let tempSetsCounter: number = timerDataState.timerTimes.setCount - 1;
      int1 = setInterval(() => {
        if (intervalTime > 1) {
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
      timer1(timeArray);
    }
    return () => {
      clearInterval(int1);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);

  return (
    <div className="timer-wrapper">
      <StartButton isPaused={isPaused} setIsPaused={setIsPaused} />
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
    </div>
  );
}

export default RepeaterTimer;
