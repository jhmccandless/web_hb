function IncrementCounter(props: any) {
  // console.log(props);
  return (
    <div className={props.stylingProp}>
      <p>{`${props.whichCounter
        .at(0)
        ?.toUpperCase()
        .concat(props.whichCounter.slice(1))}:${props.counter}`}</p>
    </div>
  );
}

export default IncrementCounter;
