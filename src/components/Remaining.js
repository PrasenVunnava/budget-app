import React from "react";
import Symbol from "./Symbol";
import { useSelector } from "react-redux";

const Remaining = () => {
  const remaining = useSelector((state) => state.budget.remaining);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "lightgreen",
        borderRadius: "10px",
      }}
    >
      Remaining: {remaining} {remaining ? <Symbol /> : ''}
    </div>
  );
};

export default Remaining;
