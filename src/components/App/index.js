import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  // function sum()  {
  //   setCounter(counter + 1);
  // }

  // function sub(){
  //   setCounter(counter - 1)
  // }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

export default App;
