import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBudget } from "../redux/slice/budgetSlice";
import Symbol from "./Symbol";

const Budget = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.budget.value);
  const items = useSelector((state) => state.budget.itemsList);

  function handleChange(e) {
    if (items.length === 0) {
      dispatch(updateBudget(e.target.value));
    } else {
      return;
    }
  }

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "lightgray",
        borderRadius: "10px",
      }}
    >
      <label>Budget:</label> &nbsp;
      <Symbol />
      <input
        type="number"
        id="budget"
        style={{ borderRadius: "8px", border: "none", width: "50%" }}
        onChange={(e) => handleChange(e)}
        value={state}
      />
    </div>
  );
};

export default Budget;
