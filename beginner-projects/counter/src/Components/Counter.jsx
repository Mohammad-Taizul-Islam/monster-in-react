import React, { useState } from "react";
import "../index.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1 < 0 ? 0 : count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
      </div>
      <section className="btns-container">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>R</button>
      </section>
    </>
  );
};

export default Counter;
