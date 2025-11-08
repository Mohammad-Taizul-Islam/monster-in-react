import Counter from "./Component/Counter";

// const initialState = { count: 0 };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { ...state, count: state.count + 1 };
//       break;
//     case "decrement":
//       return { ...state, count: state.count - 1 };
//       break;
//     case "reset":
//       return { ...state, count: 0 };
//       break;
//     default:
//       return state;
//   }
// };

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    // <div>
    //   <h1>Count : {state.count}</h1>
    //   <button onClick={() => dispatch({ type: "increment" })}>+</button>
    //    <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    //     <button onClick={() => dispatch({ type: "reset" })}>R</button>
    // </div>
    <div>
      <Counter/>
    </div>
  );
}

export default App;
