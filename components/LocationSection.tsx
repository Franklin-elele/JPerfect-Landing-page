'use client';

import { useState } from 'react';

export default function LocationSection() {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Abia Plaza, Abule-Ado (near Satellite Town)
  const shopCoordinates = {
    lat: 6.453056,
    lng: 3.395833
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${shopCoordinates.lat},${shopCoordinates.lng}`;
  const phoneNumber = '+2347040558255'; // Replace with actual number

  return (
    <section id="location" className="scroll-mt-24 w-full bg-gradient-to-b from-orange-50 to-rose-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Our Location
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
           We are located at Abia Plaza, Abule-Ado. Follow these simple steps to reach JPerfect shop.
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative w-full h-64 sm:h-80 bg-gray-100">
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-3 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600 text-sm">Loading map...</p>
                </div>
              </div>
            )}
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0!2d${shopCoordinates.lng}!3d${shopCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnMjcuOCJOIDPCsDIyJzQ1LjEiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setMapLoaded(true)}
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* Directions Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
          <div className="flex items-start mb-5">
            <svg className="w-7 h-7 text-rose-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                How to Find Us
              </h3>
              <p className="text-base text-gray-600">
                Follow these landmarks to reach our shop easily
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {/* Step 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-rose-600 font-bold text-lg">1</span>
              </div>
              <div className="flex-1 pt-1">
                <p className="text-lg text-gray-800 leading-relaxed">
                  From <strong className="text-gray-900">Mandilas, Abule-Ado</strong>, take a bike to <strong className="text-gray-900">Abia Plaza</strong>
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-rose-600 font-bold text-lg">2</span>
              </div>
              <div className="flex-1 pt-1">
                <p className="text-lg text-gray-800 leading-relaxed">
                  Walk <strong className="text-gray-900">straight down from the gate</strong>
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-rose-600 font-bold text-lg">3</span>
              </div>
              <div className="flex-1 pt-1">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <strong className="text-gray-900">Turn left</strong> and walk for about <strong className="text-gray-900">1 minute</strong>
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-rose-600 font-bold text-lg">4</span>
              </div>
              <div className="flex-1 pt-1">
                <p className="text-lg text-gray-800 leading-relaxed">
                  <strong className="text-gray-900">JPerfect shop</strong> will be right there on your left
                </p>
              </div>
            </div>
          </div>

          {/* Helpful Note */}
          <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-base text-amber-900 leading-relaxed">
                <strong className="font-semibold">Helpful tip:</strong> If you get confused, ask any trader for JPerfect shop. Everyone knows us!
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Google Maps Button */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-rose-500 hover:bg-[rose-600] text-white font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-lg">Open in Google Maps</span>
          </a>

          {/* Call Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="group bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-3 border-2 border-gray-200"
          >
            <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-lg">Call for Directions</span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-base mb-2">
            Open Monday to Saturday, 9am to 6pm
          </p>
          <a href={`tel:${phoneNumber}`} className="text-rose-600 hover:text-rose-700 font-semibold text-lg">
            {phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
}