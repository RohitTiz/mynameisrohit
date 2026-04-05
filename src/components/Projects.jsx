import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: "Online Course Selling Platform - WingEducation",
      description: "A fully functional online course marketplace built for WingEducation. Users can browse, filter, and purchase courses with a seamless checkout experience. Features include course listings, detailed course pages, user authentication, and responsive design.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Vite", "Netlify"],
      github: "https://github.com/RohitTiz/wingseven",
      live: "https://wingeducation.netlify.app/",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      features: [
        "🎓 Course browsing with categories",
        "📱 Fully responsive design",
        "🔐 User authentication",
        "💳 Course enrollment system",
        "⭐ Interactive UI components"
      ]
    },
    {
      title: "TripTrek - Travel Enquiry Management System",
      description: "A full-stack travel enquiry management platform where users can submit travel inquiries, explore destinations, and receive prompt responses. Built with Spring Boot backend and React frontend with complete CORS and cloud deployment.",
      tech: ["Spring Boot", "React.js", "PostgreSQL", "Tailwind CSS", "Render", "Vercel"],
      github: "https://github.com/RohitTiz/Triptrek-backend",
      live: "https://triptrek-frontend.vercel.app/",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
      features: [
        "✈️ Travel enquiry submission system",
        "📧 Real-time enquiry processing",
        "🗄️ PostgreSQL database with JPA",
        "🔗 CORS configured for secure API calls",
        "☁️ Deployed on Render + Vercel",
        "🐳 Docker containerization"
      ]
    }
  ]

  return (
    <section id="projects" className="py-16 md:py-20 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Featured <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-yellow-500 to-transparent mx-auto mt-4"></div>
          <p className="text-gray-500 mt-4 text-sm md:text-base max-w-2xl mx-auto">
            Here are some projects I've built — from internship work to personal full-stack applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="backdrop-blur-sm bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] group flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56 md:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                {/* Tech Tags Overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="backdrop-blur-md bg-black/50 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs text-gray-300 border border-gray-700">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="backdrop-blur-md bg-black/50 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs text-gray-300 border border-gray-700">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="backdrop-blur-md bg-black/60 p-2 rounded-full hover:bg-yellow-500/80 hover:scale-110 transition-all duration-300 text-lg"
                    aria-label="GitHub Repository"
                  >
                    🔗
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="backdrop-blur-md bg-black/60 p-2 rounded-full hover:bg-yellow-500/80 hover:scale-110 transition-all duration-300 text-lg"
                    aria-label="Live Demo"
                  >
                    🌐
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-black tracking-tight mb-3 text-white group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-yellow-500 font-bold mb-3 text-xs uppercase tracking-wide">
                    ✨ Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2 text-gray-400 text-xs">
                        <span className="text-yellow-500 text-sm">{feature.split(' ')[0]}</span>
                        <span>{feature.split(' ').slice(1).join(' ')}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full text-black font-bold text-sm uppercase tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:scale-105 text-center"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>🚀</span>
                      <span>Live Demo</span>
                      <span>→</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 border border-gray-700 rounded-full text-gray-300 font-medium text-sm uppercase tracking-wide hover:border-yellow-500 hover:text-yellow-400 hover:bg-yellow-500/5 transition-all duration-300 text-center"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>📁</span>
                      <span>Source Code</span>
                    </span>
                  </a>
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