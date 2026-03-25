import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Lead development of multiple React-based applications serving 1M+ users",
        "Implemented performance optimizations reducing load time by 40%",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      location: "New York, NY",
      period: "2020 - 2022",
      description: [
        "Built RESTful APIs using Node.js and Express, serving 500k+ requests daily",
        "Developed responsive frontend components with React and TailwindCSS",
        "Collaborated with design team to implement pixel-perfect UI/UX"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "StartupHub",
      location: "Austin, TX",
      period: "2019 - 2020",
      description: [
        "Assisted in developing client websites using modern web technologies",
        "Created reusable component libraries improving development efficiency",
        "Participated in agile development sprints and daily stand-ups"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10">
                <div className="absolute inset-0 rounded-full animate-ping bg-purple-500 opacity-75"></div>
              </div>

              <div className="md:w-1/2 pl-8 md:pl-0">
                <div className={`glass-effect p-6 rounded-xl ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                } hover-glow`}>
                  <div className="flex items-center space-x-2 text-purple-400 mb-3">
                    <span className="text-xl">💼</span>
                    <span className="text-sm font-semibold">{exp.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <span>📅</span>
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>📍</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start space-x-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience