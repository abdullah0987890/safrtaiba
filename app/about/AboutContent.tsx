
'use client';

export default function AboutContent() {
  const stats = [
    { number: '25+', label: 'Years of Experience' },
    { number: '50,000+', label: 'Satisfied Pilgrims' },
    { number: '500+', label: 'Successful Tours' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const values = [
    {
      icon: 'ri-heart-line',
      title: 'Trust & Reliability',
      description: 'We have built our reputation on trust and reliability, ensuring every pilgrim feels safe and cared for throughout their journey.'
    },
    {
      icon: 'ri-star-line',
      title: 'Excellence in Service',
      description: 'Our commitment to excellence means we go above and beyond to provide the best possible experience for our pilgrims.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Safety & Security',
      description: 'Your safety is our top priority. We ensure all safety protocols are followed and provide comprehensive insurance coverage.'
    },
    {
      icon: 'ri-customer-service-line',
      title: '24/7 Support',
      description: 'Our dedicated support team is available around the clock to assist you with any queries or concerns during your pilgrimage.'
    }
  ];

  const team = [
    {
      name: 'Muhammad Ahmad',
      position: 'Founder & CEO',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Pakistani%20business%20executive%20in%20formal%20suit%2C%20middle-aged%20man%20with%20confident%20expression%2C%20Islamic%20business%20leader%2C%20warm%20lighting%2C%20corporate%20portrait%20photography%2C%20respectful%20and%20dignified%20appearance%2C%20modern%20office%20background&width=300&height=300&seq=team1&orientation=squarish',
      description: 'With over 25 years in the pilgrimage industry, Muhammad Ahmad founded UmrahMe to make sacred journeys accessible to everyone.'
    },
    {
      name: 'Dr. Fatima Sheikh',
      position: 'Operations Director',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Pakistani%20woman%20executive%20in%20business%20attire%20with%20hijab%2C%20confident%20and%20intelligent%20expression%2C%20Islamic%20business%20leader%2C%20warm%20lighting%2C%20corporate%20portrait%20photography%2C%20respectful%20and%20dignified%20appearance&width=300&height=300&seq=team2&orientation=squarish',
      description: 'Dr. Fatima ensures all operations run smoothly and that every pilgrim receives personalized care and attention throughout their journey.'
    },
    {
      name: 'Imam Rashid Ali',
      position: 'Spiritual Guide',
      image: 'https://readdy.ai/api/search-image?query=Islamic%20religious%20scholar%20in%20traditional%20white%20clothing%20with%20peaceful%20expression%2C%20elderly%20wise%20man%20with%20beard%2C%20spiritual%20leader%2C%20warm%20lighting%2C%20respectful%20portrait%20photography%2C%20religious%20guidance%20context&width=300&height=300&seq=team3&orientation=squarish',
      description: 'Imam Rashid provides spiritual guidance and educational support to help pilgrims understand the significance of their sacred journey.'
    }
  ];

  return (
    <div className="min-h-screen">
      <div 
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://readdy.ai/api/search-image?query=Majestic%20Islamic%20architecture%20with%20golden%20dome%20and%20minarets%20during%20sunset%2C%20peaceful%20pilgrimage%20atmosphere%2C%20traditional%20Middle%20Eastern%20design%2C%20spiritual%20ambiance%2C%20warm%20desert%20colors%2C%20architectural%20photography%2C%20sacred%20Islamic%20buildings%20with%20ornate%20geometric%20patterns&width=1920&height=600&seq=abouthero&orientation=landscape)`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About UmrahMe</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            For over two decades, we have been committed to providing exceptional Umrah experiences, 
            helping thousands of pilgrims fulfill their spiritual journey with comfort, dignity, and peace of mind.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                UmrahMe was founded in 1999 with a simple mission: to make the sacred journey of Umrah accessible, 
                affordable, and spiritually enriching for Muslims around the world. What started as a small travel 
                agency has grown into one of Pakistan's most trusted names in pilgrimage services.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we have had the honor of facilitating the spiritual journeys of over 50,000 pilgrims, 
                each with their unique story and spiritual aspirations. Our commitment to excellence, safety, and 
                customer satisfaction has earned us the trust of families across Pakistan.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to innovate and improve our services, including the revolutionary Qura Andazi system 
                that makes Umrah more accessible through our lottery-based program.
              </p>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Beautiful%20Islamic%20pilgrimage%20scene%20with%20diverse%20group%20of%20pilgrims%20in%20white%20clothing%2C%20peaceful%20atmosphere%2C%20traditional%20Middle%20Eastern%20architecture%20background%2C%20spiritual%20journey%2C%20respectful%20and%20dignified%20pilgrims%2C%20warm%20lighting%2C%20photography&width=600&height=400&seq=story&orientation=landscape"
                alt="Our Story"
                className="w-full rounded-2xl shadow-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to serving the Muslim community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-lg transition-shadow">
                  <h3 className="text-4xl font-bold text-green-600 mb-2">{stat.number}</h3>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg flex-shrink-0">
                  <i className={`${value.icon} text-green-600 text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who make your spiritual journey possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied pilgrims who have trusted us with their sacred journey. 
            Let us help you create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/packages"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              View Packages
            </a>
            <a 
              href="/qura-andazi"
              className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Try Qura Andazi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
