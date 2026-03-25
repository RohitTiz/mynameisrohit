import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: "💻",
      skills: ["HTML5", "CSS3", "TailwindCSS", "JavaScript", "React.js", "Next.js", "Node.js", "MongoDB"]
    },
    {
      title: "Data Analysis",
      icon: "📊",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "PowerBI", "Excel", "SQL", "Web Scraping"]
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      skills: ["Figma", "Wireframes", "Prototyping", "Mobile Design", "Web Design", "User Research"]
    },
    {
      title: "Technical",
      icon: "⚙️",
      skills: ["Data Structures", "Algorithms", "Java Core", "Networking", "Git/GitHub"]
    }
  ]

  return (
    <section id="skills" className="py-16 md:py-20 relative overflow-hidden bg-black">
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
            My <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-yellow-500 to-transparent mx-auto mt-4"></div>
          <p className="text-gray-500 mt-4 text-sm md:text-base max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="backdrop-blur-sm bg-gray-900/30 border border-gray-800 rounded-xl p-5 md:p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] group"
            >
              {/* Icon with hover effect */}
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              
              {/* Category Title */}
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-5 text-white group-hover:text-yellow-400 transition-colors">
                {category.title}
              </h3>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gray-800/50 rounded-full text-xs md:text-sm text-gray-400 hover:bg-yellow-500/20 hover:text-yellow-400 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-yellow-500/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills