import React, { useReducer, useState } from "react";
import { counterReducer, initialState } from "./counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue,setInputValue] = useState(0)

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const handleReset = () => dispatch({ type: "reset" });

  const handleIncrementByAmount = () =>{
    dispatch({type:"incrementByPayload",payload : +inputValue})
    setInputValue('')
  }
   const handleDecrementByAmount = () =>{
    dispatch({type:"decrementByPayload",payload : +inputValue})
    setInputValue("")
   }

  return (
    <div>
      <h2>Count : {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>

      <div>
        <input type="number" value={inputValue} onChange={e=>setInputValue(e.target.value)}  />
        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
      </div>
    </div>
  );
};

export default Counter;
