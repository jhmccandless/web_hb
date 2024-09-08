import React, { useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { setDirtyFields } from "../appSlices/formSlice";
import { ITimeObject } from "./_constants/sharedInterfaces";

interface CounterInputFormProps {
  timeObject: ITimeObject;
  setTimeObject: React.Dispatch<React.SetStateAction<any>>;
  whichTimeInput: string;
  placeHolderData: ITimeObject;
}

function CounterInputForForm(props: CounterInputFormProps) {
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
        <h3 style={{ margin: "0 0 10px 0" }}>
          {placeHolderNameAdjust(props.whichTimeInput).concat(":")}
        </h3>
        <select
          style={{ width: "50px" }}
          name={props.whichTimeInput}
          value={counter}
          onChange={onInputChange}
        >
          {Array(21)
            .fill(0)
            .map((_, index) => index)
            .map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
        </select>
      </label>
    </div>
  );
}

export default CounterInputForForm;
