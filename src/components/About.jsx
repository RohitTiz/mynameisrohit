import { motion } from 'framer-motion'

const About = () => {
  const features = [
    {
      icon: "💻",
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code is my passion."
    },
    {
      icon: "👥",
      title: "Team Player",
      description: "Excellent collaboration skills with designers and developers."
    },
    {
      icon: "❤️",
      title: "User First",
      description: "Creating intuitive experiences that users love and enjoy."
    },
    {
      icon: "🏆",
      title: "Quality Focus",
      description: "Attention to detail and pixel-perfect implementations."
    }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">
              I'm Rohit, a passionate
              <br />
              <span className="text-gradient">Full Stack Developer</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 4 years of experience in web development, I've helped numerous businesses
              transform their ideas into stunning digital solutions. I specialize in creating
              responsive, performant, and user-friendly applications that drive results.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My journey in tech started with a curiosity about how things work on the web,
              and it has evolved into a career where I get to solve complex problems and
              create meaningful experiences every day.
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">4+</div>
                <div className="text-sm text-gray-400">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-xl hover-glow cursor-pointer"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About