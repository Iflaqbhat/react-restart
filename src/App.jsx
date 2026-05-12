//counter app
import React from 'react'

function App() {
  const [count, setCount] = React.useState(0);
  function increaseCount(){
    setCount(count + 1);
    console.log(count);
  }
  function decreaseCount(){
    if(count > 0){
    setCount(count - 1);
    console.log(count);
  }
  else {
    alert("Count cannot be less than 0");
  }
  }
  function reset(){
    setCount(0);
    console.log(count);
  }
  return (
    <div>
      <button onClick={decreaseCount}>-</button>
      <button onClick={increaseCount}>+</button>
      <button onClick={reset}>Reset</button>
      <span>{count}</span>
    </div>
  )
}

export default App