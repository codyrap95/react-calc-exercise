import React, { useRef } from "react";
import classes from "./Calculator.module.css";

export default function Calculator(props: any) {
  const inputRef = useRef<HTMLInputElement>(null);
  const plusHandler = () => {
    props.passInput({ value: inputRef.current?.value, type: "+" });
  };
  const minusHandler = () => {
    props.passInput({ value: inputRef.current?.value, type: "-" });
  };
  const submitHandler = (event: any) => {
    event.preventDefault();
    props.passInput({ value: inputRef.current?.value, type: "=" });
    console.log("arrived at submit handler");
  };
  return (
    <div className={classes.calculatorWrapper}>
      <form onSubmit={submitHandler}>
        <label htmlFor="calculator-input">Type Here:</label>
        <input
          type="number"
          name="calculator-input"
          id="calculator-input"
          min={0}
          step={1}
          ref={inputRef}
        />
        <button type="button" onClick={plusHandler}>
          +
        </button>
        <button type="button" onClick={minusHandler}>
          -
        </button>
        <button type="submit">=</button>
      </form>
    </div>
  );
}
