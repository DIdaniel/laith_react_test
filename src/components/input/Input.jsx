import React from "react";

const Input = ({ setNumber, number }) => {
  const decrease = () => {
    setNumber((prev) => prev - 1);
  };

  const increase = () => {
    setNumber((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      <input type="number" value={number} style={{ textAlign: "center" }} />
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Input;
