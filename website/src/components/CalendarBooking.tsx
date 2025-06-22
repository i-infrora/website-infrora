import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

const CalendarBooking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consultationType: 'general'
  });
  const [isBooked, setIsBooked] = useState(false);

  // Generate next 30 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date);
      }
    }
    return dates;
  };

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your calendar API
    console.log('Booking:', { ...formData, date: selectedDate, time: selectedTime });
    setIsBooked(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsBooked(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        consultationType: 'general'
      });
      setSelectedDate('');
      setSelectedTime('');
    }, 3000);
  };

  if (isBooked) {
    return (
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
          <CheckCircle className="text-white" size={40} />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Consultation Booked!</h3>
        <p className="text-gray-300 text-lg mb-2">
          Thank you for scheduling a consultation with INFRAORA.
        </p>
        <p className="text-cyan-400 font-semibold">
          We'll send you a confirmation email shortly with meeting details.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Calendar className="text-cyan-400" size={32} />
          Schedule Free Consultation
        </h3>
        <p className="text-gray-300">
          Book a 30-minute consultation to discuss your project requirements
        </p>
      </div>

      <form onSubmit={handleBooking} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              placeholder="Your company"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Consultation Type
          </label>
          <select
            name="consultationType"
            value={formData.consultationType}
            onChange={handleInputChange}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
          >
            <option value="general">General Consultation</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-app">Mobile App Development</option>
            <option value="ui-ux-design">UI/UX Design</option>
            <option value="ai-ml">AI/ML Solutions</option>
            <option value="consulting">Strategic Consulting</option>
          </select>
        </div>

        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Select Date *
          </label>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-h-48 overflow-y-auto">
            {generateDates().slice(0, 15).map((date) => {
              const dateStr = date.toISOString().split('T')[0];
              const isSelected = selectedDate === dateStr;
              return (
                <button
                  key={dateStr}
                  type="button"
                  onClick={() => setSelectedDate(dateStr)}
                  className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white scale-105'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                  }`}
                >
                  <div className="text-xs opacity-75">
                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                  </div>
                  <div className="font-bold">
                    {date.getDate()}
                  </div>
                  <div className="text-xs opacity-75">
                    {date.toLocaleDateString('en-US', { month: 'short' })}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Selection */}
        {selectedDate && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Select Time *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {availableTimes.map((time) => {
                const isSelected = selectedTime === time;
                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white scale-105'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                    }`}
                  >
                    <Clock size={16} />
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Project Details
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
            placeholder="Tell us about your project requirements, goals, and timeline..."
          />
        </div>

        <button
          type="submit"
          disabled={!selectedDate || !selectedTime || !formData.name || !formData.email}
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-5 rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-cyan-500/25"
        >
          <Calendar size={22} />
          Book Free Consultation
        </button>
      </form>
    </div>
  );
};

export default CalendarBooking;