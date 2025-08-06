'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UserDashboard from './UserDashboard';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push('/signup');
      } else {
        setUser(data.user);
      }
      setLoading(false);
    };

    getUser();
  }, [router]);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="min-h-screen">
      <Header />
      <UserDashboard />
      <Footer />
    </div>
  );
}
