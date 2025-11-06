import React from "react";

const Counter = ({ count, onIncrement }) => {
  return (
    <div>
      <h2>Counter component</h2>
      <p>Current count : {count}</p>
      <button onClick={onIncrement}>Add+1</button>
    </div>
  );
};

export default Counter;
