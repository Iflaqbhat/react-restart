import React from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Login from './Login'

const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact </Link>
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App