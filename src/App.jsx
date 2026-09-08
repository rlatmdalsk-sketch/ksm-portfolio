import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Marketing from './pages/Marketing'
import WebDevelopment from './pages/WebDevelopment'
import WebDesign from './pages/WebDesign'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/web-design" element={<WebDesign />} />
      </Routes>
    </Router>
  )
}

export default App