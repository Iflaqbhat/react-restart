import React, { useContext } from 'react'

import { AuthContext } from '../context/AuthContext'

function Navbar() {

  const { user, login, logout } =
    useContext(AuthContext);

  return (
    <div>

      <h1>Navbar</h1>

      {
        user ? (
          <button onClick={logout}>
            Logout
          </button>
        ) : (
          <button onClick={login}>
            Login
          </button>
        )
      }

    </div>
  )
}

export default Navbar