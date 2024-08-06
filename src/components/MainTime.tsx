import React from "react";

interface MainTimeInterface {
  number: number;
  curAct: string;
}

function MainTime(props: MainTimeInterface) {
  return (
    <>
      <div>
        <p>{props.number}</p>
      </div>
    </>
  );
}

// const styles = (action: string) =>
//   StyleSheet.create({
//     main_time_div: {
//       justifyContent: "center",
//       display: "flex",
//       height: "75%",
//       borderWidth: 4,
//       borderColor: "#20232a",
//       borderRadius: 6,
//       backgroundColor:
//         action === "rest" ? "#61dafb" : action === "hang" ? "green" : "red",
//       color: "#20232a",
//       alignItems: "center",
//     },
//     title: {
//       fontSize: 200,
//       fontWeight: "bold",
//     },
//   });

export default MainTime;
