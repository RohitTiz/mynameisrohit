import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a')
      if (target && target.hash && target.hash.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    
    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p className="text-sm">© 2024 Rohit. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App