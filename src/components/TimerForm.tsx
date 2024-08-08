import { useState } from "react";
import TimeInputForForm from "./TimeInputForForm";
import { setWorkoutValues } from "../appSlices/timerSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

function TimerForm() {
  const timerValues = useAppSelector((state: any) => state.timerInfo);
  const dispatch = useAppDispatch();

  const [timeObject, setTimeObject] = useState<any>({});

  function checkValues(refObj: any, newObj: any) {
    const finalObj: any = {};
    Object.entries(refObj).forEach(([key, val]) => {
      finalObj[key] = newObj[key] ? newObj[key] : val;
    });

    return finalObj;
  }

  // function getTotalTimer(obj) {
  //   obj.hangtime + obj.offtime;
  // }

  console.log(Object.values(timerValues));

  return (
    // <div className="form-wrapper">
    <form className="form">
      <p className="form-row page-title">Fill In Your Workout</p>
      {Object.keys(timerValues).map((el: string, i: number) => (
        <div key={i} className="form-row">
          <TimeInputForForm
            placeHolderData={timerValues}
            timeObject={timeObject}
            whichTimeInput={el}
            setTimeObject={setTimeObject}
          />
        </div>
      ))}
      <p>{}</p>
      <button
        className="form-row"
        onClick={(e) => {
          e.preventDefault();
          console.log("click");
          dispatch(setWorkoutValues(checkValues(timerValues, timeObject)));
        }}
      >
        Form finished
      </button>
    </form>
    // </div>
  );
}

// const styles = StyleSheet.create({
//   field_div: {
//     display: "flex",
//     alignItems: "center",
//   },
//   form_title: {
//     fontSize: 30,
//     paddingTop: 20,
//     paddingBottom: 20,
//   },
// });

export default TimerForm;
