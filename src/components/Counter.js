import React, { useReducer } from "react";

const numReducer = (state, action) => {
  if (action.type === "INCREASE") return state + 1;
  if (action.type === "DECREASE" && state > 0) return state - 1;
  return state;
};
export default function Counter() {
  const [numState, dispatch] = useReducer(numReducer, 0);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "INCREASE" });
        }}
      >
        +
      </button>
      <p>{numState}</p>
      <button
        onClick={() => {
          dispatch({ type: "DECREASE" });
        }}
      >
        -
      </button>
    </div>
  );
}
