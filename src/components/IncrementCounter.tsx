function IncrementCounter(props: any) {
  // console.log(props);
  return (
    <div className={props.stylingProp}>
      <p style={{ margin: 0 }}>
        {props.whichCounter
          .at(0)
          ?.toUpperCase()
          .concat(props.whichCounter.slice(1))}
        :<p style={{ margin: 0 }}></p>
        {props.counter}
      </p>
    </div>
  );
}

export default IncrementCounter;
