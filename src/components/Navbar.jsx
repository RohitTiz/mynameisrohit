import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'backdrop-blur-md bg-black/80 border-b border-white/10 py-3 md:py-4' 
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a 
              href="#home" 
              className="text-xl md:text-2xl font-black tracking-tight group"
            >
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Rohit Tiwari
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group text-sm lg:text-base font-medium"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowResume(true)}
                className="px-5 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full text-black font-bold uppercase tracking-wide hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <span className="text-lg">📄</span>
                <span>Resume</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-yellow-400 text-2xl transition-colors duration-300"
            >
              {isOpen ? '✕' : '☰'}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-black/95 border border-white/10 mt-2 py-4 px-4 rounded-xl mx-4"
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setIsOpen(false)
                    setShowResume(true)
                  }}
                  className="w-full mt-3 px-4 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full text-black font-bold uppercase tracking-wide hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <span className="text-lg">📄</span>
                  <span>View Resume</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      <ResumeViewer isOpen={showResume} onClose={() => setShowResume(false)} />
    </>
  )
}

export default Navbar