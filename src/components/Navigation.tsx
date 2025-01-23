import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Home, Shield, BookOpen, CreditCard, Video, Share2, Users, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = ({ setDarkMode, darkMode }) => {
  const [fontSize, setFontSize] = useState('medium')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const fontSizes = {
    small: 'text-base',
    medium: 'text-lg',
    large: 'text-xl',
    xlarge: 'text-2xl'
  }

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/guides', icon: BookOpen, label: 'Guides' },
    { path: '/banking', icon: CreditCard, label: 'Banking' },
    { path: '/safety', icon: Shield, label: 'Safety' },
    { path: '/video-calls', icon: Video, label: 'Video Calls' },
    { path: '/social-media', icon: Share2, label: 'Social Media' },
    { path: '/community', icon: Users, label: 'Community' },
    { path: '/about', icon: Info, label: 'About' }
  ]

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <nav className={`${fontSizes[fontSize]} glass fixed top-0 w-full z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center cursor-pointer"
            >
              <Home className="w-6 h-6 text-white" />
            </motion.div>
            <h1 className="text-2xl font-bold text-text-primary">
              Digital Inclusion Hub
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `relative flex items-center space-x-2 ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-text-secondary hover:text-primary'
                  } transition-colors`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors"
          >
            <svg
              className="w-6 h-6 text-text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setFontSize(prev => prev === 'xlarge' ? 'small' : 
                prev === 'large' ? 'xlarge' : 
                prev === 'medium' ? 'large' : 'medium')}
              className="p-2 rounded-lg hover:bg-surface transition-colors"
            >
              <span className="text-text-secondary">Aa</span>
            </button>
            
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 space-y-2"
            >
              {navItems.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `block p-4 rounded-lg ${
                      isActive 
                        ? 'bg-primary text-white' 
                        : 'bg-surface hover:bg-surface/50'
                    } transition-colors`
                  }
                >
                  <div className="flex items-center space-x-4">
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </div>
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation
