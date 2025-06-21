import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">INFRORA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building the digital infrastructure that powers tomorrow's innovations
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Mission */}
          <motion.div
            className="bg-gradient-to-br from-dark-800 to-dark-700 p-8 rounded-2xl shadow-xl border border-dark-600 hover:border-cyan-400/50 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 188, 212, 0.2)' }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-primary-600 rounded-lg mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To build strong, smart, and scalable foundations that empower innovators, 
              creators, and businesses to rise beyond limits. We believe in creating 
              digital solutions that don't just meet today's needs, but anticipate 
              tomorrow's challenges.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-gradient-to-br from-dark-800 to-dark-700 p-8 rounded-2xl shadow-xl border border-dark-600 hover:border-cyan-400/50 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 188, 212, 0.2)' }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-primary-600 to-cyan-500 rounded-lg mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the guiding light of digital evolution — where every breakthrough 
              begins with a strong foundation. We envision a future where technology 
              seamlessly integrates with human creativity to unlock unlimited potential.
            </p>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Drives Us
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="flex items-start space-x-4 p-6 bg-dark-800/50 rounded-xl border border-dark-600 hover:border-cyan-400/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Lightbulb className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Innovation</h4>
                <p className="text-gray-300">
                  We constantly push boundaries and explore new technologies to deliver 
                  cutting-edge solutions that set you apart from the competition.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4 p-6 bg-dark-800/50 rounded-xl border border-dark-600 hover:border-cyan-400/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2 bg-primary-500/20 rounded-lg">
                <Rocket className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Growth</h4>
                <p className="text-gray-300">
                  Every project is designed with scalability in mind, ensuring your 
                  digital presence can grow and evolve with your ambitions.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;