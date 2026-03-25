import { motion } from 'framer-motion'

const About = () => {
  const features = [
    {
      icon: "🎨",
      title: "Design Background",
      description: "Painting background gives me a keen eye for design and visual aesthetics in web projects."
    },
    {
      icon: "💻",
      title: "Frontend Expert",
      description: "Strong proficiency in HTML, CSS, JavaScript, React, and modern frameworks."
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Completed Data Analytics training with Python, SQL, Excel, and PowerBI."
    },
    {
      icon: "🎯",
      title: "UI/UX Certified",
      description: "Certified in UI/UX design with expertise in Figma, wireframes, and prototypes."
    }
  ]

  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden bg-black">
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
            About <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-yellow-500 to-transparent mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-4 md:mb-6">
              I'm Rohit Tiwari,
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Frontend Developer & Designer
              </span>
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
              I'm a fourth-year engineering student currently interning as a Website Developer at WingEducation. 
              My background in painting has nurtured a keen eye for design and visual aesthetics, which I actively 
              apply to my web projects.
            </p>
            <p className="text-gray-400 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
              I've completed a certified UI/UX course and have created multiple website prototypes. 
              I bring a creative mindset, strong coding skills, and a collaborative attitude - ideal for building 
              user-friendly, visually appealing web applications.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  1+
                </div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide mt-1">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide mt-1">Certifications</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="backdrop-blur-sm bg-gray-900/30 border border-gray-800 rounded-xl p-5 md:p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] cursor-pointer group"
              >
                <div className="mb-3 md:mb-4 text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About