import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// Add code to import the other components here under

import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import Currency from "./components/Currency";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";

const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3">Company's Budget Allocation</h1>
      <div className="row mt-3">
        <div className="col">
          <Budget />
        </div>
        <div className="col">
          <Remaining />
        </div>
        <div className="col">
          <ExpenseTotal />
        </div>
        <div className="col">
          <Currency />
        </div>
      </div>
      <ExpenseList />
      <AllocationForm />
    </div>
  );
};
export default App;
