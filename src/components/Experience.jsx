import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: "Website Developer Intern",
      company: "WingEducation",
      location: "Remote",
      period: "July 2025 - Present",
      description: [
        "Currently developing and maintaining websites for WingEducation and its child companies",
        "Focusing on responsive design and optimized user experience using React and Tailwind CSS",
        "Building reusable components and implementing new pages based on UI/UX designs",
        "Participating in daily meetings to track progress and align with team goals"
      ]
    },
    {
      title: "UI/UX Designer & Developer",
      company: "Freelance / Personal Projects",
      location: "Remote",
      period: "2024 - Present",
      description: [
        "Created multiple website prototypes and mobile designs using Figma",
        "Developed responsive portfolio websites with GSAP animations",
        "Applied painting background to enhance visual aesthetics in web projects",
        "Participated in various hackathons and design challenges"
      ]
    }
  ]

  const achievements = [
    "🏆 Ranked Top 5 in SIH Internal Hackathon - Digital Gardens Project",
    "🎨 Design Team Lead in school and college - Creative Direction",
    "🎪 Backstage Team Member for college events - Management & Coordination",
    "📊 Completed Data Analytics Program by GeeksforGeeks"
  ]

  const certifications = [
    { name: "Data Analysis Programme", issuer: "GeeksforGeeks", date: "May 2025", link: "https://shorturl.at/ne2nn" },
    { name: "Java Development with AI", issuer: "HCL Tech", date: "March 2025", link: "https://shorturl.at/LejxM" },
    { name: "Microsoft Excel Course", issuer: "Udemy", date: "April 2024", link: "https://shorturl.at/TzxUu" },
    { name: "UI/UX, HTML & CSS Course", issuer: "Udemy", date: "March 2024", link: "https://shorturl.at/vhi4Y" }
  ]

  return (
    <section id="experience" className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-12 md:mb-16">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-8 md:mb-12 flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10">
                  <div className="absolute inset-0 rounded-full animate-ping bg-purple-500 opacity-75"></div>
                </div>

                <div className="md:w-1/2 pl-6 md:pl-0">
                  <div className={`glass-effect p-4 md:p-6 rounded-xl ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } hover-glow`}>
                    <div className="flex items-center space-x-2 text-purple-400 mb-2 md:mb-3">
                      <span className="text-lg md:text-xl">💼</span>
                      <span className="text-xs md:text-sm font-semibold">{exp.company}</span>
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
                      <div className="flex items-center space-x-1">
                        <span>📅</span>
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>📍</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-1.5 md:space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 text-xs md:text-sm flex items-start space-x-2">
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

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
            🏅 <span className="text-gradient">Achievements</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass-effect p-3 md:p-4 rounded-lg">
                <p className="text-gray-300 text-xs md:text-sm">{achievement}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
            📜 <span className="text-gradient">Certifications</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-3 md:p-4 rounded-lg hover-glow transition-all"
              >
                <div className="text-xl md:text-2xl mb-1 md:mb-2">📄</div>
                <h4 className="font-semibold text-sm md:text-base mb-1">{cert.name}</h4>
                <p className="text-gray-400 text-xs">{cert.issuer}</p>
                <p className="text-purple-400 text-xs mt-1">{cert.date}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience