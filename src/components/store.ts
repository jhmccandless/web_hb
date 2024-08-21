import { configureStore } from "@reduxjs/toolkit";
import timerSlice from "../appSlices/timerSlice";
import formSlice from "../appSlices/formSlice";

export const store = configureStore({
  reducer: {
    timerInfo: timerSlice,
    formState: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
