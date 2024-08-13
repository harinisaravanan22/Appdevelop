import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const pieChartData = [
  { name: 'Task 1', timeSpent: 4},
  { name: 'Task 2', timeSpent: 2 },
  { name: 'Task 3', timeSpent: 3 },
  { name: 'Task 4', timeSpent: 5 },
];

const lineChartData = [
  { name: 'Jan', taskCompleted: 40 },
  { name: 'Feb', taskCompleted: 30 },
  { name: 'Mar', taskCompleted: 50 },
  { name: 'Apr', taskCompleted: 70 },
  { name: 'May', taskCompleted: 60 },
  { name: 'Jun', taskCompleted: 80 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Bar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <button onClick={handleLogout} style={styles.logoutButton}>
        Logout
      </button>
      <div style={styles.dashboard}>
        <h2 style={styles.title}>Admin Dashboard - Task Time Management</h2>
        <div style={styles.chartsContainer}>
          <div style={styles.chart}>
            <h3 style={styles.chartTitle}>Task Time Distribution</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  dataKey="timeSpent"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={styles.chart}>
            <h3 style={styles.chartTitle}>Tasks Completed Over Time</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={lineChartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="taskCompleted" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
    padding: '20px',
    position: 'relative',
  },
  logoutButton: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#e11d48',
    color: 'white',
    border: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    fontSize: '16px',
  },
  dashboard: {
    width: '100%',
    maxWidth: '1200px',
    padding: '32px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '24px',
  },
  chartsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
  },
  chart: {
    flex: '1 1 45%', // Makes sure each chart takes almost half of the available space
    margin: '10px',
  },
  chartTitle: {
    fontSize: '20px',
    marginBottom: '16px',
  },
};

export default Bar;
