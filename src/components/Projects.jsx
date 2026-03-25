import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: "Online Course Selling Platform",
      description: "Fully responsive course-selling website built for WingEducation assessment. Pixel-perfect implementation from Figma design with interactive UI elements.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Figma"],
      github: "https://github.com/RohitTiz/wingsix",
      live: "https://assessment-wings-education-bxm.vercel.app/",
      image: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Course+Platform"
    },
    {
      title: "Personal Portfolio - La Flame Theme",
      description: "Creative portfolio inspired by Travis Scott's aesthetic. Features GSAP animations, scroll transitions, and immersive design.",
      tech: ["HTML", "CSS", "JavaScript", "GSAP"],
      github: "https://github.com/RohitTiz/Travis-portfolio",
      live: "https://rohittiz.github.io/Travis-portfolio/",
      image: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=La+Flame+Portfolio"
    },
    {
      title: "Digital Gardens - SIH Hackathon",
      description: "Top 5 in SIH Internal Hackathon. Website featuring database of plant species with custom UI/UX design and React implementation.",
      tech: ["React.js", "TailwindCSS", "Node.js", "MongoDB"],
      github: "https://github.com/RohitTiz",
      live: "#",
      image: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Digital+Gardens"
    },
    {
      title: "UI/UX Design Projects",
      description: "Multiple website prototypes and mobile designs created during UI/UX certification course using Figma.",
      tech: ["Figma", "Wireframing", "Prototyping", "User Research"],
      github: "https://github.com/RohitTiz",
      live: "#",
      image: "https://via.placeholder.com/600x400/1a1a2e/ffffff?text=UI+UX+Projects"
    }
  ]

  return (
    <section id="projects" className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-3 md:mt-4 text-sm md:text-base max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl overflow-hidden hover-glow cursor-pointer group"
            >
              <div className="relative overflow-hidden h-40 md:h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3 md:p-4">
                  <div className="flex space-x-3 md:space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors text-lg md:text-xl">
                      🔗
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors text-lg md:text-xl">
                      🌐
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="glass-effect text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-2 text-purple-400 text-xs md:text-sm">
                  <span>💻</span>
                  <span>View Project Details</span>
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