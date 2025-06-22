import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Calendar, Instagram, Sparkles } from 'lucide-react';
import CalendarBooking from './CalendarBooking';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    consultationType: 'general'
  });
  const [showCalendar, setShowCalendar] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Create mailto link with company name
    const subject = encodeURIComponent(`${formData.subject} - ${formData.company || 'New Inquiry'}`);
    const body = encodeURIComponent(`
Hello INFRAORA Team,

Name: ${formData.name}
Company: ${formData.company || 'Not specified'}
Email: ${formData.email}
Consultation Type: ${formData.consultationType}

Project Details:
${formData.message}

Best regards,
${formData.name}
    `);
    
    window.location.href = `mailto:iinfrora@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      consultationType: 'general'
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
            <Sparkles className="text-cyan-400" size={16} />
            <span className="text-cyan-300 text-sm font-medium">Let's Connect</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with INFRORA for a free consultation and discover how we can help 
            your business thrive in the digital world through innovative solutions.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-slate-700/50">
            <button
              onClick={() => setShowCalendar(false)}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                !showCalendar
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Send Message
            </button>
            <button
              onClick={() => setShowCalendar(true)}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                showCalendar
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Schedule Meeting
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="group bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-cyan-400 transition-colors duration-300">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group/item">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:rotate-12 transition-all duration-300">
                    <Mail className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 group-hover/item:text-cyan-400 transition-colors duration-300">Email INFRAORA</h4>
                    <a href="mailto:iinfrora@gmail.com" className="text-cyan-300 text-lg mb-1 hover:text-cyan-200 transition-colors duration-300">
                      iinfrora@gmail.com
                    </a>
                    <p className="text-gray-400 text-sm">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:rotate-12 transition-all duration-300">
                    <Instagram className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 group-hover/item:text-cyan-400 transition-colors duration-300">Follow INFRAORA</h4>
                    <a 
                      href="https://www.instagram.com/infro_ra/profilecard/?igsh=M2k5NDM2cDR6cXFi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-300 text-lg mb-1 hover:text-cyan-200 transition-colors duration-300"
                    >
                      @infro_ra
                    </a>
                    <p className="text-gray-400 text-sm">Latest updates and insights</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/item">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:rotate-12 transition-all duration-300">
                    <Clock className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 group-hover/item:text-cyan-400 transition-colors duration-300">Business Hours</h4>
                    <p className="text-gray-300 text-lg mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300 text-lg">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form or Calendar */}
          <div>
            {showCalendar ? (
              <CalendarBooking />
            ) : (
              <div className="group bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-cyan-400 transition-colors duration-300">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group/input">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 group-hover/input:border-slate-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="group/input">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 group-hover/input:border-slate-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="group/input">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-3">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 group-hover/input:border-slate-500"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="group/input">
                    <label htmlFor="consultationType" className="block text-sm font-medium text-gray-300 mb-3">
                      Consultation Type
                    </label>
                    <select
                      id="consultationType"
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 group-hover/input:border-slate-500"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="ai-ml">AI/ML Solutions</option>
                      <option value="consulting">Strategic Consulting</option>
                      <option value="maintenance">Maintenance & Support</option>
                    </select>
                  </div>

                  <div className="group/input">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-3">
                      Project Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 group-hover/input:border-slate-500"
                      placeholder="Brief description of your project"
                    />
                  </div>

                  <div className="group/input">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none group-hover/input:border-slate-500"
                      placeholder="Tell us about your project goals, timeline, budget, and any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group/btn w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-5 rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-cyan-500/25"
                  >
                    Send Message to INFRAORA
                    <Send size={22} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;