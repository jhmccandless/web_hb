import { useAppDispatch } from "./hooks";
import { initialState, setWorkoutValues } from "../appSlices/timerSlice";

function HomePageRadioInput(props: any) {
  const dispatch = useAppDispatch();

  console.log(initialState.timerTimes);

  function onRadioSelect() {
    dispatch(setWorkoutValues(initialState.timerTimes));
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
