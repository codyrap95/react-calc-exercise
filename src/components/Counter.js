import React, { useReducer } from "react";

const numReducer = (state, action) => {
  if (action.type === "INCREASE") return state + 1;
  if (action.type === "DECREASE" && state > 0) return state - 1;
  return state;
};
export default function Counter(props) {
  const [numState, dispatch] = useReducer(numReducer, 0);
  const fetchSW = async () => {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    props.fetchedData(data.results);
  };
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
      <button onClick={fetchSW}>Fetch</button>
    </div>
  );
}
