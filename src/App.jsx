// import React,{useState} from 'react'

// const App = () => {
//   const [name,setName]=useState(" hurugfergiu");

//   return (
//     <div>
//       <input type="text" value={name} onChange={(e)=>
//         setName(e.target.value)
//       }></input>
//       <h1>{name}</h1>
//     </div>
//   )
// }

// export default App
import React from 'react'


const App = () => {
  const[name,setName]=React.useState("");
  const[email,setEmail]=React.useState("");
  const[password,setPassword]=React.useState("");
function handleSubmit(e){
  e.preventDefault();
  console.log("form submitted")
  console.log(name);
}
  return (
<form onSubmit={handleSubmit}>
  <input type="text" name="name" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}></input>
  <input type="email" name="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
  <input type="password" name="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}  ></input>
  <button type='submit'>Submit</button>
</form>  )
}

export default App