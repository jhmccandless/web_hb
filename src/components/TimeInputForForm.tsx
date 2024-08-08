import React from "react";

interface timeInputFormInt {
  timeObject: any;
  setTimeObject: React.Dispatch<React.SetStateAction<any>>;
  whichTimeInput: string;
  placeHolderData: any;
}

function TimeInputForForm(props: timeInputFormInt) {
  // function onTypeChange(text: string) {
  //   const cleanedValue = text.replace(/[^0-9]/g, "");
  //   const parsedValue = parseInt(cleanedValue, 10);
  //   if (!isNaN(parsedValue)) {
  //     props.setTimeObject(() => {
  //       return {
  //         ...props.timeObject,
  //         [`${props.whichTimeInput}`]: parsedValue.toString(),
  //       };
  //     });
  //   } else {
  //     props.setTimeObject(() => {
  //       return {
  //         ...props.timeObject,
  //         [`${props.whichTimeInput}`]: "",
  //       };
  //     });
  //   }
  // }

  function onInputChange(e: any) {
    // e.preventDefaut();
    // console.log(e.target.value);
    props.setTimeObject(() => {
      return {
        ...props.timeObject,
        [`${props.whichTimeInput}`]: e.target.value,
      };
    });
  }

  function placeHolderNameAdjust(name: string) {
    return name
      .charAt(0)
      .toUpperCase()
      .concat(name.slice(1))
      .replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  console.log(props.timeObject);

  return (
    <div style={{ textAlign: "center" }}>
      <label>
        <p style={{ margin: "0 0 10px 0" }}>
          {placeHolderNameAdjust(props.whichTimeInput).concat(":")}
        </p>
        <input
          style={{ width: "50px" }}
          name=""
          type="number"
          placeholder={props.placeHolderData[props.whichTimeInput]}
          value={props.timeObject[`${props.whichTimeInput}`]}
          onChange={(e) => onInputChange(e)}
        />
      </label>
    </div>
  );
}

// const styles = StyleSheet.create({
//   title_text: {
//     textAlign: 'right',
//     width: '65%',
//     fontSize: 22,
//   },
//   field_input: {
//     width: '30%',
//     height: '80%',
//     borderStyle: 'solid',
//     borderColor: 'lightblue',
//     borderRadius: 5,
//     borderWidth: 2,
//     textAlign: 'center',
//     justifyContent: 'center',
//     fontSize: 22,
//   },
//   field_input_div: {
//     width: '35%',
//   },
//   field_line: {
//     height: 50,
//     display: 'flex',
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'center',
//     gap: 20,
//     alignContent: 'stretch',
//     alignItems: 'center',
//   },
// });

export default TimeInputForForm;
