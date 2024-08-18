import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

export interface TimerState {
  timerTimes: {
    hangTime: number;
    offTime: number;
    restTime: number;
    repCount: number;
    setCount: number;
    delayStartTime: number;
  };
  timerType: string;
  dirtyFields: any;
}

export const initialState: TimerState = {
  timerTimes: {
    hangTime: -1,
    offTime: -1,
    restTime: -1,
    repCount: -1,
    setCount: -1,
    delayStartTime: -1,
  },
  timerType: "",
  dirtyFields: {},
};

export const timerSlice = createSlice({
  name: "timerInfo",
  initialState,
  reducers: {
    setWorkoutValues: (state: any, action: PayloadAction<any>) => {
      // console.log(action.payload);
      // console.log(current(state));
      return { ...current(state), timerTimes: action.payload };
    },
    setWorkoutType: (state: any, action: PayloadAction<any>) => {
      // console.log(current(state));
      return { ...current(state), ...action.payload };
    },
    setDirtyFields: (state: any, action: PayloadAction<any>) => {
      console.log(action.payload);
      return {
        ...current(state),
        dirtyFields: {
          ...current(state).dirtyFields,
          ...action.payload,
        },
      };
    },
  },
});

export const { setWorkoutValues, setWorkoutType, setDirtyFields } =
  timerSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default timerSlice.reducer;
