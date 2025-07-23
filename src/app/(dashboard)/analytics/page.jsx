'use client'
import { Bar, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function AnalyticsDashboard() {
  // Mock department ratings data
  const departmentData = [
    { department: 'Support', avgRating: 4.5 },
    { department: 'Engineering', avgRating: 4.2 },
    { department: 'Marketing', avgRating: 3.9 },
    { department: 'HR', avgRating: 4.1 },
    { department: 'Design', avgRating: 4.3 }
  ];

  // Mock bookmark trends data
  const bookmarkTrends = [
    { month: 'Jan', bookmarks: 12 },
    { month: 'Feb', bookmarks: 19 },
    { month: 'Mar', bookmarks: 15 },
    { month: 'Apr', bookmarks: 22 },
    { month: 'May', bookmarks: 18 },
    { month: 'Jun', bookmarks: 25 }
  ];

  // Department Ratings Chart Configuration
  const departmentChartData = {
    labels: departmentData.map(item => item.department),
    datasets: [{
      label: 'Average Rating',
      data: departmentData.map(item => item.avgRating),
      backgroundColor: [
        'rgba(79, 70, 229, 0.7)',  // Engineering
        'rgba(16, 185, 129, 0.7)', // Support
        'rgba(245, 158, 11, 0.7)', // Marketing
        'rgba(236, 72, 153, 0.7)', // HR
        'rgba(59, 130, 246, 0.7)'  // Design
      ],
      borderColor: [
        'rgba(79, 70, 229, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(236, 72, 153, 1)',
        'rgba(59, 130, 246, 1)'
      ],
      borderWidth: 1
    }]
  };

  // Bookmark Trends Chart Configuration
  const trendsChartData = {
    labels: bookmarkTrends.map(item => item.month),
    datasets: [{
      label: 'Bookmarks Added',
      data: bookmarkTrends.map(item => item.bookmarks),
      fill: false,
      backgroundColor: 'rgba(16, 185, 129, 0.7)',
      borderColor: 'rgba(16, 185, 129, 1)',
      tension: 0.3
    }]
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Employee Analytics Dashboard</h1>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Department Ratings Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Department Ratings</h2>
          <Bar 
            data={departmentChartData}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  max: 5,
                  ticks: {
                    stepSize: 0.5
                  }
                }
              }
            }}
          />
        </div>

        {/* Bookmark Trends Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Bookmark Trends</h2>
          <Line
            data={trendsChartData}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }}
          />
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Total Departments */}
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="text-gray-600">Total Departments</h3>
            <p className="text-2xl font-bold text-indigo-600">
              {departmentData.length}
            </p>
          </div>

          {/* Highest Rated Department */}
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="text-gray-600">Highest Rated</h3>
            <p className="text-2xl font-bold text-green-600">
              {departmentData.reduce((prev, current) => 
                (prev.avgRating > current.avgRating) ? prev : current
              ).department}
            </p>
          </div>

          {/* Total Bookmarks */}
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="text-gray-600">Total Bookmarks</h3>
            <p className="text-2xl font-bold text-emerald-600">
              {bookmarkTrends.reduce((sum, month) => sum + month.bookmarks, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}