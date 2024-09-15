import { useState } from "react";
import HomePageRadioInput from "./HomePageRadioInput";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { setWorkoutType } from "../appSlices/timerSlice";
import { checkValues } from "./_constants/sharedFunctions";
import { ITimeObject } from "./_constants/sharedInterfaces";
import {
  DEFAULT_TEMPLATE_OBJ,
  ON_OFF_TEMPLATE_OBJ,
  REPEATER_TEMPLATE_OBJ,
} from "./_constants/sharedConstants";

function HomePageForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string>("repeaters");

  const timerObject = useAppSelector((state) => state.timerInfo);

  function getTimerValueTemplate(timerType: string): ITimeObject {
    let woType: string = timerType;
    switch (woType) {
      case "repeaters":
        return REPEATER_TEMPLATE_OBJ;
      case "on-off":
        return ON_OFF_TEMPLATE_OBJ;
      default:
        return DEFAULT_TEMPLATE_OBJ;
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
    navigate(`/form/:${selectedOption}`);
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
