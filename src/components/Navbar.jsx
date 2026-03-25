import { useState, useEffect } from 'react'
import ResumeViewer from './ResumeViewer'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showResume, setShowResume] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-black/50 border-b border-white/10 py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-xl md:text-2xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Rohit Tiwari
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors relative group text-sm lg:text-base"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button
                onClick={() => setShowResume(true)}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>📄</span>
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white text-2xl"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-md bg-black/90 border-b border-white/10 mt-2 py-4 px-4 rounded-lg mx-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false)
                  setShowResume(true)
                }}
                className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm"
              >
                📄 View Resume
              </button>
            </div>
          )}
        </div>
      </nav>

      <ResumeViewer isOpen={showResume} onClose={() => setShowResume(false)} />
    </>
  )
}

export default Navbar