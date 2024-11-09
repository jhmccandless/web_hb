import { ITimeObject } from "./sharedInterfaces";

export function checkValues(refObj: ITimeObject, newObj: ITimeObject) {
  const finalObj: any = {};
  Object.entries(refObj).forEach(([key, val]) => {
    finalObj[key] = newObj[key] !== -2 ? newObj[key] : val;
  });

  return finalObj;
}
/*
70 4:00, 100
array = 2, then 00:0S:s
array = 3, then 00:SS:s
array = 4, then 0M:SS:s
array = 5, then MM:SS:s
*/
export function secondsToTimeString(sec: number): string {
  const secArray = sec.toString().split("");
  const milliseconds = secArray.splice(-1);

  const dec = Number(secArray?.join("")) / 60;
  const minutes = Math.floor(dec);
  const seconds = Number(secArray?.join("")) - minutes * 60;

  if (minutes.toString().length < 2) {
    if (seconds.toString().length < 2) {
      return `0${minutes}:0${seconds}:${milliseconds}`;
    }
    return `0${minutes}:${seconds}:${milliseconds}`;
  } else {
    if (seconds.toString().length < 2) {
      return `${minutes}:0${seconds}:${milliseconds}`;
    }
    return `${minutes}:${seconds}:${milliseconds}`;
  }

  // switch (secArray.length) {
  //   case 1:
  //     return `00:00:${milliseconds}`;
  //   case 2:
  //     return `00:0${secArray.at(0)}:${milliseconds}`;
  //   case 3:
  //     return `00:${secArray.at(0)}${secArray.at(1)}:${milliseconds}`;
  //   case 4:
  //     return `0${secArray.at(0)}:${secArray.at(1)}${secArray.at(
  //       2
  //     )}:${milliseconds}`;
  //   case 5:
  //     return `${secArray.at(0)}${secArray.at(1)}:${secArray.at(2)}${secArray.at(
  //       3
  //     )}:${milliseconds}`;
  //   default:
  //     return sec.toString().concat("DEFAULT");
  // }
  // const dec = sec / 60;
  // const minutes = Math.floor(dec);
  // const seconds = sec - minutes * 60;
  // if (minutes.toString().length < 2) {
  //   if (seconds.toString().length < 2) {
  //     return `0${minutes}:0${seconds}`;
  //   }
  //   return `0${minutes}:${seconds}`;
  // } else {
  //   if (seconds.toString().length < 2) {
  //     return `${minutes}:0${seconds}`;
  //   }
  //   return `${minutes}:${seconds}`;
  // }
}

export function stringToTitle(str: string) {
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
    const temp2 = str?.at(0) ?? "temp2";

    tempString = temp2?.toUpperCase().concat(str.slice(1));

    return tempString;
  }
}

export function settingUpTimingInterval(
  obj: ITimeObject,
  timerType: string
): Array<any> {
  const finalArray = [];

  finalArray.push(["delay", obj.delayStartTime]); //starting interval means that second delay needs to be accounted for
  if (timerType === "repeaters") {
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
  } else if (timerType === "on-off") {
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
