import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setWorkoutValues } from "../appSlices/timerSlice";

function HomePageRadioInput(props: any) {
  const dispatch = useAppDispatch();
  const initialStateCopy = useAppSelector(
    (state: any) => state.timerInfo.timerTimes
  );

  const track = useRef<any>(initialStateCopy);

  // console.log(track);
  function onRadioSelect() {
    console.log(track.current);
    dispatch(setWorkoutValues(track.current));
    props.changeSelected(props.inputTitle);
  }

  return (
    <div>
      <label>
        <input
          type="radio"
          checked={props.currentOption === props.inputTitle ? true : false}
          value={props.inputTitle}
          onChange={onRadioSelect}
        />
        {props.inputTitle}
      </label>
    </div>
  );
}

export default HomePageRadioInput;
