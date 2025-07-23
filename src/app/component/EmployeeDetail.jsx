'use client'
import React, { useEffect, useState } from 'react'
import Starrating from './Starrating'
import { getRandomRating } from '../lib/Rating'
import { mockbio } from '../lib/generatebio'

const EmployeeDetail = ({ user }) => {
  // State for rating and performance history
  const [rating, setRating] = useState(user?.rating || null)
  const [performanceHistory, setPerformanceHistory] = useState(user?.performanceHistory || null)

  // On mount, generate random values if not provided
  useEffect(() => {
    if (!user?.rating) setRating(getRandomRating())
    if (!user?.performanceHistory) {
      setPerformanceHistory(Array.from({ length: 6 }, () => getRandomRating()))
    }
  }, [user])

  // Show nothing (or a spinner) until data is ready
  if (rating === null || performanceHistory === null) {
    return <div className="text-center py-10 text-gray-400">Loading...</div>
  }

  return (
    <div>
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="border-b pb-4">
          <h1 className="text-3xl font-bold">{user.firstName}</h1>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="font-medium text-gray-500 mb-1">Address</h2>
            <p>{`${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.country}`}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="font-medium text-gray-500 mb-1">Phone</h2>
            <p>{user.phone.slice(3)}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="font-medium text-gray-500 mb-2">Bio</h2>
          <p className="text-gray-700">{mockbio()}</p>
        </div>

        {/* Performance */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Starrating rating={rating} />
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                rating >= 4.5
                  ? 'bg-green-100 text-green-800'
                  : rating <= 2
                  ? 'bg-red-100 text-red-800'
                  : 'bg-blue-100 text-blue-800'
              }`}
            >
              {rating}/5 Rating
            </span>
          </div>

          <h2 className="font-medium text-gray-500 mb-2">Recent Performance</h2>
          <div className="space-y-3">
            {performanceHistory.map((monthRating, index) => (
              <div key={index} className="flex items-center">
                <span className="w-32 text-gray-600">Month {index + 1}</span>
                <div className="flex-1 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        monthRating >= 4
                          ? 'bg-green-500'
                          : monthRating <= 2
                          ? 'bg-red-500'
                          : 'bg-yellow-500'
                      }`}
                      style={{ width: `${monthRating * 20}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm w-8">{monthRating}/5</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetail