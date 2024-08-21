import React from "react";
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

  function onInputChange(e: any) {
    props.setTimeObject(() => {
      return {
        ...props.timeObject,
        [`${props.whichTimeInput}`]: e.target.value,
      };
    });
    dispatch(setDirtyFields({ [`${props.whichTimeInput}`]: e.target.value }));
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
      <label>
        <p style={{ margin: "0 0 10px 0" }}>
          {placeHolderNameAdjust(props.whichTimeInput).concat(":")}
        </p>
        <input
          style={{ width: "50px" }}
          name={props.whichTimeInput}
          type="number"
          placeholder={props.placeHolderData[props.whichTimeInput]}
          defaultValue={props.timeObject[`${props.whichTimeInput}`]}
          onChange={onInputChange}
        />
      </label>
    </div>
  );
}

export default TimeInputForForm;
