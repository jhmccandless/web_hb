import { useAppDispatch } from "../hooks/hooks";
import { initialState, setWorkoutValues } from "../appSlices/timerSlice";

interface HomePageRadioInputProps {
  inputTitle: string;
  currentOption: string;
  changeSelected: React.Dispatch<React.SetStateAction<string>>;
}

function HomePageRadioInput(props: HomePageRadioInputProps) {
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
