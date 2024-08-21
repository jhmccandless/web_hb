import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  isAlertOpen: boolean;
  dirtyFields: any;
  desURL: string;
}

export const initialState: FormState = {
  isAlertOpen: false,
  dirtyFields: {},
  desURL: "/",
};

export const formSlice = createSlice({
  name: "formInfo",
  initialState,
  reducers: {
    setDirtyFields: (state: any, action: PayloadAction<any>) => {
      // console.log(action.payload);
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
      // console.log(action.payload);
      return {
        ...current(state),
        isAlertOpen: false,
        // desURL: action.payload,
      };
    },
    openAlert: (state: any, action: PayloadAction<any>) => {
      // console.log(action.payload);
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
