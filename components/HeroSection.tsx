'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  const cities = [
    'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 
    'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala'
  ];

  const packages = [
    '7 Days Economy', '10 Days Standard', '14 Days Premium', 
    '21 Days Deluxe', '30 Days VIP'
  ];

  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://readdy.ai/api/search-image?query=Beautiful%20Islamic%20architecture%20with%20Kaaba%20in%20Mecca%20during%20golden%20hour%20with%20warm%20lighting%2C%20peaceful%20atmosphere%2C%20pilgrims%20in%20white%20clothing%2C%20ornate%20Islamic%20geometric%20patterns%2C%20golden%20minarets%2C%20soft%20desert%20colors%2C%20spiritual%20ambiance%2C%20high%20quality%20photography%2C%20cinematic%20composition%2C%20blend%20of%20traditional%20and%20modern%20Islamic%20architecture&width=1920&height=1080&seq=hero1&orientation=landscape)`
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Sacred Journey
            <br />
            <span className="text-green-400">Begins Here</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Experience the spiritual journey of a lifetime with our carefully crafted Umrah packages. 
            Join thousands of pilgrims who have trusted us for their sacred pilgrimage.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-4xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Find Your Perfect Umrah Package
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2 inline-block">
                    <i className="ri-map-pin-line text-green-600"></i>
                  </div>
                  Departure City
                </label>
                <select 
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-8"
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="w-5 h-5 flex items-center justify-center mr-2 inline-block">
                    <i className="ri-calendar-line text-green-600"></i>
                  </div>
                  Package Duration
                </label>
                <select 
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-8"
                >
                  <option value="">Select Package</option>
                  {packages.map((pkg) => (
                    <option key={pkg} value={pkg}>{pkg}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <Link 
                  href="/packages"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center whitespace-nowrap cursor-pointer block"
                >
                  Search Packages
                </Link>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/qura-andazi"
                className="inline-flex items-center bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold whitespace-nowrap cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-gift-line"></i>
                </div>
                Try Your Luck - Qura Andazi Draw
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
