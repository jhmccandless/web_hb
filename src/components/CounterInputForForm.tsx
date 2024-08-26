import React, { useState } from "react";
import { useAppDispatch } from "./hooks";
import { setDirtyFields } from "../appSlices/formSlice";

interface CounterInputFormInt {
  timeObject: any;
  setTimeObject: React.Dispatch<React.SetStateAction<any>>;
  whichTimeInput: string;
  placeHolderData: any;
}

function CounterInputForForm(props: CounterInputFormInt) {
  const dispatch = useAppDispatch();

  const [counter, setCounter] = useState<number>(
    props.placeHolderData[`${props.whichTimeInput}`]
  );

  function onInputChange(e: any) {
    setCounter(e.target.value);
    props.setTimeObject(() => {
      return {
        ...props.timeObject,
        //refactor, why I need the Number constructor here.
        [`${props.whichTimeInput}`]: Number(e.target.value),
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
          // placeholder={props.placeHolderData[props.whichTimeInput]}
          value={counter}
          onChange={onInputChange}
        />
      </label>
    </div>
  );
}

export default CounterInputForForm;
