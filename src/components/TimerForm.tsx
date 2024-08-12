import { useState } from "react";
import TimeInputForForm from "./TimeInputForForm";
import { setWorkoutValues } from "../appSlices/timerSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useNavigate } from "react-router-dom";

export function checkValues(refObj: any, newObj: any) {
  const finalObj: any = {};
  Object.entries(refObj).forEach(([key, val]) => {
    finalObj[key] = newObj[key] ? newObj[key] : val;
  });

  return finalObj;
}

function TimerForm() {
  const timerValues = useAppSelector(
    (state: any) => state.timerInfo.timerTimes
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [timeObject, setTimeObject] = useState<any>({
    // hangTime: "",
    // offTime: "",
    // restTime: "",
    // repCount: "",
    // setCount: "",
    // delayStartTime: "",
  });

  // function checkValues(refObj: any, newObj: any) {
  //   const finalObj: any = {};
  //   Object.entries(refObj).forEach(([key, val]) => {
  //     finalObj[key] = newObj[key] ? newObj[key] : val;
  //   });

  //   return finalObj;
  // }

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(setWorkoutValues(checkValues(timerValues, timeObject)));
    navigate("/workout");
  }

  // function onChangeWorkoutClick() {
  //   navigate("/");
  // }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-row">Fill In Your Workout</h2>
      {/* <div className="form-row">
        <label>
          <select style={{ width: "100px" }}>
            <option value="none" style={{ display: "none" }}>
              Workout Type Select
            </option>
            <option value="repeaters">Repeaters</option>
            <option value="on-off">On-Off</option>
            <option value="circuit">Circuit</option>
          </select>
        </label>
      </div> */}
      {Object.entries(timerValues)
        .filter(([key, val]) => val !== -1)
        .map(([key, val], i: number) => (
          <div key={i} className="form-row">
            <TimeInputForForm
              placeHolderData={timerValues}
              timeObject={timeObject}
              whichTimeInput={key}
              setTimeObject={setTimeObject}
            />
          </div>
        ))}
      <p>{}</p>
      <div className="form-row">
        <button type="submit" className="form-button">
          Form finished
        </button>
        {/* <button
          type="button"
          className="form-button"
          onClick={onChangeWorkoutClick}
        >
          another workout
        </button> */}
      </div>
    </form>
  );
}

export default TimerForm;
