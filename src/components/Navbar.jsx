import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { FaTimes } from 'react-icons/fa'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 dark:bg-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
            WB
          </div>
          <span className="font-bold text-xl hidden sm:inline">WAHEED BASHIR</span>
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            HOME
          </Link>
          <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            ABOUT
          </Link>
          <Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            SERVICES
          </Link>
          <Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            MY PROJECT
          </Link>
          <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            CONTACT
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4"
        >
          <div className="flex flex-col space-y-3 pb-4">
            <Link 
              to="/" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              to="/services" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link 
              to="/projects" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              MY PROJECT
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar