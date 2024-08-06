import React, {useEffect, useRef, useState} from 'react';
import {Button, Text} from 'react-native';

interface Timer2UI {
  hangTime: number;
  offTime: number;
  restTime: number;
  repCount: number;
  setCount: number;
  delayStartTime: number;
}

function Timer2UI(props: Timer2UI) {
  let timeArray = useRef<number[]>(settingUpTimingInterval(props));
  const [time1, setTime1] = useState<number>(timeArray.current.at(0) || 0);
  const [masterTime, setMasterTime] = useState<number>(
    timeArray.current.at(0) || 0,
  ); //issue, the interval starts this after one second. So we need to assign this the dst and make the initial timer count from dst - 1
  const [isHang, setIsHang] = useState(false); //toggle between on and off
  const [isRest, setIsRest] = useState(true); //turns if rest is on or off
  const [isPaused, setIsPaused] = useState(true);

  // ---Creates array to go through---
  function settingUpTimingInterval(obj: Timer2UI) {
    const finalArray = [];
    finalArray.push(obj.delayStartTime); //starting interval means that second delay needs to be accounted for
    for (let j = obj.repCount; j > 0; j--) {
      for (let i = obj.setCount; i > 0; i--) {
        if (i > 1) {
          finalArray.push(obj.hangTime);
          finalArray.push(obj.offTime);
        } else {
          finalArray.push(obj.hangTime);
        }
      }
      if (j > 1) {
        finalArray.push(obj.restTime);
      }
    }
    // console.log(finalArray);
    return finalArray;
  }

  useEffect(() => {
    // ---Takes in an array of the times to do in sequence--
    function timer1(arr: number[], stateHang: boolean): void {
      let funcHang = stateHang;
      let funcArray: number[] = arr;
      let arrayCounter: number = 0;
      let funcTimeCount: number = funcArray.at(arrayCounter) || 0;
      const int1 = setInterval(() => {
        if (arrayCounter % (2 * props.repCount) === 0 || arrayCounter === 0) {
          setIsRest(true);
          setIsHang(false);
        } else {
        }
        if (
          funcArray.at(arrayCounter) === funcTimeCount &&
          arrayCounter !== 0 &&
          arrayCounter % (2 * props.repCount) !== 0
        ) {
          setIsRest(false);
        }
        funcTimeCount--;
        if (funcTimeCount > 1) {
          setTime1(funcTimeCount);
          setMasterTime(funcTimeCount);
        } else if (funcTimeCount === 1) {
          setTime1(funcTimeCount);
          setMasterTime(funcTimeCount);
          arrayCounter++;
        } else if (funcTimeCount === 0) {
          funcTimeCount = funcArray.at(arrayCounter) || 0;
          setMasterTime(funcTimeCount);
          setTime1(0);
          funcHang = !funcHang;
          setIsHang(funcHang);
        } else {
          console.log('END');
          global.clearInterval(int1);
        }
      }, 500);
    }
    if (!isPaused) {
      timer1(timeArray.current, isHang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);
  return (
    <>
      <Text>
        This is Timer2UI {masterTime} {isHang ? 'hang' : 'Off'}
      </Text>
      <Text>Hang {isHang && time1 > 0 ? time1 : props.hangTime}</Text>
      <Text>Off {!isHang && time1 > 0 && !isRest ? time1 : props.offTime}</Text>
      <Text>Rest {isRest && time1 > 0 ? time1 : props.restTime}</Text>
      <Button
        title="Start"
        onPress={() => {
          setIsPaused(!isPaused);
        }}
      />
    </>
  );
}

export default Timer2UI;
