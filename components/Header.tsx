
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-green-600" style={{ fontFamily: 'Pacifico, serif' }}>
            UmrahMe
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/packages" className="text-gray-700 hover:text-green-600 transition-colors">
              Umrah Packages
            </Link>
            <Link href="/qura-andazi" className="text-gray-700 hover:text-green-600 transition-colors">
              Qura Andazi
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>
            <Link href="/dashboard" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer">
              Dashboard
            </Link>
          </nav>

          <button 
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-menu-line text-xl"></i>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="/packages" className="text-gray-700 hover:text-green-600 transition-colors">
                Umrah Packages
              </Link>
              <Link href="/qura-andazi" className="text-gray-700 hover:text-green-600 transition-colors">
                Qura Andazi
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </Link>
              <Link href="/dashboard" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer inline-block">
                Dashboard
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
