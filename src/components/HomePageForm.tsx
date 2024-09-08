import { useState } from "react";
import HomePageRadioInput from "./HomePageRadioInput";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { setWorkoutType } from "../appSlices/timerSlice";
import { checkValues } from "./_constants/sharedFunctions";
import { ITimeObject } from "./_constants/sharedInterfaces";

const repeaterTemplateObj = {
  hangTime: 7,
  offTime: 3,
  restTime: 240,
  repCount: 6,
  setCount: 3,
  delayStartTime: 10,
};
const onOffTemplateObj = {
  hangTime: 7,
  offTime: -1,
  restTime: 40,
  repCount: -1,
  setCount: 3,
  delayStartTime: 4,
};
const defaultTemplateObj = {
  hangTime: -1,
  offTime: -1,
  restTime: -1,
  repCount: -1,
  setCount: -1,
  delayStartTime: -1,
};

function HomePageForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string>("repeaters");

  const timerObject = useAppSelector((state) => state.timerInfo);

  function getTimerValueTemplate(timerType: string): ITimeObject {
    let woType: string = timerType;
    switch (woType) {
      case "repeaters":
        return repeaterTemplateObj;
      case "on-off":
        return onOffTemplateObj;
      default:
        return defaultTemplateObj;
    }
  }

  function onWorkoutTypeSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
      setWorkoutType({
        timerTimes: checkValues(
          timerObject.timerTimes,
          getTimerValueTemplate(selectedOption)
        ),
        timerType: selectedOption,
      })
    );
    navigate(`/form-${selectedOption}`);
  }

  return (
    <form className="type-form form-row-5" onSubmit={onWorkoutTypeSubmit}>
      <HomePageRadioInput
        inputTitle={"Repeaters"}
        currentOption={selectedOption}
        changeSelected={setSelectedOption}
      />
      <HomePageRadioInput
        inputTitle={"On-Off"}
        currentOption={selectedOption}
        changeSelected={setSelectedOption}
      />
      <button
        className="form-button"
        style={{ width: "65px", justifySelf: "center", alignSelf: "end" }}
        type="submit"
      >
        Next
      </button>
    </form>
  );
}

export default HomePageForm;
