import { configureStore } from "@reduxjs/toolkit";
import timerSlice from "../appSlices/timerSlice";

export const store = configureStore({
  reducer: {
    timerInfo: timerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
