import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MetricsCards from '../components/MetricCards';
import { useTheme } from '../hooks/ThemeContext';
import JobStatistics from '../components/JobStatistics';

const Dashboard = () => {
  const { darkMode } = useTheme();

  return (
    <div style={{
      ...styles.container,
      backgroundColor: darkMode ? '#1f2937' : '#f9fafb'
    }}>
      <Header />
      <div style={styles.content}>
        <Sidebar darkMode={darkMode} />
        <div style={{
          ...styles.mainArea,
          backgroundColor: darkMode ? '#1f2937' : '#f9fafb'
        }}>
          <MetricsCards darkMode={darkMode} />
          <JobStatistics darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width:'100vw',
    overflow: 'hidden', // Prevent any overflow that might cause the black area
  },
  content: {
    display: 'flex',
    flex: 1,
    marginTop: '76px', // Match the header height + padding
    maxWidth: '100%',
  },
  mainArea: {
    flex: 1,
    marginLeft: '180px', 
    marginRight: '75px',
    padding: '20px',
    boxSizing: 'border-box',
  }
};

export default Dashboard;