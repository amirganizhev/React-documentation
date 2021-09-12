import React, {useState} from 'react';

function App() {

  const [counter, setCounter] = useState(5)
  const [value, setValue] = useState('Hello')

  function plus() {
    setCounter(counter + 1)
  }

  function minus() {
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );

}

export default App;
