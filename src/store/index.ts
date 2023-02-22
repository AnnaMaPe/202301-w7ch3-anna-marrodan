import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { unicornReducer } from "./features/unicornSlice";

export const store = configureStore({
  reducer: { unicorn: unicornReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
