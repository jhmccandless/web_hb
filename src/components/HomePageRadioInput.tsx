function HomePageRadioInput(props: any) {
  function onRadioSelect() {
    console.log("select");

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
