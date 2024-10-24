import { useEffect, useState } from "react";
import TimeInputForForm from "./TimeInputForForm";
import { setWorkoutValues } from "../appSlices/timerSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { openAlert } from "../appSlices/formSlice";
import CounterInputForForm from "./CounterInputForForm";
import { ITimeObject } from "./_constants/sharedInterfaces";
import { checkValues, stringToTitle } from "./_constants/sharedFunctions";

function TimerForm() {
  const timerValues = useAppSelector((state: any) => state.timerInfo);
  const formStateValues = useAppSelector((state: any) => state.formState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [timeObject, setTimeObject] = useState<ITimeObject>({
    hangTime: -2,
    offTime: -2,
    restTime: -2,
    repCount: -2,
    setCount: -2,
    delayStartTime: -2,
  });

  useEffect(() => {
    if (!timerValues.timerType) {
      navigate("/");
    }
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(setWorkoutValues(checkValues(timerValues.timerTimes, timeObject)));
    navigate(`/workout/:${timerValues.timerType}`);
  }

  function onBackClick() {
    if (Object.keys(formStateValues.dirtyFields).length === 0) navigate("/");
    else {
      dispatch(openAlert("/"));
    }
  }

  return (
    <form className={`form-${timerValues.timerType}`} onSubmit={handleSubmit}>
      <h2
        className={`form-row-title-${timerValues.timerType}`}
        // style={{ display: "flex", alignItems: "center", margin: "0" }}
      >
        Fill In Your Workout:<br></br>
        {stringToTitle(timerValues.timerType)}
      </h2>
      {Object.entries(timerValues.timerTimes)
        .filter(([key, val]) => val !== -1)
        .map(([key, val], i: number) => {
          if (key.includes("Time")) {
            return (
              <div key={i} className={"form-row"}>
                <TimeInputForForm
                  placeHolderData={timerValues.timerTimes}
                  timeObject={timeObject}
                  whichTimeInput={key}
                  setTimeObject={setTimeObject}
                />
              </div>
            );
          } else {
            return (
              <div key={i} className={"form-row"}>
                <CounterInputForForm
                  placeHolderData={timerValues.timerTimes}
                  timeObject={timeObject}
                  whichTimeInput={key}
                  setTimeObject={setTimeObject}
                />
              </div>
            );
          }
        })}
      <div className={`form-row-buttons-${timerValues.timerType}`}>
        <div className="workout-button-div-repeater">
          <button type="submit" className="form-button">
            Workout!
          </button>
        </div>
        <div className="back-button-div-repeater">
          <button type="button" className="form-button" onClick={onBackClick}>
            Back
          </button>
        </div>
      </div>
    </form>
  );
}

export default TimerForm;
