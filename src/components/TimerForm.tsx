import { useState } from "react";
import TimeInputForForm from "./TimeInputForForm";
import { setWorkoutValues } from "../appSlices/timerSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

function TimerForm() {
  const timerValues = useAppSelector((state: any) => state.timerInfo);
  const dispatch = useAppDispatch();

  const [timeObject, setTimeObject] = useState<any>({
    hangTime: "",
    offTime: "",
    restTime: "",
    repCount: "",
    setCount: "",
    delayStartTime: "",
  });

  function checkValues(refObj: any, newObj: any) {
    const finalObj: any = {};
    Object.entries(refObj).forEach(([key, val]) => {
      finalObj[key] = newObj[key] ? newObj[key] : val;
    });

    return finalObj;
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(setWorkoutValues(checkValues(timerValues, timeObject)));
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="form-row page-title">Fill In Your Workout</p>
      {Object.keys(timerValues).map((el: string, i: number) => (
        <div key={i} className="form-row">
          <TimeInputForForm
            placeHolderData={timerValues}
            timeObject={timeObject}
            whichTimeInput={el}
            setTimeObject={setTimeObject}
          />
        </div>
      ))}
      <p>{}</p>
      <button type="submit" className="form-row form-button">
        Form finished
      </button>
    </form>
  );
}

export default TimerForm;
