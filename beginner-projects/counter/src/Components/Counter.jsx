import React, { useState } from "react";
import "../index.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1 < 0 ? 0 : count - 1);
  const reset = () => setCount(0);
  return (
    <div>
      <h1>{count}</h1>
      <div className="button-container">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>R</button>
      </div>
    </div>
  );
};

export default Counter;
