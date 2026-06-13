import React from 'react'

const App = () => {
  const [text, setText] = React.useState("")
  return (
    <div>
      <h1>live char counter</h1>
      <div>
      <input type="text" placeholder =" enter text here ... " value ={text} onChange={(e)=>setText(e.target.value)}></input>
      <p>Characters: {text.length}</p>

      </div>
     </div>
  )
}

export default App