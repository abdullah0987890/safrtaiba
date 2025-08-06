
'use client';

import { useState } from 'react';

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      city: 'Lahore',
      address: 'Main Boulevard, Gulberg III, Lahore, Punjab',
      phone: '+92 42 3587 4521',
      email: 'lahore@umrahme.com',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM'
    },
    {
      city: 'Karachi',
      address: 'Shahrah-e-Faisal, Karachi, Sindh',
      phone: '+92 21 3452 7890',
      email: 'karachi@umrahme.com',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM'
    },
    {
      city: 'Islamabad',
      address: 'Blue Area, F-7 Markaz, Islamabad',
      phone: '+92 51 2345 6789',
      email: 'islamabad@umrahme.com',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <div className="min-h-screen">
      <div 
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://readdy.ai/api/search-image?query=Modern%20Islamic%20architecture%20building%20with%20elegant%20design%2C%20professional%20office%20building%20with%20traditional%20Islamic%20elements%2C%20warm%20lighting%2C%20contemporary%20design%2C%20business%20environment%2C%20sophisticated%20architecture%2C%20peaceful%20atmosphere&width=1920&height=600&seq=contacthero&orientation=landscape)`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with our experienced team. We're here to help you plan your perfect Umrah journey 
            and answer any questions you may have about our services.
          </p>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our Umrah packages or need assistance with your booking? 
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-8"
                    >
                      <option value="">Select a subject</option>
                      <option value="umrah-packages">Umrah Packages</option>
                      <option value="qura-andazi">Qura Andazi</option>
                      <option value="booking-inquiry">Booking Inquiry</option>
                      <option value="payment-issue">Payment Issue</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="complaint">Complaint</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                    isSubmitting 
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Offices</h2>
              <p className="text-gray-600 mb-8">
                Visit any of our offices for in-person consultation and assistance with your Umrah planning.
              </p>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{office.city} Office</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                          <i className="ri-map-pin-line text-green-600"></i>
                        </div>
                        <p className="text-gray-600">{office.address}</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 flex items-center justify-center mr-3">
                          <i className="ri-phone-line text-green-600"></i>
                        </div>
                        <p className="text-gray-600">{office.phone}</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 flex items-center justify-center mr-3">
                          <i className="ri-mail-line text-green-600"></i>
                        </div>
                        <p className="text-gray-600">{office.email}</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-5 h-5 flex items-center justify-center mr-3">
                          <i className="ri-time-line text-green-600"></i>
                        </div>
                        <p className="text-gray-600">{office.hours}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Emergency Contact</h3>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <p className="text-gray-700 mb-2">
                    <strong>24/7 Emergency Helpline:</strong>
                  </p>
                  <p className="text-2xl font-bold text-red-600">+92 300 UMRAH ME</p>
                  <p className="text-sm text-gray-600 mt-2">
                    For urgent assistance during your pilgrimage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us on the Map</h2>
            <p className="text-gray-600">Our main office location in Lahore</p>
          </div>
          
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.3851788933396!2d74.3436830152588!3d31.522473381410206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904db0dcbf6b5%3A0x3b3d1a0aa2d7b3be!2sGulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
