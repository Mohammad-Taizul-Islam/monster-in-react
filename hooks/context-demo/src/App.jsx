import { createContext } from "react";
import ComponentA from "./Components/PropsDrilling/ComponentA";
import ComponentOne from "./Components/ContextApi/ComponentOne";
import UseContexthook from "./Components/ContextApi/UseContexthook";

export const Data = createContext();
export const Data1 = createContext();


function App() {
  const name = "Robiul";
  const age = 50;
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <UseContexthook/>
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
}

export default App;
