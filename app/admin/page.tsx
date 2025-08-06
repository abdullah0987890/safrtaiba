'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminDashboard from './AdminDashboard'

export default function AdminPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const isAdmin = localStorage.getItem('adminAuth')

    if (isAdmin !== 'true') {
      router.replace('/admin-login')
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) return <div className="text-center py-10">Loading...</div>

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminDashboard />
    </div>
  )
}
