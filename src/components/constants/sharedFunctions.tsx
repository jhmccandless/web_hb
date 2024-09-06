import { ITimeObject } from "./sharedInterfaces";

export function checkValues(refObj: ITimeObject, newObj: ITimeObject) {
  const finalObj: any = {};
  Object.entries(refObj).forEach(([key, val]) => {
    finalObj[key] = newObj[key] !== -2 ? newObj[key] : val;
  });

  return finalObj;
}
