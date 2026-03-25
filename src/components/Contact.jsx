import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for reaching out! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "rohittiwari06052004@gmail.com",
      link: "mailto:rohittiwari06052004@gmail.com"
    },
    {
      icon: "📞",
      title: "Phone",
      value: "+91-8178237707",
      link: "tel:+918178237707"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Greater Noida, India",
      link: null
    }
  ]

  const socialLinks = [
    { icon: "𝔾𝕚𝕥ℍ𝕦𝕓", link: "https://github.com/RohitTiz", label: "GitHub" },
    { icon: "𝕃𝕚𝕟𝕜𝕖𝕕𝕀𝕟", link: "https://www.linkedin.com/in/rohit-tiwari-8450b8286/", label: "LinkedIn" },
    { icon: "🐦", link: "https://twitter.com", label: "Twitter" }
  ]

  return (
    <section id="contact" className="py-16 md:py-20 relative overflow-hidden bg-black">
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
            Get In <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-yellow-500 to-transparent mx-auto mt-4"></div>
          <p className="text-gray-500 mt-4 text-sm md:text-base max-w-2xl mx-auto">
            Have a project in mind? Let's work together and create something amazing!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm bg-gray-900/30 border border-gray-800 rounded-xl p-5 md:p-8 hover:border-yellow-500/50 transition-all duration-300"
          >
            <h3 className="text-xl md:text-2xl font-black tracking-tight mb-4 md:mb-6 text-white">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-400 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 md:px-5 py-2.5 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/50 transition-all text-sm md:text-base text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-400 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 md:px-5 py-2.5 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/50 transition-all text-sm md:text-base text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-400 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 md:px-5 py-2.5 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/50 transition-all resize-none text-sm md:text-base text-white placeholder-gray-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full group relative px-6 md:px-8 py-3 md:py-3.5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg text-black font-bold text-sm md:text-base uppercase tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>✉️</span>
                  <span>Send Message</span>
                  <span>→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="backdrop-blur-sm bg-gray-900/30 border border-gray-800 rounded-xl p-5 md:p-8 hover:border-yellow-500/50 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-black tracking-tight mb-4 md:mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 md:space-x-4 group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center text-xl md:text-2xl flex-shrink-0 shadow-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">{info.title}</p>
                      {info.link ? (
                        <a href={info.link} className="text-white hover:text-yellow-400 transition-colors text-sm md:text-base break-all group-hover:text-yellow-400">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm md:text-base">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-sm bg-gray-900/30 border border-gray-800 rounded-xl p-5 md:p-8 hover:border-yellow-500/50 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-black tracking-tight mb-4 md:mb-6 text-white">
                Connect With Me
              </h3>
              <div className="flex space-x-3 md:space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 text-base md:text-xl text-gray-400 hover:text-yellow-400"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact