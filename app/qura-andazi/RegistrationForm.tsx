'use client'

import { useState } from 'react'

export default function RegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null)
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!fullName || !transactionId || !screenshotFile) {
      setMessage('❌ Please fill all fields and upload screenshot.')
      return
    }

    setIsSubmitting(true)

    const form = new FormData()
    form.append('full_name', fullName)
    form.append('transaction_id', transactionId)
    form.append('screenshot', screenshotFile)

    try {
      const res = await fetch('/api/payment-submit', {
        method: 'POST',
        body: form
      })

      const result = await res.json()
      if (res.ok) {
        setMessage('✅ Payment submitted successfully!')
        setFullName('')
        setTransactionId('')
        setScreenshotFile(null)
      } else {
        setMessage(`❌ ${result.error || 'Failed to submit'}`)
      }
    } catch (err) {
      setMessage('❌ Network error. Try again later.')
    }

    setIsSubmitting(false)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Submit Payment</h2>

          <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
            <p><strong>Bank Transfer Details:</strong></p>
            <p>Account Title: Rehana Perveen </p>
            <p>Account Number: PK62ABPA0020139168180014</p>
            <p>Bank: Allied Bank</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Transaction ID *</label>
              <input
                type="text"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm"
                placeholder="Enter transaction ID"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Screenshot *</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setScreenshotFile(e.target.files?.[0] || null)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Payment'}
            </button>

            {message && <p className="text-center text-sm mt-4 text-gray-700">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
