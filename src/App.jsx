import { useEffect, useLayoutEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Marketing from './pages/Marketing'
import WebDevelopment from './pages/WebDevelopment'
import WebDesign from './pages/WebDesign'

// 섹션 페이지는 항상 최상단에서 시작하고,
// 홈은 떠났을 때의 스크롤 위치를 기억해 돌아오면 그 자리로 복원
function ScrollManager() {
  const { pathname } = useLocation()
  const homeScrollY = useRef(0)
  const isHome = useRef(pathname === '/')

  // 홈에 있는 동안만 스크롤 위치를 기록 (리스너는 한 번만 등록)
  useEffect(() => {
    const save = () => {
      if (isHome.current) homeScrollY.current = window.scrollY
    }
    window.addEventListener('scroll', save, { passive: true })
    return () => window.removeEventListener('scroll', save)
  }, [])

  // 화면이 그려지기 전에 위치를 맞춰 깜빡임 방지
  // isHome을 먼저 갱신해야 아래 scrollTo가 만든 scroll 이벤트가 홈 위치를 덮어쓰지 않음
  useLayoutEffect(() => {
    isHome.current = pathname === '/'
    const top = isHome.current ? homeScrollY.current : 0
    window.scrollTo({ top, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollManager />
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