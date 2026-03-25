import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time analytics dashboard with AI insights and predictive analytics. Features interactive charts and data visualization.",
      tech: ["React", "D3.js", "Python", "TensorFlow"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Project+1"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with real-time inventory, payment integration, and admin dashboard.",
      tech: ["Next.js", "TailwindCSS", "Stripe", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Project+2"
    },
    {
      title: "Social Media App",
      description: "Modern social media platform with real-time messaging, posts, stories, and user authentication.",
      tech: ["React Native", "Node.js", "Socket.io", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Project+3"
    },
    {
      title: "Portfolio Template",
      description: "Modern, customizable portfolio template for developers and designers. Fully responsive with dark mode.",
      tech: ["React", "Framer Motion", "TailwindCSS"],
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Project+4"
    }
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl overflow-hidden hover-glow cursor-pointer group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors text-xl">
                      🔗
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors text-xl">
                      🌐
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="glass-effect text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-2 text-purple-400">
                  <span>💻</span>
                  <span className="text-sm">View Project Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects