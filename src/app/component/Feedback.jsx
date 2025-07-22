import React from 'react'

const mockFeedback = [
  {
    type: "Manager",
    comment: "Excellent communication skills",
    date: "2023-10-01"
  },
  {
    type: "Peer",
    comment: "Always helpful in team projects",
    date: "2023-09-15"
  }
];

const Feedback = () => {
  return (
    <div>
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="font-medium text-gray-500 mb-4 text-lg">Recent Feedback</h2>
        <div className="space-y-4">
          {mockFeedback.map((fb, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex flex-col gap-1"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-blue-700">{fb.type} Feedback</span>
                <span className="text-xs text-gray-400">{fb.date}</span>
              </div>
              <p className="text-gray-700">"{fb.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feedback