import { useEffect, useState } from "react";
import TimeInputForForm from "./TimeInputForForm";
import { setWorkoutValues } from "../appSlices/timerSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { openAlert } from "../appSlices/formSlice";
import CounterInputForForm from "./CounterInputForForm";
import { checkValues } from "./constants/sharedFunctions";
import { ITimeObject } from "./constants/sharedInterfaces";

function OnOffTimerForm() {
  const stateInfo = useAppSelector((state) => state); //PO Does this need to be typed?
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
    if (!stateInfo.timerInfo.timerType) {
      navigate("/");
    }
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
      setWorkoutValues(checkValues(stateInfo.timerInfo.timerTimes, timeObject))
    );
    navigate("/workout-on-off");
  }

  function onBackClick() {
    if (Object.keys(stateInfo.formState.dirtyFields).length === 0)
      navigate("/");
    else {
      dispatch(openAlert("/"));
    }
  }

  return (
    <form className="form-onoff" onSubmit={handleSubmit}>
      <h2
        className="form-row-title-onoff"
        style={{ display: "flex", alignItems: "center", margin: "0" }}
      >
        Fill In Your Workout
      </h2>
      {Object.entries(stateInfo.timerInfo.timerTimes)
        .filter(([key, val]) => val !== -1)
        .map(([key, val], i: number) => {
          if (key.includes("Time")) {
            return (
              <div key={i} className={"form-row"}>
                <TimeInputForForm
                  placeHolderData={stateInfo.timerInfo.timerTimes}
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
                  placeHolderData={stateInfo.timerInfo.timerTimes}
                  timeObject={timeObject}
                  whichTimeInput={key}
                  setTimeObject={setTimeObject}
                />
              </div>
            );
          }
        })}
      <div className="form-row-buttons-onoff">
        <div className="workout-button-div-onoff">
          <button type="submit" className="form-button">
            Workout!
          </button>
        </div>
        <div className="back-button-div-onoff">
          <button type="button" className="form-button" onClick={onBackClick}>
            Back
          </button>
        </div>
      </div>
    </form>
  );
}

export default OnOffTimerForm;
