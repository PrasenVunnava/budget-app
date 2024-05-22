import { createSlice } from "@reduxjs/toolkit";

const budgetSlice = createSlice({
  name: "budget",
  initialState: {
    value: "",
    remaining: "",
    spent: "",
    currency: "INR",
    itemsList: [],
  },
  reducers: {
    updateBudget: (state, action) => {
      state.value = action.payload;
    },
    updateCurrency: (state, action) => {
      state.currency = action.payload;
    },
    updateItems: (state, action) => {
      state.itemsList.push(action.payload);
    },
    incrementItemsBudget: (state, action) => {
      if (state.spent === state.value) {
        alert("Budget already spent cannot Increase");
        return;
      }if (state.remaining < 10) {
        alert("Available budget is not Enough");
        return;
      }
      let currentBudget =
        Number(state.itemsList[action.payload].allocatedBudget) + Number(10);
      state.itemsList[action.payload].allocatedBudget = currentBudget;
    },
    decrementItemsBudget: (state, action) => {
      if (state.spent === 10) {
        alert("Spent cannot be 0");
        return;
      }
      let currentBudget =
        Number(state.itemsList[action.payload].allocatedBudget) - Number(10);
      state.itemsList[action.payload].allocatedBudget = currentBudget;
    },
    removeItem: (state, action) => {
      state.itemsList.splice(action.payload, 1);
    },
    calculate: (state, action) => {
      if (state.spent === state.value && action.payload === "INC") return;

      if (state.itemsList.length === 0) {
        state.remaining = "";
        state.spent = "";
      } else {
        if (state.value !== "" && state.itemsList.length === 0) {
          state.remaining = state.value;
        } else if (state.value !== "" && state.itemsList.length !== 0) {
          let itemstotal = state.itemsList
            .map((item) => {
              return item.allocatedBudget;
            })
            .reduce((a, b) => Number(a) + Number(b), 0);
          state.spent = itemstotal;
          state.remaining = state.value - state.spent;
        }
      }
    },
  },
});

export const {
  updateBudget,
  updateCurrency,
  updateItems,
  incrementItemsBudget,
  decrementItemsBudget,
  removeItem,
  calculate,
} = budgetSlice.actions;

export default budgetSlice.reducer;
