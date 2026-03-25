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
    <section id="skills" className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-3 md:mt-4 text-sm md:text-base max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-4 md:p-6 hover-glow"
            >
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">{category.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 md:px-3 md:py-1.5 bg-white/5 rounded-full text-xs md:text-sm text-gray-300 hover:bg-purple-500/20 transition-colors"
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