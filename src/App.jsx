import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Room from './pages/Room.jsx'
import Footer from './pages/components/Footer.jsx'; 

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomId" element={<Room />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
