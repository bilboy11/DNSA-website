import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Layout({ children }) {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 md:gap-3">
              <img src="/DNSA-BADGE2.png" alt="DNSA Logo" className="h-10 md:h-14 w-auto" />
              <span className="text-lg md:text-2xl font-bold truncate">De Noble Scholars Academy</span>
            </Link>
          
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-4 lg:space-x-6">
              <li>
                <Link 
                  to="/" 
                  className={`hover:text-blue-200 transition text-sm lg:text-base ${isActive('/') ? 'text-blue-200 border-b-2 border-blue-200' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/academics" 
                  className={`hover:text-blue-200 transition text-sm lg:text-base ${isActive('/academics') ? 'text-blue-200 border-b-2 border-blue-200' : ''}`}
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link 
                  to="/news" 
                  className={`hover:text-blue-200 transition text-sm lg:text-base ${isActive('/news') ? 'text-blue-200 border-b-2 border-blue-200' : ''}`}
                >
                  News
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`hover:text-blue-200 transition text-sm lg:text-base ${isActive('/contact') ? 'text-blue-200 border-b-2 border-blue-200' : ''}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <ul className="md:hidden flex flex-col space-y-3 mt-4 pb-4">
              <li>
                <Link 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block hover:text-blue-200 transition ${isActive('/') ? 'text-blue-200' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/academics" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block hover:text-blue-200 transition ${isActive('/academics') ? 'text-blue-200' : ''}`}
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link 
                  to="/news" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block hover:text-blue-200 transition ${isActive('/news') ? 'text-blue-200' : ''}`}
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block hover:text-blue-200 transition ${isActive('/contact') ? 'text-blue-200' : ''}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">De Noble Scholars Academy</h3>
              <p className="text-sm md:text-base text-gray-300">
                Empowering students to achieve their full potential through quality education and innovative learning.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-300">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/academics" className="hover:text-white">Academics</Link></li>
                <li><Link to="/news" className="hover:text-white">News & Events</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Contact Info</h3>
              <p className="text-sm md:text-base text-gray-300">
                No 13 Ayuba Madaki Close<br />
                Rigasa, Kaduna<br />
                Phone: 08035598876<br />
                Email: denoblescholarsacademy@gmail.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4">
            <div className="flex justify-center gap-6 mb-4">
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
                title="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
                title="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.498 24h-3.5v-5.461a1.68 1.68 0 0 0-1.315-.798c-.815 0-1.316.503-1.316 1.387v4.872h-3.5v-9.963h3.369v1.226h.047c.537-.823 1.512-1.745 3.277-1.745 2.817 0 4.944 1.745 4.944 5.512V24zM9.515 10.324H6.015V0h3.5v10.324zm-1.75-11.798c-1.121 0-2.018-.898-2.018-2.018C5.747.898 6.644 0 7.765 0s2.018.898 2.018 2.018-.898 2.018-2.018 2.018zM24 10.324h-3.5V5.463c0-1.387-.537-2.332-1.744-2.332-.95 0-1.513.636-1.744 1.272-.095.189-.119.451-.119.712v5.209h-3.5s.047-8.459 0-9.326h3.5v1.32h-.047c.427-.636 1.189-1.557 2.898-1.557 2.117 0 3.71 1.387 3.71 4.368V10.324z"/>
                </svg>
              </a>
            </div>
            <div className="text-center text-xs md:text-sm text-gray-400">
              <p>&copy; 2026 DNSA. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
