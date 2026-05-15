import React, { useState } from 'react'

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {

    e.preventDefault();

    const response = await fetch(
      "http://localhost:3000/login",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          email,
          password
        })
        
      }

    );
    alert("Login successful!")

    const data = await response.json();

    console.log(data);
  }

  return (
    <form onSubmit={handleLogin}>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
  {  console.log("Rendered")}
      <button type="submit">
        Login
      </button>

    </form>
  )
}

export default App