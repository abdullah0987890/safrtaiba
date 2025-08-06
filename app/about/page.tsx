
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutContent from './AboutContent';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutContent />
      <Footer />
    </div>
  );
}
