import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">
            <span className="text-gradient">Rohit</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors text-xl">
                𝔾𝕚𝕥ℍ𝕦𝕓
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors text-xl">
                𝕃𝕚𝕟𝕜𝕖𝕕𝕀𝕟
              </a>
              <a href="mailto:rohit@example.com" className="hover:text-purple-400 transition-colors text-xl">
                📧
              </a>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none text-2xl"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-effect mt-2 py-4 px-4 rounded-lg mx-4">
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
            <div className="flex space-x-4 pt-4 border-t border-white/10 mt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors text-xl">
                𝔾𝕚𝕥ℍ𝕦𝕓
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors text-xl">
                𝕃𝕚𝕟𝕜𝕖𝕕𝕀𝕟
              </a>
              <a href="mailto:rohit@example.com" className="hover:text-purple-400 transition-colors text-xl">
                📧
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar