import React, { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App from Scratch</h1>
        <Counter
        count={count}
        onIncrement={()=>setCount(count+1)}
        />
      </header>
    </div>
  );
}

export default App;