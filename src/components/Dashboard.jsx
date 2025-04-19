import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MetricsCards from '../components/MetricCards';
import { useTheme } from '../hooks/ThemeContext';
import JobStatistics from '../components/JobStatistics';
import EmployeeStatus from './EmployeeStatus';
import EmployeeComposition from './EmployeeComposition';

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
          <div style={styles.rowContainer}>
            <EmployeeStatus darkMode={darkMode} />
            <EmployeeComposition darkMode={darkMode} />
          </div>
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
    width: '100vw',
    // overflowX: 'hidden',
  },
  content: {
    display: 'flex',
    flex: 1,
    marginTop: '76px',
    width: '100%',
  },
  mainArea: {
    flex: 1,
    marginLeft: { xs: 0, sm: '180px' }, // Responsive margin
    marginRight: { xs: 0, sm: '75px' },
    padding: { xs: '10px', sm: '20px' },
    boxSizing: 'border-box',
    width: '100%',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' }, // Column on mobile, row on larger screens
    gap: '20px',
    marginTop: '20px',
    width: '100%',
  },
};

export default Dashboard;