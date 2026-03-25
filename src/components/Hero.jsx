import { motion } from 'framer-motion'
import profileImage from '../assets/profile.jpg'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full filter blur-[100px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Image */}
          <div className="relative inline-block mb-6 md:mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow opacity-75 blur-md"></div>
            <img
              src={profileImage}
              alt="Rohit Tiwari"
              className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white/20"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6">
            <span className="text-sm md:text-base">✨</span>
            <span className="text-xs md:text-sm">Available for Work & Internships</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
            <span className="text-gradient">Rohit Tiwari</span>
            <br />
            <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 block">Creative Web Developer</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Front-end Developer with a passion for design and visual aesthetics. 
            Currently interning at WingEducation, building beautiful, responsive web applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            <a
              href="#projects"
              className="group relative px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-sm md:text-base overflow-hidden transition-all duration-300 hover-glow"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <a
              href="#contact"
              className="px-6 md:px-8 py-2 md:py-3 glass-effect rounded-full text-white font-semibold text-sm md:text-base hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Tech Stack - Mobile Optimized */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 px-2">
            {['React', 'JavaScript', 'TailwindCSS', 'Node.js', 'MongoDB', 'Next.js'].map((tech) => (
              <span key={tech} className="glass-effect px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
                {tech}
              </span>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          >
            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-2xl">
              ↓
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero