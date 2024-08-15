import { useAppDispatch } from "./hooks";
import { initialState, setWorkoutValues } from "../appSlices/timerSlice";

function HomePageRadioInput(props: any) {
  const dispatch = useAppDispatch();

  function onRadioSelect() {
    dispatch(setWorkoutValues(initialState.timerTimes));
    props.changeSelected(props.inputTitle.toLowerCase());
  }

  return (
    <div className="home-page-select-wrapper">
      <label>
        <input
          type="radio"
          checked={
            props.currentOption === props.inputTitle.toLowerCase()
              ? true
              : false
          }
          value={props.inputTitle}
          onChange={onRadioSelect}
        />
        {props.inputTitle}
      </label>
    </div>
  );
}

export default HomePageRadioInput;
