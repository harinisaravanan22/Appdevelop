// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import './BarChart.css';

// // Sample data for the bar chart
// const chartData = [
//   { name: 'Trucks', count: 15 },
//   { name: 'Goods Transported', count: 500 },
//   { name: 'Orders', count: 200 },
//   { name: 'Active Users', count: 600 }
// ];

// // Sample data for the table
// const orderData = [
//   { id: 1, orderNumber: 'ORD123', status: 'Delivered', date: '2024-07-25' },
//   { id: 2, orderNumber: 'ORD124', status: 'Pending', date: '2024-07-26' },
//   { id: 3, orderNumber: 'ORD125', status: 'Shipped', date: '2024-07-27' }
// ];

// const BarChart = () => {
//   return (
//     <div className="dashboard">
//       <h1 className="dashboard-title">Logistics Management Dashboard</h1>
      
//       <div className="info-cards">
//         <div className="info-card">
//           <h3>Total Trucks</h3>
//           <p>15</p>
//         </div>
//         <div className="info-card">
//           <h3>Total Goods Transported</h3>
//           <p>500</p>
//         </div>
//         <div className="info-card">
//           <h3>Total Orders</h3>
//           <p>200</p>
//         </div>
//         <div className="info-card">
//           <h3>Active Users</h3>
//           <p>600</p>
//         </div>
//       </div>
      
//       <div className="chart-container">
//         <h2>Statistics Overview</h2>
//         <BarChart width={800} height={400} data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="count" fill="#82ca9d" />
//         </BarChart>
//       </div>
      
//       <div className="table-container">
//         <h2>Recent Orders</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Order Number</th>
//               <th>Status</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orderData.map(order => (
//               <tr key={order.id}>
//                 <td>{order.id}</td>
//                 <td>{order.orderNumber}</td>
//                 <td>{order.status}</td>
//                 <td>{order.date}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BarChart;
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
        Back
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
