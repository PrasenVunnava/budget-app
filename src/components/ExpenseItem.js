import React from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementItemsBudget,
  incrementItemsBudget,
  removeItem,
  calculate
} from "../redux/slice/budgetSlice";
import Symbol from "./Symbol";

const ExpenseItem = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.budget.itemsList);
  if (items.length === 0) return;

  return (
    <>
      <div className="row text-center">
        <div className="col">
          <label>
            <b>Department</b>
          </label>
        </div>
        <div className="col">
          <label>
            <b>Allocated Budget</b>
          </label>
        </div>
        <div className="col">
          <label>
            <b>Increase by 10</b>
          </label>
        </div>
        <div className="col">
          <label>
            <b>Decrease by 10</b>
          </label>
        </div>
        <div className="col">
          <label>
            <b>Delete</b>
          </label>
        </div>
      </div>

      {items.map((item, index) => {
        return (
          <div
            className="row text-center"
            key={index}
            style={{
              borderBottom: "0.5px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div className="col">
              <label>{item.department}</label>
            </div>
            <div className="col">
              <Symbol/> <label>{item.allocatedBudget}</label>
            </div>
            <div className="col">
              <label
                style={{ fontSize: "20px" }}
                onClick={() => { dispatch(incrementItemsBudget(index)); dispatch(calculate('INC'));}}
              >
                <FaPlusCircle />
              </label>
            </div>
            <div className="col">
              <label
                style={{ fontSize: "20px" }}
                onClick={() => { dispatch(decrementItemsBudget(index)); dispatch(calculate());}}
              >
                <FaMinusCircle />
              </label>
            </div>
            <div className="col">
              <label style={{ fontSize: "20px" }} onClick={() => { dispatch(removeItem(index)); dispatch(calculate());}}>
                <b>X</b>
              </label>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ExpenseItem;
