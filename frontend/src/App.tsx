import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { LoginPage } from './pages/LoginPage'
import StartLearningPage from './pages/StartLearningPage'
import BuildProjects from './pages/BuildProjects'
import CommunityPage from './pages/Community'
import PublicLayout from './layouts/PublicLayout'

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/start-learning" element={<StartLearningPage />} />
        <Route path="/build-projects" element={<BuildProjects />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default App
