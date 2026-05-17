// Auth.jsx

import React, {
  useState
} from 'react'

import {
  useNavigate
} from 'react-router-dom'

function Auth() {

  // Toggle login/register mode

  const [isLogin, setIsLogin] =
    useState(true)

  // Form states

  const [username, setUsername] =
    useState('')

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const navigate =
    useNavigate()


  async function handleSubmit(e) {

    e.preventDefault()

    try {

      // Decide endpoint

      const endpoint =
        isLogin
          ? 'login'
          : 'register'

      // Request body

      const bodyData = isLogin
        ? { email, password }
        : {
            username,
            email,
            password
          }

      const response =
        await fetch(
          `http://localhost:3000/auth/${endpoint}`,
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json'
            },

            body: JSON.stringify(
              bodyData
            )
          }
        )

      const data =
        await response.json()

      if (!response.ok) {

        alert(data.message)

        return
      }

      // Store token

      localStorage.setItem(
        'token',
        data.token
      )

      // Navigate to notes

      navigate('/notes')

    } catch (e) {

      console.log(e)
    }
  }


  return (
    <div>

      <h1>
        {
          isLogin
            ? 'Login'
            : 'Register'
        }
      </h1>


      <form onSubmit={handleSubmit}>


        {
          !isLogin && (

            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) =>
                setUsername(
                  e.target.value
                )
              }
            />

          )
        }

        <br />


        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <br />


        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <br />


        <button>
          {
            isLogin
              ? 'Login'
              : 'Register'
          }
        </button>

      </form>


      <br />


      <button
        onClick={() =>
          setIsLogin(!isLogin)
        }
      >

        {
          isLogin
            ? 'Create Account'
            : 'Already have account? Login'
        }

      </button>

    </div>
  )
}

export default Auth