// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Globe, 
//   Palette, 
//   Smartphone, 
//   Shield, 
//   Zap, 
//   Layers 
// } from 'lucide-react';

// const Services: React.FC = () => {
//   const services = [
//     {
//       icon: Globe,
//       title: 'Custom Website Development',
//       description: 'Tailored websites for personal brands, businesses, and products with modern technologies and best practices.',
//       gradient: 'from-cyan-500 to-primary-600',
//     },
//     {
//       icon: Palette,
//       title: 'Innovative UI/UX Design',
//       description: 'Clean, user-focused, mobile-first designs that create exceptional user experiences and drive engagement.',
//       gradient: 'from-primary-600 to-purple-600',
//     },
//     {
//       icon: Smartphone,
//       title: 'Mobile App UI Prototypes',
//       description: 'Professional prototypes for Android/iOS applications using industry-standard tools like Figma and React Native.',
//       gradient: 'from-purple-600 to-pink-600',
//     },
//     {
//       icon: Shield,
//       title: 'Reliable Web Hosting Setup',
//       description: 'Complete setup and guidance for affordable, scalable hosting solutions that grow with your business.',
//       gradient: 'from-pink-600 to-red-600',
//     },
//     {
//       icon: Zap,
//       title: 'Responsive & Fast-Loading Sites',
//       description: 'Performance-optimized builds that work flawlessly across all screen sizes and load lightning-fast.',
//       gradient: 'from-red-600 to-orange-600',
//     },
//     {
//       icon: Layers,
//       title: 'Modular Web Components',
//       description: 'Reusable design blocks and components that accelerate future development and maintain consistency.',
//       gradient: 'from-orange-600 to-cyan-500',
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8 },
//     },
//   };

//   return (
//     <section id="services" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Our <span className="text-cyan-400">Services</span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Comprehensive digital solutions designed to elevate your online presence
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {services.map((service, index) => {
//             const IconComponent = service.icon;
//             return (
//               <motion.div
//                 key={index}
//                 className="group relative bg-gradient-to-br from-dark-800 to-dark-700 p-8 rounded-2xl shadow-xl border border-dark-600 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden"
//                 variants={itemVariants}
//                 whileHover={{ 
//                   scale: 1.05, 
//                   boxShadow: '0 20px 40px rgba(0, 188, 212, 0.2)',
//                   y: -10
//                 }}
//               >
//                 {/* Background Gradient Effect */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
//                 {/* Icon */}
//                 <motion.div
//                   className={`inline-flex p-4 bg-gradient-to-r ${service.gradient} rounded-xl mb-6 shadow-lg`}
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <IconComponent className="w-8 h-8 text-white" />
//                 </motion.div>

//                 {/* Content */}
//                 <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
//                   {service.title}
//                 </h3>
                
//                 <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
//                   {service.description}
//                 </p>

//                 {/* Hover Effect Line */}
//                 <motion.div
//                   className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} w-0 group-hover:w-full transition-all duration-500`}
//                 />
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-lg text-gray-300 mb-8">
//             Ready to transform your digital presence?
//           </p>
//           <motion.button
//             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//             className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//             whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 188, 212, 0.5)' }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Start Your Project
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from 'react';
import { Code, Smartphone, Cloud, Palette, Database, Shield, Zap, Globe, MessageSquare, Server, DollarSign, BarChart3, Headphones, TrendingUp } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: Palette,
      title: 'Innovative Designs',
      description: 'Craft modern, eye-catching designs tailored to your brand, ensuring a unique digital presence.',
      features: ['Brand Identity', 'UI/UX Design', 'Visual Systems', 'Creative Direction'],
      color: 'from-purple-400 to-purple-600',
      bgImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      icon: Server,
      title: 'Reliable Hosting',
      description: 'Secure and fast hosting services that keep your website running smoothly, with minimal downtime.',
      features: ['Cloud Infrastructure', '99.9% Uptime', 'SSL Security', '24/7 Monitoring'],
      color: 'from-orange-400 to-orange-600',
      bgImage: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      icon: DollarSign,
      title: 'Custom Solutions',
      description: 'Tailor-made web applications and solutions that cater to your specific business needs.',
      features: ['Custom Development', 'API Integration', 'Scalable Architecture', 'Business Logic'],
      color: 'from-green-400 to-green-600',
      bgImage: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      icon: Code,
      title: 'Seamless Integration',
      description: 'Integrate seamlessly with third-party tools and services, enhancing the functionality of your site.',
      features: ['Third-party APIs', 'Payment Gateways', 'CRM Integration', 'Automation Tools'],
      color: 'from-red-400 to-red-600',
      bgImage: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      icon: MessageSquare,
      title: 'Responsive Support',
      description: 'Experience quick and efficient customer support whenever you need assistance with your digital projects.',
      features: ['24/7 Support', 'Live Chat', 'Technical Assistance', 'Priority Response'],
      color: 'from-purple-400 to-purple-600',
      bgImage: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Develop systems that grow with your business, ensuring long-term scalability and performance.',
      features: ['Performance Optimization', 'Load Balancing', 'Auto Scaling', 'Growth Analytics'],
      color: 'from-yellow-400 to-yellow-600',
      bgImage: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      icon: Smartphone,
      title: 'Mobile Excellence',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS Development', 'Android Development', 'React Native', 'App Store Optimization'],
      color: 'from-blue-400 to-blue-600',
      bgImage: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      icon: Zap,
      title: 'AI-Powered Solutions',
      description: 'Intelligent automation and machine learning solutions for business optimization and growth.',
      features: ['Machine Learning', 'AI Automation', 'Predictive Analytics', 'Smart Algorithms'],
      color: 'from-cyan-400 to-cyan-600',
      bgImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
            <Zap className="text-cyan-400" size={16} />
            <span className="text-cyan-300 text-sm font-medium">Our Expertise</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Choose Smart. Build Fast.
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              INFRAORA's Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            and drive sustainable business growth through innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-700">
                <img
                  src={service.bgImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
              </div>

              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl"></div>
              </div>

              <div className="relative p-8 h-full flex flex-col">
                {/* Icon with Gradient Border and Hover Animation */}
                <div className="mb-6 flex items-center justify-center">
                  <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center">
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br ${service.color} group-hover:opacity-100 opacity-80 transition-all duration-500`}></div>
                    {/* Icon Background */}
                    <div className="absolute inset-0 m-[2px] rounded-2xl bg-slate-800 flex items-center justify-center"></div>
                    {/* Icon with hover rotate and scale */}
                    <div className="relative z-10 flex items-center justify-center w-full h-full transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                      <service.icon className="text-white" size={28} />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-500 flex-grow">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 group/feature">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover:scale-125 transition-all duration-300"></div>
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 group-hover/feature:text-cyan-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 via-transparent to-blue-900/20 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl"></div>
                {/* Hover Effect Line at Bottom */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} w-0 group-hover:w-full transition-all duration-500`} />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 max-w-4xl mx-auto group">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto group-hover:text-gray-200 transition-colors duration-300">
                Let's discuss how INFRAORA's innovative services can help you achieve your digital transformation goals and accelerate your business growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="group/btn bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MessageSquare size={20} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                Get Free Consultation
              </button>
              <button className="group/btn border-2 border-cyan-500 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3">
                <BarChart3 size={20} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;