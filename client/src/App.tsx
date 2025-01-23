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
import Footer from './components/Footer'

function App() {
  const { user } = useAuth()

  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Guides" element={<GuidesPage />} />
          <Route path="/Banking" element={<BankingPage />} />
          <Route path="/Community" element={<CommunityPage />} />
          <Route path="/Safety" element={<SafetyPage />} />
          <Route path="/Video-Calls" element={<VideoCallsPage />} />
          <Route path="/Social-Media" element={<SocialMediaPage />} />
          <Route path="/Forums" element={user ? <ForumsPage user={user} /> : <Navigate to="/login" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
