import { useState } from "react";
import HomePageRadioInput from "./HomePageRadioInput";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useNavigate } from "react-router-dom";
import { setWorkoutType } from "../appSlices/timerSlice";
import { checkValues } from "./TimerForm";

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
  // offTime: -1,
  restTime: 40,
  // repCount: -1,
  setCount: 3,
  delayStartTime: 4,
};
const cicuitTemplateObj = {
  hangTime: 7,
  // offTime: -1,
  restTime: 40,
  repCount: 6,
  setCount: 3,
  delayStartTime: 4,
};

function HomePageForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("repeaters");

  const timerObject = useAppSelector((state: any) => state.timerInfo);

  function getTimerValueTemplate(timerType: string) {
    let woType = timerType;
    switch (woType) {
      case "repeaters":
        return repeaterTemplateObj;

      // break;
      case "on-off":
        return onOffTemplateObj;

      // break;
      case "circuit":
        return cicuitTemplateObj;

      // break;

      default:
        break;
    }
  }

  function onWorkoutTypeSubmit(e: any) {
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
    navigate("/form");
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
      {/* <HomePageRadioInput
        inputTitle={"normal"}
        currentOption={selectedOption}
        changeSelected={setSelectedOption}
      /> */}
      {/* <HomePageRadioInput
        inputTitle={"circuit"}
        currentOption={selectedOption}
        changeSelected={setSelectedOption}
      /> */}
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
