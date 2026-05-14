import React from 'react'

function CounterDisplay({ count }) {
  return <h1>Count is {count}</h1>;
}

function CounterButtons({ count, setCount }) {

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div>

      <button onClick={increase}>
        Increase
      </button>

      <button onClick={decrease}>
        Decrease
      </button>

    </div>
  );
}

const App = () => {

  const [count, setCount] = React.useState(0);

  return (
    <div>

      <h1>COUNTER APP</h1>

      <CounterDisplay count={count} />

      <CounterButtons
        count={count}
        setCount={setCount}
      />

    </div>
  )
}

export default App