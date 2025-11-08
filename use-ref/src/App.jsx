import FocusInput from "./Components/FocusInput";
import Timer from "./Components/Timer";

// import { useRef } from "react";
function App() {
  // const inputElement = useRef(null);

  // const focusInput =()=>{
  //   inputElement.current.focus()
  //   inputElement.current.value = 'Taizul'
  // }
  return <>
    {/* <input type="text" ref={inputElement} />
    <button onClick={()=>focusInput()}>Focus & Write Taixul</button> */}
    {/* <FocusInput/> */}
    <Timer/>
  </>;
}

export default App;
