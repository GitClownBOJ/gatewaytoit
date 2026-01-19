import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  
  // Mock auth state
  const isAuthenticated = false
  const currentPath = location.pathname

  const publicLinks = [
    { path: '/', label: 'Home' },
  ]

  const privateLinks = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/projects', label: 'Projects' },
    { path: '/community', label: 'Community' },
  ]

  const links = isAuthenticated ? privateLinks : publicLinks

  const handleNavigation = (path: string) => {
    navigate(path)
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span className="text-2xl font-bold text-white">
              Gateway to <span className="text-accent">IT</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`text-sm font-medium transition-colors ${
                  currentPath === link.path
                    ? 'text-blue-500'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            {!isAuthenticated && (
              <button
                onClick={() => handleNavigation('/login')}
                className="text-sm font-medium px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            )}
            
            {isAuthenticated && (
              <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Logout
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPath === link.path
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            {!isAuthenticated && (
              <button
                onClick={() => handleNavigation('/login')}
                className="block w-full text-left px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            )}
            
            {isAuthenticated && (
              <button className="w-full text-left px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}