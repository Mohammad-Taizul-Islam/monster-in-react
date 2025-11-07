import React, {useState, useEffect } from "react";
const CounterEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Call useEffect");
    document.title = `Increment ${count}`;
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
};

export default CounterEffect;
