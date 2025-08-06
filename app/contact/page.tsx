
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactContent from './ContactContent';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactContent />
      <Footer />
    </div>
  );
}
