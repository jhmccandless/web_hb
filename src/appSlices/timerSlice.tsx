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
}

const initialState: TimerState = {
  timerTimes: {
    hangTime: 7,
    offTime: 3,
    restTime: 40,
    repCount: 6,
    setCount: 3,
    delayStartTime: 4,
  },
  timerType: "",
};

export const timerSlice = createSlice({
  name: "timerInfo",
  initialState,
  reducers: {
    setWorkoutValues: (state: any, action: PayloadAction<TimerState>) => {
      // console.log(action.payload);
      // console.log(current(state));
      return { ...current(state), timerTimes: action.payload };
    },
    setWorkoutType: (state: any, action: PayloadAction<String>) => {
      console.log(action.payload);
      // console.log(current(state));
      return { ...current(state), timerType: action.payload };
    },
  },
});

export const { setWorkoutValues, setWorkoutType } = timerSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default timerSlice.reducer;
