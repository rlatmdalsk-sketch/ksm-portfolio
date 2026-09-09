import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Marketing from './pages/Marketing'
import WebDevelopment from './pages/WebDevelopment'
import WebDesign from './pages/WebDesign'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
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