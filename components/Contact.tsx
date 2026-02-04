'use client';

import { useState } from 'react';
import Button from './Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Create WhatsApp message with all form data
    const whatsappMessage = `Hello, my name is ${formData.name}.\n\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;

    // Open WhatsApp with the message
    window.open(
      `https://wa.me/2348025044370?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    );

    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 3000);
  };
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
            <section id="contact" className="scroll-mt-24">
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg">
            Glamour Hair Accessories
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/2347040558255?text=Hi!%20I'm%20interested%20in%20your%20hair%20accessories"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-green-500"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-600 mb-1">Chat on WhatsApp</p>
                <p className="text-lg font-semibold text-gray-800 truncate">234 704 055 8255</p>
              </div>
            </div>
          </a>

          {/* Call Card */}
          <a
            href="tel:+2347040558255"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-500"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-600 mb-1">Call Us Now</p>
                <p className="text-lg font-semibold text-gray-800 truncate">+234 704 055 8255</p>
              </div>
            </div>
          </a>

        </div>

        {/* Location Card */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Visit Our Shop</p>
              <p className="text-gray-800 font-medium">Shop 45, Balogun Market</p>
              <p className="text-gray-800">Lagos Island, Lagos</p>
              <p className="text-sm text-gray-600 mt-2">Mon - Sat: 9AM - 6PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>

          {submitted ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-green-800 font-semibold text-lg">Message Sent!</p>
              <p className="text-green-700 mt-1">We'll get back to you soon</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-base">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 text-base">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none"
                  placeholder="080 1234 5678"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-base">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button
                variant="Primary"
                type="submit"
                className="w-full font-semibold h-[50] rounded-lg transition-colors text-lg shadow-md"
              >
                Send Message
              </Button>
            </form>
          )}
        </div>

      </div>
    </div>
    </section>
  );
}