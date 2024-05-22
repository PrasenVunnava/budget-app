import React, { useRef, useState } from "react";
import Symbol from "./Symbol";
import { useDispatch, useSelector } from "react-redux";
import { calculate, updateItems } from "../redux/slice/budgetSlice";

const AllocationForm = () => {
  const [data, setData] = useState({});
  const input = useRef();
  const select = useRef();
  const dispatch = useDispatch();
  const remaining = useSelector((state) => state.budget.remaining);
  const budget = useSelector((state) => state.budget.value);

  function handleClick() {
    debugger;
    if (input.current.value !== "" && select.current.value !== "") {
      if (remaining === 0) {
        alert("There is no available budget");
        input.current.value = "";
        select.current.value = "";
        return;
      } else if (remaining !== "" && input.current.value > remaining) {
        alert("Your budget is exceeding the available budget");
        input.current.value = "";
        select.current.value = "";
        return;
      } else if (input.current.value > Number(budget)) {
        alert("Your budget is exceeding the available budget");
        input.current.value = "";
        select.current.value = "";
        return;
      } else {
        dispatch(updateItems({ ...data }));
        dispatch(calculate());
      }
    }
    input.current.value = "";
    select.current.value = "";
  }
  function handleChange(e) {
    setData((prev) => {
      const updated = { ...prev, [e.target.name]: e.target.value };
      return updated;
    });
  }

  return (
    <>
      <div className="row mt-3">
        <h1 className="mt-3">Change Allocation</h1>
      </div>
      <div className="row mt-3">
        <div className="col">
          <label>Department</label> &nbsp;
          <select
            ref={select}
            name="department"
            onChange={(e) => handleChange(e)}
          >
            <option value=""></option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="Sales">Sales</option>
            <option value="Human Resources">Human Resources</option>
          </select>
        </div>
        <div className="col">
          <label>Allocation</label> &nbsp;
          <select>
            <option value="Add">Add</option>
            <option value="Remove">Remove</option>
          </select>
        </div>
        <div className="col">
          <Symbol />
          <input
            ref={input}
            type="number"
            id="inputValue"
            style={{ borderRadius: "8px" }}
            name="allocatedBudget"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={handleClick}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default AllocationForm;
