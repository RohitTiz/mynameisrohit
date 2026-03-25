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
    <section id="contact" className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-3 md:mt-4 text-sm md:text-base max-w-2xl mx-auto px-4">
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
            className="glass-effect rounded-xl p-5 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-sm md:text-base"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-sm md:text-base"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none text-sm md:text-base"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full group relative px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold text-sm md:text-base overflow-hidden transition-all duration-300 hover-glow"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>✉️</span>
                  <span>Send Message</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
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
            <div className="glass-effect rounded-xl p-5 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h3>
              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-400">{info.title}</p>
                      {info.link ? (
                        <a href={info.link} className="text-white hover:text-purple-400 transition-colors text-sm md:text-base break-all">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm md:text-base">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-xl p-5 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Connect With Me</h3>
              <div className="flex space-x-3 md:space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-effect flex items-center justify-center hover:bg-purple-500/20 transition-all duration-300 hover-glow text-base md:text-xl"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
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