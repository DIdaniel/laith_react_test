import React, { useState } from "react";
import "./Counter.css";

const Counter = ({ number }) => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <p
        data-testid="counter"
        className={`${counterValue >= 100 ? "green" : ""}${
          counterValue <= -100 ? "red" : ""
        }`}
      >
        {counterValue}
      </p>
      <button
        data-testid="subtract-btn"
        onClick={() => setCounterValue((prev) => prev - inputValue)}
      >
        -
      </button>
      <input
        type="number"
        data-testid="input"
        className="text-center"
        value={inputValue}
        // parseInt === +
        onChange={(e) => setInputValue(+e.target.value)}
      />
      <button
        data-testid="add-btn"
        onClick={() => setCounterValue((prev) => prev + inputValue)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
