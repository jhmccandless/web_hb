import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { ITimeObject } from "../components/_constants/sharedInterfaces";

export interface FormState {
  isAlertOpen: boolean;
  dirtyFields: ITimeObject;
  desURL: string;
}

export const initialState: FormState = {
  isAlertOpen: false,
  dirtyFields: {
    hangTime: -1,
    offTime: -1,
    restTime: -1,
    repCount: -1,
    setCount: -1,
    delayStartTime: -1,
  },
  desURL: "/",
};

export const formSlice = createSlice({
  name: "formInfo",
  initialState,
  reducers: {
    setDirtyFields: (state: any, action: PayloadAction<any>) => {
      return {
        ...current(state),
        dirtyFields: {
          ...current(state).dirtyFields,
          ...action.payload,
        },
      };
    },
    clearDirtyFields: (state: any, action: PayloadAction<any>) => {
      return {
        ...current(state),
        dirtyFields: {},
      };
    },
    closeAlert: (state: any, action: PayloadAction<any>) => {
      return {
        ...current(state),
        isAlertOpen: false,
        // desURL: action.payload,
      };
    },
    openAlert: (state: any, action: PayloadAction<any>) => {
      return {
        ...current(state),
        isAlertOpen: true,
        desURL: action.payload,
      };
    },
  },
});

export const { setDirtyFields, clearDirtyFields, closeAlert, openAlert } =
  formSlice.actions;

export default formSlice.reducer;
