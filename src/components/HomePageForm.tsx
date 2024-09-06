import { useState } from "react";
import HomePageRadioInput from "./HomePageRadioInput";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { setWorkoutType } from "../appSlices/timerSlice";
import { checkValues } from "../components/constants/sharedFunctions";
import { ITimeObject } from "../components/constants/sharedInterfaces";

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
// const cicuitTemplateObj = {
//   hangTime: 7,
//   offTime: -1,
//   restTime: 40,
//   repCount: 6,
//   setCount: 3,
//   delayStartTime: 4,
// };

// interface IState {
//   timerInfo:

// }

function HomePageForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string>("repeaters");

  const timerObject = useAppSelector((state) => state.timerInfo);

  function getTimerValueTemplate(timerType: string): ITimeObject {
    // let woType: string = timerType;
    // switch (woType) {
    //   case "repeaters":
    //     return repeaterTemplateObj as ITimeObject;

    //   // break;
    //   case "on-off":
    //     return onOffTemplateObj as ITimeObject;

    //   // break;
    //   // case "circuit":
    //   //   return cicuitTemplateObj as ITimeObject;

    //   // break;
    //   default:
    //     break;
    //   // return defaultTemplateObj as ITimeObject;
    // }
    if (timerType === "repeaters" && repeaterTemplateObj !== undefined) {
      return repeaterTemplateObj! as ITimeObject;
    } else if (timerType === "on-off" && onOffTemplateObj !== undefined) {
      return onOffTemplateObj! as ITimeObject;
    }
    return defaultTemplateObj;
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
