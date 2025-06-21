import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Palette, 
  Smartphone, 
  Shield, 
  Zap, 
  Layers 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Custom Website Development',
      description: 'Tailored websites for personal brands, businesses, and products with modern technologies and best practices.',
      gradient: 'from-cyan-500 to-primary-600',
    },
    {
      icon: Palette,
      title: 'Innovative UI/UX Design',
      description: 'Clean, user-focused, mobile-first designs that create exceptional user experiences and drive engagement.',
      gradient: 'from-primary-600 to-purple-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile App UI Prototypes',
      description: 'Professional prototypes for Android/iOS applications using industry-standard tools like Figma and React Native.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: Shield,
      title: 'Reliable Web Hosting Setup',
      description: 'Complete setup and guidance for affordable, scalable hosting solutions that grow with your business.',
      gradient: 'from-pink-600 to-red-600',
    },
    {
      icon: Zap,
      title: 'Responsive & Fast-Loading Sites',
      description: 'Performance-optimized builds that work flawlessly across all screen sizes and load lightning-fast.',
      gradient: 'from-red-600 to-orange-600',
    },
    {
      icon: Layers,
      title: 'Modular Web Components',
      description: 'Reusable design blocks and components that accelerate future development and maintain consistency.',
      gradient: 'from-orange-600 to-cyan-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="services" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your online presence
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-dark-800 to-dark-700 p-8 rounded-2xl shadow-xl border border-dark-600 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 20px 40px rgba(0, 188, 212, 0.2)',
                  y: -10
                }}
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 bg-gradient-to-r ${service.gradient} rounded-xl mb-6 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} w-0 group-hover:w-full transition-all duration-500`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 mb-8">
            Ready to transform your digital presence?
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 188, 212, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;