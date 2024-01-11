import React from "react";
import "../styles/buttonUp.css";

export default function ButtonOp({ value, changeTodoOp }) {
  return (
    <button className="btn" onClick={() => changeTodoOp(value)}>
      {value}
    </button>
  );
}
