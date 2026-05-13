import React from 'react'

const App = () => {
  const users=[
 { id: 1, name: "Iflaq" },
 { id: 2, name: "Ali" }
]

  return (
    <div>{users.map((user,index)=>{
      return (
        <div key={index}>{user.name }</div>
      )
    })}</div>
  )
}

export default App