import React,{useState} from 'react'

const App = () => {
  const [name,setName]=useState(" hurugfergiu");

  return (
    <div>
      <input type="text" value={name} onChange={(e)=>
        setName(e.target.value)
      }></input>
      <h1>{name}</h1>
    </div>
  )
}

export default App