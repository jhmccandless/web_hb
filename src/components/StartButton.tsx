import { useAppDispatch } from "../hooks/hooks";
import { setDirtyFields } from "../appSlices/formSlice";

interface StartButtonProps {
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  timerType: string;
}

function StartButton(props: StartButtonProps) {
  const dispatch = useAppDispatch();
  return (
    <>
      <button
        className={`timer-start-button-${props.timerType}`}
        onClick={() => {
          props.setIsPaused(!props.isPaused);
          dispatch(setDirtyFields({ isTimerStarted: true }));
        }}
      >
        Start Timer
      </button>
    </>
  );
}

export default StartButton;
