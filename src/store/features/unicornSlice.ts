import { createSlice } from "@reduxjs/toolkit";
import { UnicornState } from "../../types";

const initialState: UnicornState = {
  count: 0,
  showImage: false,
};

const unicornSlice = createSlice({
  name: "unicorn",
  initialState,
  reducers: {
    addUnicorn: (state) => {
      state.count += 1;
      if (state.count % 5 === 0) {
        state.showImage = true;
      } else {
        state.showImage = false;
      }
    },
    removeUnicorn: (state) => {
      state.count -= 1;
    },
  },
});

export const unicornReducer = unicornSlice.reducer;

export const {
  addUnicorn: addUnicornActionCreator,
  removeUnicorn: removeUnicornActionCreator,
} = unicornSlice.actions;
