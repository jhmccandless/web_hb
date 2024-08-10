import { useState } from "react";
import TimeInputForForm from "./TimeInputForForm";
import { setWorkoutValues } from "../appSlices/timerSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useNavigate } from "react-router-dom";

function TimerForm() {
  const timerValues = useAppSelector(
    (state: any) => state.timerInfo.timerTimes
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    navigate("/workout");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="form-row page-title">Fill In Your Workout</p>
      <div className="form-row">
        <label>
          Choose Workout Type
          <select>
            <option value="none" style={{ display: "none" }}>
              Select...
            </option>
            <option value="repeaters">Repeaters</option>
            <option value="on-off">On-Off</option>
            <option value="circuit">Circuit</option>
          </select>
        </label>
      </div>
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
