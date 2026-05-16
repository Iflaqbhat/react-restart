import React, { useContext } from 'react'

import { AuthContext } from '../context/AuthContext'

function Profile() {

  const { user } = useContext(AuthContext);

  return (
    <div>

      <h1>Profile</h1>

      {
        user ? (
          <div>

            <p>{user.name}</p>

            <p>{user.email}</p>

          </div>
        ) : (
          <p>Please login</p>
        )
      }

    </div>
  )
}

export default Profile