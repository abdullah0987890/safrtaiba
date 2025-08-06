
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PackagesList() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');

  const packages = [
    {
      id: 1,
      name: 'Economy Umrah Package',
      duration: '7 Days',
      price: 150000,
      originalPrice: 180000,
      image: 'https://readdy.ai/api/search-image?query=Simple%20hotel%20room%20with%20Islamic%20decor%20and%20Kaaba%20view%2C%20comfortable%20twin%20beds%2C%20traditional%20Middle%20Eastern%20patterns%2C%20warm%20lighting%2C%20basic%20amenities%2C%20clean%20modern%20facilities%2C%20spiritual%20atmosphere%2C%20peaceful%20accommodation%20for%20pilgrimage%2C%20budget-friendly%20interior%20design&width=400&height=250&seq=econ1&orientation=landscape',
      category: 'economy',
      departureCity: 'Karachi',
      features: ['3-star hotel accommodation', 'Shared transport', 'Group guidance', 'Visa assistance', 'Basic meals'],
      highlights: ['Close to Haram', 'Experienced guides', 'Visa processing'],
      rating: 4.2,
      reviews: 145
    },
    {
      id: 2,
      name: 'Standard Umrah Package',
      duration: '10 Days',
      price: 250000,
      originalPrice: 300000,
      image: 'https://readdy.ai/api/search-image?query=Comfortable%20hotel%20room%20with%20elegant%20Islamic%20architecture%20view%2C%20premium%20bedding%2C%20traditional%20Arabian%20decor%2C%20golden%20accents%2C%20modern%20amenities%2C%20spiritual%20artwork%2C%20warm%20ambient%20lighting%2C%20standard%20pilgrimage%20accommodation%2C%20refined%20interior%20design&width=400&height=250&seq=stand1&orientation=landscape',
      category: 'standard',
      departureCity: 'Lahore',
      features: ['4-star hotel accommodation', 'Private transport', 'Personal guide', 'Visa assistance', 'All meals included', 'Shopping tour'],
      highlights: ['Premium location', 'Private transport', 'All meals included'],
      rating: 4.7,
      reviews: 298
    },
    {
      id: 3,
      name: 'Premium Umrah Package',
      duration: '14 Days',
      price: 400000,
      originalPrice: 500000,
      image: 'https://readdy.ai/api/search-image?query=Luxurious%20hotel%20suite%20with%20panoramic%20Haram%20view%2C%20opulent%20Islamic%20design%2C%20marble%20surfaces%2C%20gold%20accents%2C%20premium%20furnishings%2C%20chandelier%20lighting%2C%20VIP%20pilgrimage%20accommodation%2C%20sophisticated%20luxury%20interior%2C%20peaceful%20sanctuary%20atmosphere&width=400&height=250&seq=prem1&orientation=landscape',
      category: 'premium',
      departureCity: 'Islamabad',
      features: ['5-star hotel accommodation', 'VIP transport', 'Dedicated guide', 'Express visa', 'Gourmet meals', 'Shopping tours', 'Airport lounge access'],
      highlights: ['5-star luxury', 'VIP services', 'Express processing'],
      rating: 4.9,
      reviews: 187
    },
    {
      id: 4,
      name: 'Family Economy Package',
      duration: '8 Days',
      price: 140000,
      originalPrice: 170000,
      image: 'https://readdy.ai/api/search-image?query=Family-friendly%20hotel%20room%20with%20multiple%20beds%2C%20Islamic%20decor%2C%20comfortable%20seating%20area%2C%20traditional%20patterns%2C%20warm%20lighting%2C%20safe%20environment%20for%20children%2C%20spacious%20layout%2C%20family%20pilgrimage%20accommodation%2C%20clean%20modern%20facilities&width=400&height=250&seq=fam1&orientation=landscape',
      category: 'economy',
      departureCity: 'Karachi',
      features: ['Family rooms', 'Child-friendly meals', 'Family guidance', 'Safe environment', 'Group activities'],
      highlights: ['Family-oriented', 'Child care available', 'Safe environment'],
      rating: 4.3,
      reviews: 92
    },
    {
      id: 5,
      name: 'Deluxe Umrah Package',
      duration: '12 Days',
      price: 320000,
      originalPrice: 380000,
      image: 'https://readdy.ai/api/search-image?query=Elegant%20hotel%20room%20with%20deluxe%20amenities%20and%20Islamic%20architectural%20view%2C%20comfortable%20furnishings%2C%20traditional%20Middle%20Eastern%20design%2C%20premium%20facilities%2C%20spiritual%20ambiance%2C%20modern%20comfort%2C%20sophisticated%20pilgrimage%20accommodation&width=400&height=250&seq=delux1&orientation=landscape',
      category: 'standard',
      departureCity: 'Lahore',
      features: ['Deluxe accommodation', 'Semi-private transport', 'Experienced guide', 'Premium meals', 'Historical tours'],
      highlights: ['Historical tours', 'Premium experience', 'Semi-private transport'],
      rating: 4.6,
      reviews: 156
    },
    {
      id: 6,
      name: 'VIP Umrah Experience',
      duration: '21 Days',
      price: 650000,
      originalPrice: 800000,
      image: 'https://readdy.ai/api/search-image?query=Ultra-luxurious%20presidential%20suite%20with%20exclusive%20Haram%20view%2C%20opulent%20Islamic%20design%2C%20marble%20floors%2C%20gold%20fixtures%2C%20premium%20furnishings%2C%20crystal%20chandelier%2C%20VIP%20pilgrimage%20accommodation%2C%20royal%20interior%20design%2C%20exclusive%20sanctuary%20atmosphere&width=400&height=250&seq=vip1&orientation=landscape',
      category: 'premium',
      departureCity: 'Islamabad',
      features: ['Presidential suite', 'Private jet option', 'Personal butler', 'Exclusive experiences', 'Gourmet dining', 'Private shopping'],
      highlights: ['Presidential treatment', 'Private jet available', 'Exclusive experiences'],
      rating: 5.0,
      reviews: 43
    }
  ];

  const cities = ['All Cities', 'Karachi', 'Lahore', 'Islamabad'];
  const filters = [
    { key: 'all', label: 'All Packages' },
    { key: 'economy', label: 'Economy' },
    { key: 'standard', label: 'Standard' },
    { key: 'premium', label: 'Premium' }
  ];

  const filteredPackages = packages.filter(pkg => {
    const matchesFilter = selectedFilter === 'all' || pkg.category === selectedFilter;
    const matchesCity = selectedCity === 'all' || pkg.departureCity === selectedCity;
    return matchesFilter && matchesCity;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div 
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://readdy.ai/api/search-image?query=Beautiful%20Islamic%20architecture%20with%20ornate%20geometric%20patterns%2C%20golden%20minarets%20against%20sunset%20sky%2C%20peaceful%20pilgrimage%20atmosphere%2C%20traditional%20Middle%20Eastern%20design%2C%20spiritual%20ambiance%2C%20warm%20desert%20colors%2C%20architectural%20photography%2C%20sacred%20Islamic%20buildings&width=1920&height=400&seq=pkghero&orientation=landscape)`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Umrah Packages</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Choose from our carefully crafted Umrah packages designed to provide you with a blessed and comfortable pilgrimage experience
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border sticky top-4">
              <h3 className="text-lg font-semibold mb-4">Filter Packages</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Package Type</label>
                  <div className="space-y-2">
                    {filters.map(filter => (
                      <button
                        key={filter.key}
                        onClick={() => setSelectedFilter(filter.key)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                          selectedFilter === filter.key
                            ? 'bg-green-100 text-green-600 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Departure City</label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-8"
                  >
                    <option value="all">All Cities</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Price Range</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="ml-2 text-sm text-gray-600">Rs. 100k - 200k</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="ml-2 text-sm text-gray-600">Rs. 200k - 400k</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="ml-2 text-sm text-gray-600">Rs. 400k+</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                Showing {filteredPackages.length} of {packages.length} packages
              </p>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-8">
                <option>Sort by Price: Low to High</option>
                <option>Sort by Price: High to Low</option>
                <option>Sort by Rating</option>
                <option>Sort by Duration</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPackages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-64 object-cover object-top"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                        pkg.category === 'economy' ? 'bg-blue-500' :
                        pkg.category === 'standard' ? 'bg-green-500' : 'bg-purple-500'
                      }`}>
                        {pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 cursor-pointer hover:bg-gray-100">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-heart-line text-gray-600"></i>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
                      <div className="flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center text-yellow-400 mr-1">
                          <i className="ri-star-fill text-sm"></i>
                        </div>
                        <span className="text-sm font-medium text-gray-600">{pkg.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({pkg.reviews})</span>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 mb-4">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-calendar-line text-sm"></i>
                      </div>
                      <span className="mr-4">{pkg.duration}</span>
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-map-pin-line text-sm"></i>
                      </div>
                      <span>{pkg.departureCity}</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      {pkg.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-4 h-4 flex items-center justify-center mr-2 text-green-500">
                            <i className="ri-check-line text-xs"></i>
                          </div>
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center">
                          <span className="text-2xl font-bold text-green-600">
                            Rs. {pkg.price.toLocaleString()}
                          </span>
                          <span className="text-sm text-gray-500 line-through ml-2">
                            Rs. {pkg.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600">per person</span>
                      </div>
                      <Link 
                        href={`/packages/${pkg.id}`}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold whitespace-nowrap cursor-pointer"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-arrow-left-line"></i>
                  </div>
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg cursor-pointer">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">3</button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
