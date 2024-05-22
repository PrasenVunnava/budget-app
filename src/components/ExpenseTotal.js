import React from "react";
import Symbol from "./Symbol";
import { useSelector } from "react-redux";

const ExpenseTotal = () => {
  const spent = useSelector((state) => state.budget.spent);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "lightblue",
        borderRadius: "10px",
      }}
    >
      Spent so far: {spent} {spent ? <Symbol /> : ""}
    </div>
  );
};

export default ExpenseTotal;
