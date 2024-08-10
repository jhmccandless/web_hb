import { useState } from "react";
import HomePageRadioInput from "./HomePageRadioInput";
import { useAppDispatch } from "./hooks";
import { useNavigate } from "react-router-dom";
import { setWorkoutType } from "../appSlices/timerSlice";

function HomePageForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("repeaters");

  function onWorkoutTypeSubmit(e: any) {
    e.preventDefault();
    console.log(selectedOption);

    dispatch(setWorkoutType(selectedOption));
    navigate("/form");
  }

  return (
    <form onSubmit={onWorkoutTypeSubmit}>
      <HomePageRadioInput
        inputTitle={"repeaters"}
        currentOption={selectedOption}
        changeSelected={setSelectedOption}
      />
      <HomePageRadioInput
        inputTitle={"on-off"}
        currentOption={selectedOption}
        changeSelected={setSelectedOption}
      />
      <HomePageRadioInput
        inputTitle={"normal"}
        currentOption={selectedOption}
        changeSelected={setSelectedOption}
      />
      <HomePageRadioInput
        inputTitle={"circuit"}
        currentOption={selectedOption}
        changeSelected={setSelectedOption}
      />
      <button type="submit">Next</button>
    </form>
  );
}

export default HomePageForm;
