interface IncrementCounterProps {
  stylingProp: string;
  whichCounter: string;
  counter: number;
}

function IncrementCounter(props: IncrementCounterProps) {
  return (
    <div className={props.stylingProp}>
      <p style={{ margin: 0 }}>
        {props.whichCounter
          .at(0)
          ?.toUpperCase()
          .concat(props.whichCounter.slice(1))}
        :
      </p>
      <p style={{ margin: 0 }}>{props.counter}</p>
    </div>
  );
}

export default IncrementCounter;
