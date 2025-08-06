'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';

export default function AdminDashboard() {
  const [payments, setPayments] = useState<any[]>([]);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    const { data, error } = await supabase
      .from('quraandazi')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setPayments(data);
    }
  };

  const handleStatusUpdate = async (id: number, newStatus: string) => {
    const { error } = await supabase
      .from('quraandazi')
      .update({ status: newStatus })
      .eq('id', id);

    if (!error) {
      fetchPayments();
    } else {
      alert('Failed to update status.');
    }
  };

  const filteredPayments = filterStatus === 'all'
    ? payments
    : payments.filter(p => p.status === filterStatus);

  return (
    <div className="min-h-screen">
      <div className="bg-white shadow-sm border-b">
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage Qura Andazi System</p>
          </div>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-home-line text-xl"></i>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex">
        <div className="w-64 bg-white shadow-sm h-screen">
          <nav className="mt-8 px-4 space-y-2">
            <button
              className="w-full text-left px-4 py-3 rounded-lg flex items-center bg-green-100 text-green-600"
            >
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-user-line"></i>
              </div>
              Participants
            </button>
            <button
              onClick={() => {
                localStorage.removeItem('adminAuth');
                window.location.href = '/admin-login';
              }}
              className="bg-red-500 w-56 text-white px-4 mt-3 py-2 rounded"
            >
              Logout
            </button>
          </nav>
        </div>

        <div className="flex-1 p-8">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Participants (Payments)</h2>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border rounded-lg text-sm"
              >
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <div className="bg-white rounded-xl shadow-sm border overflow-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left p-4">ID</th>
                    <th className="text-left p-4">Full Name</th>
                    <th className="text-left p-4">Transaction ID</th>
                    <th className="text-left p-4">Screenshot</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Created At</th>
                    <th className="text-left p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPayments.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-mono text-sm">{item.id}</td>
                      <td className="p-4">{item.full_name}</td>
                      <td className="p-4">{item.transaction_id}</td>
                      <td className="p-4">
                        {item.screenshot_url ? (
                          <a href={item.screenshot_url} target="_blank" rel="noopener noreferrer">
                            <img
                              src={item.screenshot_url}
                              alt="screenshot"
                              className="w-16 h-16 object-cover rounded border"
                            />
                          </a>
                        ) : (
                          <span className="text-gray-400">No Image</span>
                        )}
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 text-sm rounded-full bg-gray-100 text-gray-800">
                          {item.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm">{new Date(item.created_at).toLocaleString()}</td>
                      <td className="p-4 space-x-2">
                        <button
                          onClick={() => handleStatusUpdate(item.id, 'approved')}
                          className="text-green-600 hover:underline text-sm"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleStatusUpdate(item.id, 'rejected')}
                          className="text-red-600 hover:underline text-sm"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredPayments.length === 0 && (
                    <tr>
                      <td colSpan={7} className="text-center py-6 text-gray-500">
                        No data found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
