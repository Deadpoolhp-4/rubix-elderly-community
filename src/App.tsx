import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AboutPage from './pages/About/AboutPage';
import Navigation from './components/Navigation'
import HomePage from './pages/Home/HomePage'
import GuidesPage from './pages/Guides/GuidesPage'
import BankingPage from './pages/Banking/BankingPage'
import CommunityPage from './pages/Community/CommunityPage'
import SafetyPage from './pages/Safety/SafetyPage'
import VideoCallsPage from './pages/VideoCalls/VideoCallsPage'
import SocialMediaPage from './pages/SocialMedia/SocialMediaPage'
import ForumsPage from './pages/Community/ForumsPage'
import { useAuth } from './hooks/useAuth'
import { useState, useEffect } from 'react'

function App() {
  const { user } = useAuth()
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="bg-white min-h-screen">
      <Router>
        <Navigation setDarkMode={setDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/banking" element={<BankingPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/video-calls" element={<VideoCallsPage />} />
          <Route path="/social-media" element={<SocialMediaPage />} />
          <Route path="/forums" element={user ? <ForumsPage user={user} /> : <Navigate to="/login" />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
