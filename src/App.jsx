import React from 'react'

import Navbar from './components/ Navbar'
import Profile from './components/Profile'

import AuthProvider from './context/AuthContext'

function App() {

  return (

    <AuthProvider>

      <Navbar />

      <Profile />

    </AuthProvider>
  )
}

export default App