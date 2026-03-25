import { motion } from 'framer-motion'
import profileImage from '../assets/profile.jpg'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full filter blur-[100px] opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500 rounded-full filter blur-[150px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow opacity-75 blur-md"></div>
            <img
              src={profileImage}
              alt="Rohit"
              className="relative w-32 h-32 rounded-full object-cover border-4 border-white/20"
            />
          </div>

          <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-4 py-2 mb-6">
            <span className="text-xl">✨</span>
            <span className="text-sm">Available for work</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Creative Developer</span>
            <br />
            <span className="text-white">& Design Enthusiast</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I craft beautiful, interactive web experiences that blend stunning design with cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover-glow"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 glass-effect rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {['React', 'Node.js', 'TypeScript', 'TailwindCSS', 'Next.js'].map((tech) => (
              <span key={tech} className="glass-effect px-4 py-2 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
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