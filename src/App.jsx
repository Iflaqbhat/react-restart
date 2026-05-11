import React from 'react'

const App = () => {
 function User({name,age}) {
  return (
    <h2>
      <h1>{name}</h1>
      <p>{age}</p>
    </h2>
  );
}
function Fruits({ items }) {
  return <h1>{items}</h1>;
}
  return (
    <div>
     
      <User name="Iflaq bhat" age={25} />
      <User name = "jhon doe" age={33}/>
      <Fruits items={["Apple", " Banana", " Cherry"]}/>
    </div>
  )
}

export default App