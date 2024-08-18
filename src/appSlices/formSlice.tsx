import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  isAlertOpen: boolean;
  dirtyFields: any;
}

export const initialState: FormState = {
  isAlertOpen: false,
  dirtyFields: {},
};

export const timerSlice = createSlice({
  name: "timerInfo",
  initialState,
  reducers: {
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
    setIsAlertOpen: (state: any, action: PayloadAction<any>) => {
      return {
        ...current(state),
      };
    },
  },
});

export const { setDirtyFields, setIsAlertOpen } = timerSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default timerSlice.reducer;
