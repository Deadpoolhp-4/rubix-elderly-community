import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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

function App() {
  const { user } = useAuth()

  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/banking" element={<BankingPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/video-calls" element={<VideoCallsPage />} />
          <Route path="/social-media" element={<SocialMediaPage />} />
          <Route path="/forums" element={user ? <ForumsPage user={user} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
