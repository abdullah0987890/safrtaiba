
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PackagesList from './PackagesList';

export default function PackagesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <PackagesList />
      <Footer />
    </div>
  );
}
