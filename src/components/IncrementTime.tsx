import React from "react";

interface IncrementTimeInt {
  action: string;
  currentAct: string;
  actionTime: number;
  timerState: string;
}

function IncrementTime(props: IncrementTimeInt) {
  return (
    <>
      <div style={styles(props.currentAct, props.action).items_container}>
        <p style={styles(props.currentAct, props.action).items}>
          {props.action.at(0)?.toUpperCase().concat(props.action.slice(1))}:{" "}
          {props.currentAct === props.action
            ? props.actionTime
            : props.timerState}
        </p>
      </div>
    </>
  );
}

const styles = (curAct: string, actionComp: string) =>
  StyleSheet.create({
    items: {
      width: 100,
      textAlign: "center",
      fontWeight: curAct === actionComp ? "bold" : "regular",
      fontSize: 20,
    },
    items_container: {},
  });

export default IncrementTime;
