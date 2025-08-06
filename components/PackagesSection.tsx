
'use client';

import Link from 'next/link';

export default function PackagesSection() {
  const packages = [
    {
      id: 1,
      name: 'Economy Package',
      duration: '7 Days',
      price: 'PKR 150,000',
      image: 'https://readdy.ai/api/search-image?query=Modern%20hotel%20room%20with%20Islamic%20decor%20and%20view%20of%20Kaaba%20from%20window%2C%20comfortable%20beds%2C%20traditional%20Islamic%20patterns%2C%20warm%20lighting%2C%20luxury%20amenities%2C%20peaceful%20atmosphere%2C%20pilgrimage%20accommodation%2C%20high%20quality%20interior%20design%2C%20spiritual%20ambiance%2C%20clean%20and%20modern%20facilities&width=400&height=300&seq=pkg1&orientation=landscape',
      features: ['3-star accommodation', 'Shared transport', 'Group guidance', 'Visa assistance'],
      popular: false
    },
    {
      id: 2,
      name: 'Standard Package',
      duration: '10 Days',
      price: 'PKR 250,000',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20hotel%20suite%20with%20Islamic%20architecture%20view%2C%20luxury%20furnishings%2C%20traditional%20Middle%20Eastern%20decor%2C%20golden%20accents%2C%20comfortable%20seating%20area%2C%20modern%20amenities%2C%20spiritual%20artwork%2C%20warm%20ambient%20lighting%2C%20premium%20pilgrimage%20accommodation%2C%20sophisticated%20interior%20design&width=400&height=300&seq=pkg2&orientation=landscape',
      features: ['4-star accommodation', 'Private transport', 'Personal guide', 'Visa assistance', 'Meals included'],
      popular: true
    },
    {
      id: 3,
      name: 'Premium Package',
      duration: '14 Days',
      price: 'PKR 400,000',
      image: 'https://readdy.ai/api/search-image?query=Luxurious%20hotel%20presidential%20suite%20with%20panoramic%20view%20of%20Haram%2C%20opulent%20Islamic%20design%2C%20marble%20floors%2C%20gold%20accents%2C%20premium%20furnishings%2C%20spiritual%20artifacts%2C%20chandelier%20lighting%2C%20VIP%20pilgrimage%20accommodation%2C%20sophisticated%20luxury%20interior%2C%20peaceful%20sanctuary%20atmosphere&width=400&height=300&seq=pkg3&orientation=landscape',
      features: ['5-star accommodation', 'Private transport', 'VIP services', 'All meals', 'Shopping tours'],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Choose Your Umrah Package
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully designed packages to suit every budget and preference. 
            All packages include visa processing, accommodation, and spiritual guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                pkg.popular ? 'ring-2 ring-green-500 relative' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="relative h-64">
                <img 
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <p className="text-green-300">{pkg.duration}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-500">per person</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-5 h-5 flex items-center justify-center mr-3 text-green-600">
                        <i className="ri-check-line"></i>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={`/packages/${pkg.id}`}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center whitespace-nowrap cursor-pointer block"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/packages"
            className="inline-flex items-center bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors font-semibold whitespace-nowrap cursor-pointer"
          >
            View All Packages
            <div className="w-5 h-5 flex items-center justify-center ml-2">
              <i className="ri-arrow-right-line"></i>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
