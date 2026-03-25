import { useState } from 'react'
import { motion } from 'framer-motion'
import CertificateViewer from './CertificateViewer'

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState(null)

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

  // CORRECTED PDF PATHS - MATCHING YOUR ACTUAL FILE NAMES
  const certifications = [
    { 
      name: "Data Analysis Programme", 
      issuer: "GeeksforGeeks", 
      date: "May 2025", 
      pdfPath: "/certificates/dataA.pdf"  // Match your file: dataA.pdf
    },
    { 
      name: "Java Development with AI", 
      issuer: "HCL Tech", 
      date: "March 2025", 
      pdfPath: "/certificates/hcl.pdf"  // Match your file: hcl.pdf
    },
    { 
      name: "Microsoft Excel Course", 
      issuer: "Udemy", 
      date: "April 2024", 
      pdfPath: "/certificates/excel.pdf"  // Match your file: excel.pdf
    },
    { 
      name: "UI/UX, HTML & CSS Course", 
      issuer: "Udemy", 
      date: "March 2024", 
      pdfPath: "/certificates/uiux.pdf"  // Match your file: uiux.pdf
    }
  ]

  const handleCertificateClick = (cert) => {
    setSelectedCert(cert)
  }

  return (
    <>
      <section id="experience" className="py-16 md:py-20 relative overflow-hidden bg-black">
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
              Work <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-yellow-500 to-transparent mx-auto mt-4"></div>
          </motion.div>

          {/* Experience Timeline */}
          <div className="mb-12 md:mb-16">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-yellow-500 via-yellow-600 to-yellow-500"></div>

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
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 z-10">
                    <div className="absolute inset-0 rounded-full animate-ping bg-yellow-500 opacity-75"></div>
                  </div>

                  <div className="md:w-1/2 pl-6 md:pl-0">
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className={`backdrop-blur-sm bg-gray-900/30 border border-gray-800 p-4 md:p-6 rounded-xl ${
                        index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                      } hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)]`}
                    >
                      <div className="flex items-center space-x-2 text-yellow-500 mb-2 md:mb-3">
                        <span className="text-lg md:text-xl">💼</span>
                        <span className="text-xs md:text-sm font-semibold uppercase tracking-wide">{exp.company}</span>
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-black tracking-tight mb-2 text-white">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
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
                          <li key={i} className="text-gray-400 text-xs md:text-sm flex items-start space-x-2">
                            <span className="text-yellow-500 mt-1">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
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
            <h3 className="text-xl md:text-2xl font-black tracking-tight mb-6 md:mb-8 text-center">
              🏅 <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Achievements</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="backdrop-blur-sm bg-gray-900/30 border border-gray-800 p-3 md:p-4 rounded-lg hover:border-yellow-500/50 transition-all duration-300"
                >
                  <p className="text-gray-400 text-xs md:text-sm">{achievement}</p>
                </motion.div>
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
            <h3 className="text-xl md:text-2xl font-black tracking-tight mb-6 md:mb-8 text-center">
              📜 <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Certifications</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCertificateClick(cert)}
                  className="backdrop-blur-sm bg-gray-900/30 border border-gray-800 p-3 md:p-4 rounded-lg hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-xl md:text-2xl mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">📄</div>
                  <h4 className="font-bold text-sm md:text-base mb-1 text-white group-hover:text-yellow-400 transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-gray-500 text-xs">{cert.issuer}</p>
                  <p className="text-yellow-500/70 text-xs mt-1">{cert.date}</p>
                  <div className="mt-2 text-[10px] text-gray-600 group-hover:text-yellow-500 transition-colors flex items-center gap-1">
                    <span>🔍</span>
                    <span>Click to view</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CertificateViewer 
        isOpen={selectedCert !== null} 
        onClose={() => setSelectedCert(null)} 
        certificate={selectedCert}
      />
    </>
  )
}

export default Experience