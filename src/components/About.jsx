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
    <section id="about" className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              I'm Rohit Tiwari,
              <br />
              <span className="text-gradient">Frontend Developer & Designer</span>
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              I'm a fourth-year engineering student currently interning as a Website Developer at WingEducation. 
              My background in painting has nurtured a keen eye for design and visual aesthetics, which I actively 
              apply to my web projects.
            </p>
            <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              I've completed a certified UI/UX course and have created multiple website prototypes. 
              I bring a creative mindset, strong coding skills, and a collaborative attitude - ideal for building 
              user-friendly, visually appealing web applications.
            </p>
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">10+</div>
                <div className="text-xs md:text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">1+</div>
                <div className="text-xs md:text-sm text-gray-400">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">5+</div>
                <div className="text-xs md:text-sm text-gray-400">Certifications</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-effect p-4 md:p-6 rounded-xl hover-glow cursor-pointer"
              >
                <div className="mb-2 md:mb-4 text-3xl md:text-4xl">{feature.icon}</div>
                <h4 className="text-base md:text-xl font-semibold mb-1 md:mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-xs md:text-sm">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About