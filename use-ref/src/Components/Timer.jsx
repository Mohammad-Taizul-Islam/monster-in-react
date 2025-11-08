import React, { useRef, useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setIsRunning(false);
          clearInterval(intervalRef.current);
          setCount(0);
        }}
      >
        Stop Timer
      </button>
      <button
        onClick={() => {
          setIsRunning(true);
        }}
      >
        Start Timer
      </button>
      <button
        onClick={() => {
          setCount(0);
          setIsRunning(true);
        }}
      >
        Reset Timer
      </button>
    </div>
  );
};

export default Timer;
