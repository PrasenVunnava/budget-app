import React from "react";

import { updateCurrency } from "../redux/slice/budgetSlice";
import { useDispatch } from "react-redux";

const Currency = () => {
  const dispatch = useDispatch();
  function handleChange(e) {
    dispatch(updateCurrency(e.target.value));
  }

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "greenyellow",
        borderRadius: "10px",
      }}
    >
      <select
        style={{ width: "100%", border: "none" }}
        onChange={(e) => handleChange(e)}
      >
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
    </div>
  );
};

export default Currency;
