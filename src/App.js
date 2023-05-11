import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App () {
  
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path = "/joanne_lin" element={<Home />} />
          <Route path = "/joanne_lin/About" element={<About />} />
          <Route path = "/joanne_lin/Projects" element={<Projects />} />
          <Route path = "/joanne_lin/Gallery" element={<Gallery />} />
          <Route path = "/joanne_lin/Contact" element={<Contact />} />
          
        </Routes>
      </div>
    </>
  )
}

export default App

