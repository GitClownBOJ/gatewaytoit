import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  )
}