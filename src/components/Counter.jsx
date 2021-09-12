import React, {useState} from 'react';

function Counter() {

  const [count, setCount] = useState(5)

  function plus() {
    setCount(count + 1)
  }

  function minus() {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );

}

export default Counter;
