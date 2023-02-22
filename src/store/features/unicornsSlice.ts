import { createSlice } from "@reduxjs/toolkit";
import { CatStructure } from "../../types";

const initialState: CatStructure = {
  count: 0,
};

const unicornSlice = createSlice({
  name: "unicorn",
  initialState,
  reducers: {
    addUnicorn: (state) => {
      state.count += 1;
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
