import React, { useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { setDirtyFields } from "../appSlices/formSlice";
import { ITimeObject } from "./_constants/sharedInterfaces";

interface timeInputFormProps {
  timeObject: ITimeObject;
  setTimeObject: React.Dispatch<React.SetStateAction<any>>;
  whichTimeInput: string;
  placeHolderData: ITimeObject;
}

function TimeInputForForm(props: timeInputFormProps) {
  const dispatch = useAppDispatch();
  const [seconds, setSeconds] = useState<number>(
    setSecondsFunc(props.placeHolderData[`${props.whichTimeInput}`])
  );
  const [minutes, setMinutes] = useState<number>(
    setMinutesFunc(props.placeHolderData[`${props.whichTimeInput}`])
  );

  function setMinutesFunc(sec: number) {
    if (sec / 60 < 1) {
      return 0;
    } else {
      return Math.floor(sec / 60);
    }
  }

  function setSecondsFunc(sec: number) {
    if (sec / 60 < 1) {
      return sec;
    } else {
      const min = Math.floor(sec / 60);
      return sec - min * 60;
    }
  }

  function updateMinutes(e: React.ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();
    setMinutes(parseInt(e.target.value));
    onInputChange(parseInt(e.target.value), seconds);
  }

  function updateSeconds(e: React.ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();
    setSeconds(parseInt(e.target.value));
    onInputChange(minutes, parseInt(e.target.value));
  }

  function onInputChange(min: number, sec: number) {
    let timeSum = min * 60 + +sec;
    props.setTimeObject(() => {
      return {
        ...props.timeObject,
        [`${props.whichTimeInput}`]: timeSum,
      };
    });
    dispatch(setDirtyFields({ [`${props.whichTimeInput}`]: timeSum }));
  }

  function placeHolderNameAdjust(name: string) {
    return name
      .charAt(0)
      .toUpperCase()
      .concat(name.slice(1))
      .replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ margin: "0 0 10px 0" }}>
        {placeHolderNameAdjust(props.whichTimeInput).concat(":")}
      </h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <label>
          <select
            style={{ width: "50px" }}
            name={props.whichTimeInput.concat("Minutes")}
            value={minutes}
            onChange={updateMinutes}
          >
            {Array.from({ length: 11 }, (_, i) => i).map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </select>

          <p style={{ margin: "0", fontSize: "12px" }}>{"Min"}</p>
        </label>
        <p style={{ margin: "0 3px 10px 3px" }}>:</p>
        <label>
          <select
            style={{ width: "50px" }}
            name={props.whichTimeInput.concat("Seconds")}
            value={seconds}
            onChange={updateSeconds}
          >
            {minutes !== 0 && <option>0</option>}
            {Array.from({ length: 59 }, (_, i) => i + 1).map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </select>
          <p style={{ margin: "0", fontSize: "12px" }}>{"Sec"}</p>
        </label>
      </div>
    </div>
  );
}

export default TimeInputForForm;
