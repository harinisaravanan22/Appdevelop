
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart as RechartsBarChart } from 'recharts';
import './BarChart.css';

const chartData = [
  { name: 'Task 1', timeSpent: 4 },
  { name: 'Task 2', timeSpent: 2 },
  { name: 'Task 3', timeSpent: 3 },
  { name: 'Task 4', timeSpent: 5 },
];

const BarChart = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout operations
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Logout
      </button>
      <div className="w-full max-w-4xl p-8 bg-white border rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Task Time Management</h2>
        <RechartsBarChart
          width={800}
          height={400}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="timeSpent" fill="#8884d8" />
        </RechartsBarChart>
      </div>
    </div>
  );
};

export default BarChart;
