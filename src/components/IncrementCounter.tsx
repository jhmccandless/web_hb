function IncrementCounter(props: any) {
  // console.log(props);
  return (
    <div className={props.stylingProp}>
      <p>reps{props.currentReps}</p>
      <p>sets{props.currentSets}</p>
    </div>
  );
}

export default IncrementCounter;
