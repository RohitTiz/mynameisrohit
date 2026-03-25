import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
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
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-6 md:py-8 text-center text-gray-400 border-t border-white/10">
        <p className="text-xs md:text-sm">© 2024 Rohit Tiwari. All rights reserved.</p>
        <p className="text-xs text-gray-500 mt-1">Built with React & TailwindCSS</p>
      </footer>
    </div>
  )
}

export default App