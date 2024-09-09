interface StartButtonProps {
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
}

function StartButton(props: StartButtonProps) {
  return (
    <>
      <button
        className="timer-start-button"
        onClick={() => {
          props.setIsPaused(!props.isPaused);
        }}
      >
        Start Timer
      </button>
    </>
  );
}

export default StartButton;
