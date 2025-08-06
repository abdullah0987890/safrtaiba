
'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      location: 'Lahore',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Pakistani%20man%20in%20traditional%20white%20Islamic%20clothing%20with%20peaceful%20expression%2C%20middle%20aged%2C%20kind%20eyes%2C%20spiritual%20atmosphere%2C%20warm%20lighting%2C%20portrait%20photography%2C%20simple%20background%2C%20religious%20pilgrimage%20context%2C%20respectful%20and%20dignified%20appearance&width=100&height=100&seq=test1&orientation=squarish',
      rating: 5,
      text: 'Alhamdulillah! The journey was beyond my expectations. The team took care of everything from visa to accommodation. I felt spiritually fulfilled and will definitely recommend UmrahMe to everyone.'
    },
    {
      id: 2,
      name: 'Fatima Malik',
      location: 'Karachi',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20Pakistani%20woman%20in%20traditional%20white%20hijab%20with%20serene%20expression%2C%20middle%20aged%2C%20gentle%20smile%2C%20spiritual%20atmosphere%2C%20soft%20lighting%2C%20portrait%20photography%2C%20simple%20background%2C%20Islamic%20pilgrimage%20context%2C%20respectful%20and%20dignified%20appearance&width=100&height=100&seq=test2&orientation=squarish',
      rating: 5,
      text: 'The Qura Andazi system is amazing! I won the draw and got to perform Umrah at a very affordable cost. The entire experience was smooth and the staff was very helpful throughout the journey.'
    },
    {
      id: 3,
      name: 'Muhammad Ali',
      location: 'Islamabad',
      image: 'https://readdy.ai/api/search-image?query=Mature%20Pakistani%20man%20with%20traditional%20Islamic%20beard%20in%20white%20clothing%2C%20peaceful%20expression%2C%20wise%20eyes%2C%20spiritual%20atmosphere%2C%20warm%20lighting%2C%20portrait%20photography%2C%20simple%20background%2C%20religious%20pilgrimage%20context%2C%20respectful%20and%20dignified%20appearance&width=100&height=100&seq=test3&orientation=squarish',
      rating: 5,
      text: 'Outstanding service! The premium package was worth every penny. The accommodation was excellent and the guides were very knowledgeable. May Allah bless the UmrahMe team.'
    },
    {
      id: 4,
      name: 'Ayesha Khan',
      location: 'Rawalpindi',
      image: 'https://readdy.ai/api/search-image?query=Young%20Pakistani%20woman%20in%20traditional%20white%20hijab%20with%20bright%20smile%2C%20kind%20eyes%2C%20spiritual%20atmosphere%2C%20soft%20lighting%2C%20portrait%20photography%2C%20simple%20background%2C%20Islamic%20pilgrimage%20context%2C%20respectful%20and%20dignified%20appearance&width=100&height=100&seq=test4&orientation=squarish',
      rating: 5,
      text: 'First time performing Umrah and it was a blessed experience. The team guided us through every step. The visa process was hassle-free and the journey was comfortable.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Pilgrims Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from thousands of satisfied pilgrims who have completed their spiritual journey with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-2xl p-8 text-center">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-6 object-cover object-top"
                    />
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="w-5 h-5 flex items-center justify-center text-yellow-400">
                          <i className="ri-star-fill"></i>
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-700 text-lg mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-arrow-left-line text-gray-600"></i>
            </div>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-arrow-right-line text-gray-600"></i>
            </div>
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
