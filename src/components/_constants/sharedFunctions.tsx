import { ITimeObject } from "./sharedInterfaces";

export function checkValues(refObj: ITimeObject, newObj: ITimeObject) {
  const finalObj: any = {};
  Object.entries(refObj).forEach(([key, val]) => {
    finalObj[key] = newObj[key] !== -2 ? newObj[key] : val;
  });

  return finalObj;
}

export function secondsToTimeString(sec: number) {
  const dec = sec / 60;
  const minutes = Math.floor(dec);
  const seconds = sec - minutes * 60;
  if (minutes.toString().length < 2) {
    if (seconds.toString().length < 2) {
      return `0${minutes}:0${seconds}`;
    }
    return `0${minutes}:${seconds}`;
  } else {
    if (seconds.toString().length < 2) {
      return `${minutes}:0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }
}
