import { useEffect, useState } from "react";
import TimeInputForForm from "./TimeInputForForm";
import { setWorkoutValues } from "../appSlices/timerSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useNavigate } from "react-router-dom";
import { openAlert } from "../appSlices/formSlice";

export function checkValues(refObj: any, newObj: any) {
  const finalObj: any = {};
  Object.entries(refObj).forEach(([key, val]) => {
    finalObj[key] = newObj[key] ? newObj[key] : val;
  });

  return finalObj;
}

function TimerForm() {
  const timerValues = useAppSelector((state: any) => state.timerInfo);
  const formStateValues = useAppSelector((state: any) => state.formState);
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

  useEffect(() => {
    if (!timerValues.timerType) {
      navigate("/");
    }
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(setWorkoutValues(checkValues(timerValues.timerTimes, timeObject)));
    navigate("/workout");
  }

  function onBackClick() {
    if (Object.keys(formStateValues.dirtyFields).length === 0) navigate("/");
    else {
      dispatch(openAlert("/"));
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2
        className="form-row"
        style={{ display: "flex", alignItems: "center", margin: "0" }}
      >
        Fill In Your Workout
      </h2>
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
      {Object.entries(timerValues.timerTimes)
        .filter(([key, val]) => val !== -1)
        .map(([key, val], i: number) => (
          <div key={i} className="form-row">
            <TimeInputForForm
              placeHolderData={timerValues.timerTimes}
              timeObject={timeObject}
              whichTimeInput={key}
              setTimeObject={setTimeObject}
            />
          </div>
        ))}
      {/* <div className="form-row-buttons"> */}
      <button
        type="submit"
        className="form-button"
        style={{ gridColumn: "1 / span 2" }}
      >
        Workout!
      </button>
      <button
        type="button"
        className="form-button"
        style={{ gridColumn: "3 / span 4" }}
        onClick={onBackClick}
      >
        Back
      </button>
      {/* </div> */}
    </form>
  );
}

export default TimerForm;
