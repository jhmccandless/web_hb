import React, { useState } from "react";
import { useAppDispatch } from "./hooks";
import { setDirtyFields } from "../appSlices/formSlice";

interface timeInputFormInt {
  timeObject: any;
  setTimeObject: React.Dispatch<React.SetStateAction<any>>;
  whichTimeInput: string;
  placeHolderData: any;
}

function TimeInputForForm(props: timeInputFormInt) {
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

  // function secondsToMinSec(sec: number) {
  //   if (sec / 60 < 1) {
  //     setMinutes(0);
  //     setSeconds(sec);
  //   } else {
  //     const min = Math.floor(sec / 60);
  //     setMinutes(min);
  //     setSeconds(sec - min * 60);
  //   }
  // }

  function updateMinutes(e: any) {
    e.preventDefault();
    setMinutes(e.target.value);
    onInputChange(e.target.value, seconds);
  }

  function updateSeconds(e: any) {
    e.preventDefault();
    setSeconds(e.target.value);
    onInputChange(minutes, e.target.value);
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
            // type="number"
            name={props.whichTimeInput.concat("Minutes")}
            value={minutes}
            onChange={updateMinutes}
          >
            {Array(16)
              .fill(0)
              .map((_, index) => index)
              .map((el, i) => (
                <option key={i} value={el}>
                  {el}
                </option>
              ))}
          </select>

          <p style={{ margin: "0", fontSize: "12px" }}>{"Min"}</p>
        </label>
        <p>:</p>
        <label>
          {/* <input
            style={{ width: "50px" }}
            name={props.whichTimeInput.concat("Seconds")}
            type="number"
            placeholder={props.placeHolderData[props.whichTimeInput]}
            value={seconds}
            onChange={updateSeconds}
          /> */}
          <select
            style={{ width: "50px" }}
            // type="number"
            name={props.whichTimeInput.concat("Seconds")}
            value={seconds}
            onChange={updateSeconds}
          >
            {Array(60)
              .fill(0)
              .map((_, index) => index)
              .map((el, i) => (
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
