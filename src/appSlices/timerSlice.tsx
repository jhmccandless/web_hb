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
};

export const timerSlice = createSlice({
  name: "timerInfo",
  initialState,
  reducers: {
    setWorkoutValues: (state: any, action: PayloadAction<any>) => {
      return { ...current(state), timerTimes: action.payload };
    },
    setWorkoutType: (state: any, action: PayloadAction<any>) => {
      return { ...current(state), ...action.payload };
    },
  },
});

export const { setWorkoutValues, setWorkoutType } = timerSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default timerSlice.reducer;
