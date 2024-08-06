import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MainTime from "./MainTime";
import { useAppSelector } from "../../hooks";
import IncrementTime from "./IncrementTime";

// import type {NativeStackScreenProps} from '@react-navigation/native-stack';

// type RootStackParamList = {
//   Form: undefined;
//   Workout: undefined;
// };

export interface Timer3UIInt {
  hangTime: number;
  offTime: number;
  restTime: number;
  repCount: number;
  setCount: number;
  delayStartTime: number;
}
// type Props = NativeStackScreenProps<RootStackParamList, 'Workout'>;

function Timer3UI() {
  // let timeArray: React.MutableRefObject<(string | number)[][]> = useRef(
  //   settingUpTimingInterval(props),
  // );

  const timerDataState = useAppSelector((state) => state.timerInfo);

  const [timeArray, setTimeArray] = useState<(string | number)[][]>([]);
  const [currentAction, setCurrentAction] = useState<string>("rest");
  const [currActTime, setCurrActTime] = useState<number>(
    Number(timerDataState.delayStartTime)
  );
  const [isPaused, setIsPaused] = useState(true);
  // console.log(timeArray);

  useEffect(() => {}, []);

  // ---Creates array to go through---
  function settingUpTimingInterval(obj: Timer3UIInt) {
    const finalArray = [];

    finalArray.push(["rest", obj.delayStartTime]); //starting interval means that second delay needs to be accounted for
    for (let j = obj.repCount; j > 0; j--) {
      for (let i = obj.setCount; i > 0; i--) {
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
    // console.log(finalArray);
    return finalArray;
  }
  // console.log(timeArray);

  useEffect(() => {
    const timerDataStateNumbers: any = {};
    Object.entries(timerDataState).forEach(([key, val]) => {
      timerDataStateNumbers[key] = Number(val);
    });
    setTimeArray(settingUpTimingInterval(timerDataStateNumbers));
  }, [timerDataState]);

  useEffect(() => {
    // ---Takes in an array of the times to do in sequence--
    function timer1(arr: (string | number)[][]): void {
      let arrayCounter: number = 0;
      let intervalTime: any = Number(timerDataState.delayStartTime) - 1;

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
    <>
      <Button
        title="Start"
        onPress={() => {
          setIsPaused(!isPaused);
        }}
      />
      <MainTime number={currActTime} curAct={currentAction} />
      <View style={styles.container}>
        {/* <Text style={styles.items}>
          Hang:{" "}
          {currentAction === "hang" ? currActTime : timerDataState.hangTime}
        </Text>
        <Text style={styles.items}>
          Off: {currentAction === "off" ? currActTime : timerDataState.offTime}
        </Text>
        <Text style={styles.items}>
          Rest:{" "}
          {currentAction === "rest" ? currActTime : timerDataState.restTime}
        </Text> */}
        <IncrementTime
          action={"hang"}
          currentAct={currentAction}
          actionTime={currActTime}
          timerState={timerDataState.hangTime}
        />
        <IncrementTime
          action={"off"}
          currentAct={currentAction}
          actionTime={currActTime}
          timerState={timerDataState.offTime}
        />
        <IncrementTime
          action={"rest"}
          currentAct={currentAction}
          actionTime={currActTime}
          timerState={timerDataState.restTime}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "15%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Timer3UI;
