import React from "react";
import ExpenseItem from "./ExpenseItem";
import { useSelector } from "react-redux";

const ExpenseList = () => {
  const items = useSelector((state) => state.budget.itemsList);
  if (items.length === 0) return;
  return (
    <div className="row mt-3">
      <div className="col">
        <h1 className="mt-3">Allocation</h1>
      </div>
      <ExpenseItem />
    </div>
  );
};

export default ExpenseList;
