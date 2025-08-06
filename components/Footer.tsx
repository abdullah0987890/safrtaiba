
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-400" style={{ fontFamily: 'Pacifico, serif' }}>
              UmrahMe
            </h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for Umrah pilgrimage with affordable packages and blessed journey experiences.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer text-gray-300 hover:text-green-400 transition-colors">
                <i className="ri-facebook-fill text-xl"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer text-gray-300 hover:text-green-400 transition-colors">
                <i className="ri-twitter-fill text-xl"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer text-gray-300 hover:text-green-400 transition-colors">
                <i className="ri-instagram-fill text-xl"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer text-gray-300 hover:text-green-400 transition-colors">
                <i className="ri-youtube-fill text-xl"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/packages" className="text-gray-300 hover:text-green-400 transition-colors">Umrah Packages</Link></li>
              <li><Link href="/qura-andazi" className="text-gray-300 hover:text-green-400 transition-colors">Qura Andazi</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</Link></li>
              <li><Link href="/dashboard" className="text-gray-300 hover:text-green-400 transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Hajj Packages</span></li>
              <li><span className="text-gray-300">Umrah Packages</span></li>
              <li><span className="text-gray-300">Visa Processing</span></li>
              <li><span className="text-gray-300">Hotel Booking</span></li>
              <li><span className="text-gray-300">Flight Booking</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-phone-fill text-sm"></i>
                </div>
                +92-304-5806432 
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-mail-fill text-sm"></i>
                </div>
                info@umrahme.com
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-fill text-sm"></i>
                </div>
                Lahore, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 UmrahMe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
