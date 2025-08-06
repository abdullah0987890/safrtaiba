
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuraAndaziHero from './QuraAndaziHero';
import HowItWorks from './HowItWorks';
import RegistrationForm from './RegistrationForm';
import CurrentDraw from './CurrentDraw';

export default function QuraAndaziPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <QuraAndaziHero />
      <HowItWorks />
      <CurrentDraw />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
