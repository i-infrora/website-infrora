import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'infrora.studios@gmail.com',
      href: 'mailto:infrora.studios@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 XXX XXX XXX',
      href: 'tel:+94XXXXXXXXX',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sri Lanka',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-900 to-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your digital transformation? Let's discuss your project and bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-dark-800 to-dark-700 p-8 rounded-2xl shadow-xl border border-dark-600">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-dark-600/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-primary-600 rounded-lg group-hover:shadow-lg transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{item.label}</p>
                        <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Schedule a Call */}
            <motion.div
              className="bg-gradient-to-br from-cyan-500/10 to-primary-600/10 p-8 rounded-2xl border border-cyan-400/20"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Schedule a Consultation</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Book a free consultation call to discuss your project requirements and get a personalized quote.
              </p>
              <motion.button
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 188, 212, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://cal.com', '_blank')}
              >
                Book a Call
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gradient-to-br from-dark-800 to-dark-700 p-8 rounded-2xl shadow-xl border border-dark-600"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="John"
                  />
                </motion.div>
                
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Doe"
                  />
                </motion.div>
              </div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300">
                  <option value="">Select a service</option>
                  <option value="website">Website Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="mobile">Mobile App Prototype</option>
                  <option value="hosting">Web Hosting Setup</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 188, 212, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Testimonials Placeholder */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-dark-800 to-dark-700 p-8 rounded-2xl shadow-xl border border-dark-600 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Client Testimonials</h3>
            <p className="text-gray-300 text-lg">
              "Client feedback coming soon – our journey has just begun!"
            </p>
            <div className="mt-6 flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-dark-600 rounded-full animate-pulse" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;