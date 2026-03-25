import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import profileImage from '../assets/profile.jpg'

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0)
  const containerRef = useRef(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig)
  
  const textX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-40, 40]), springConfig)
  const textY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-40, 40]), springConfig)
  
  const images = [profileImage, profileImage, profileImage]

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const normalizedX = (e.clientX - centerX) / (rect.width / 2)
    const normalizedY = (e.clientY - centerY) / (rect.height / 2)
    mouseX.set(Math.min(Math.max(normalizedX, -0.4), 0.4))
    mouseY.set(Math.min(Math.max(normalizedY, -0.4), 0.4))
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-16"
      style={{ perspective: "1000px" }}
    >
      {/* Minimal Grey Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-800/20 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-900/30 rounded-full filter blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Large Moving Text Background */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        style={{ x: textX, y: textY }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[8rem] md:text-[12rem] lg:text-[15rem] font-black whitespace-nowrap text-gray-900/20 select-none tracking-wider">
              DEVELOPER
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center translate-x-20 translate-y-20">
            <div className="text-[6rem] md:text-[9rem] lg:text-[12rem] font-black whitespace-nowrap text-gray-800/15 select-none tracking-wide">
              CREATIVE
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center -translate-x-32 -translate-y-16">
            <div className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-black whitespace-nowrap text-gray-800/10 select-none">
              DESIGNER
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image with Yellow Glow */}
          <motion.div
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative inline-block mb-8"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-yellow-400 opacity-20 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <div className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-2 border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
              <img
                src={images[imageIndex]}
                alt="Rohit Tiwari"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 backdrop-blur-sm bg-gray-900/50 border border-gray-800 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            <span className="text-xs text-gray-400 tracking-wide">AVAILABLE FOR WORK</span>
          </motion.div>

          {/* Name with Yellow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="text-white">ROHIT</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                TIWARI
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-[2px] bg-yellow-500/50"></div>
              <p className="text-gray-400 text-base md:text-lg tracking-wide">CREATIVE WEB DEVELOPER</p>
              <div className="w-12 h-[2px] bg-yellow-500/50"></div>
            </div>
          </motion.div>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-sm md:text-base max-w-lg mx-auto mt-6 leading-relaxed"
          >
            Building digital experiences with code & creativity.
            <br />
            Currently crafting at <span className="text-yellow-500/80">WingEducation</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-yellow-500 rounded-full text-black font-bold tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:scale-105 text-sm uppercase"
            >
              <span className="relative z-10">Explore Work →</span>
              <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-700 rounded-full text-gray-300 font-medium text-sm uppercase tracking-wide hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-12"
          >
            {['REACT', 'NODE.JS', 'TAILWIND', 'NEXT.JS', 'MONGO DB'].map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs text-gray-500 tracking-wider">
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-gray-600 tracking-wider">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-yellow-500 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero