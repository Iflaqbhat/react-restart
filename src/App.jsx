import React from 'react'

const App = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <h1>counterApp</h1>
      <div>
      <h2>Count currently is {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
       <button onClick={() => setCount(count - 1)}>Decrement</button>

      </div>
     </div>
  )
}

export default App