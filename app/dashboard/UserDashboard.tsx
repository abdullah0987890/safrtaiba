'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function UserDashboard() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    const getUserDetails = async () => {
      const {
        data: { user },
        error
      } = await supabase.auth.getUser();

      if (error || !user) {
        router.replace('/login');
        return;
      }

      setUserInfo({
        name: user.user_metadata?.name || '',
        email: user.email || '',
        phone: user.user_metadata?.phone || ''
      });
    };

    getUserDetails();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {userInfo.name}</h1>
              <p className="text-green-100">View your profile details</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </div>

          <div className="p-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Profile Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    { label: 'Full Name', value: userInfo.name, type: 'text' },
                    { label: 'Email Address', value: userInfo.email, type: 'email' },
                    { label: 'Phone Number', value: userInfo.phone, type: 'tel' }
                  ].map((field, idx) => (
                    <div key={idx}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        defaultValue={field.value}
                        readOnly
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100"
                      />
                    </div>
                  ))}

                  <button disabled className="w-full bg-gray-300 text-white px-6 py-3 rounded-lg">
                    Profile is read-only
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
