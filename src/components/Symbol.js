import React from "react";
import { useSelector } from "react-redux";

const Symbol = () => {
  const currency = useSelector((state) => state.budget.currency);

  let currencySymbol;

  if (currency === "INR") {
    currencySymbol = "₹";
  } else if (currency === "EUR") {
    currencySymbol = "€";
  } else if (currency === "GBP") {
    currencySymbol = "£";
  } else {
    currencySymbol = "$";
  }
  return (
    <label>
      <b>{currencySymbol}</b> &nbsp;{" "}
    </label>
  );
};

export default Symbol;
