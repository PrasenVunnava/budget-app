import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from '../redux/slice/budgetSlice'

export const store = configureStore({
  reducer: {
    budget: budgetReducer,
  },
});
