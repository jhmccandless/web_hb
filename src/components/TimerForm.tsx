import React, { useState } from "react";
import TimeInputForForm from "./TimeInputForForm";
import { Button, StyleSheet, Text, View } from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setWorkoutValues } from "../appSlices/timerSlice";

type RootStackParamList = {
  Form: undefined;
  Workout: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Form">;

function TimerForm({ navigation }: Props) {
  const timerValues = useAppSelector((state) => state.timerInfo);
  const dispatch = useAppDispatch();

  const [timeObject, setTimeObject] = useState<any>({});

  function checkValues(refObj: any, newObj: any) {
    const finalObj: any = {};
    Object.entries(refObj).forEach(([key, val]) => {
      finalObj[key] = newObj[key] ? newObj[key] : val;
    });

    return finalObj;
  }

  function getTotalTimer(obj) {
    obj.hangtime + obj.offtime;
  }

  console.log();

  console.log(Object.values(timerValues));

  return (
    <>
      <View style={styles.field_view}>
        <Text style={styles.form_title}>Fill In Your Workout</Text>
        {Object.keys(timerValues).map((el: string, i: number) => (
          <View key={i}>
            <TimeInputForForm
              placeHolderData={timerValues}
              timeObject={timeObject}
              whichTimeInput={el}
              setTimeObject={setTimeObject}
            />
          </View>
        ))}
        <Text>{}</Text>
        <Button
          title={"Next Page"}
          onPress={() => {
            dispatch(setWorkoutValues(checkValues(timerValues, timeObject)));
            navigation.navigate("Workout", { ...timeObject });
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  field_view: {
    display: "flex",
    alignItems: "center",
  },
  form_title: {
    fontSize: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default TimerForm;
