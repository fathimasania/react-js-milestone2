import React from 'react';
import male from '../assets/images/male.svg';
import female from '../assets/images/female.svg';

const EmployeeComposition = ({ darkMode }) => {
  return (
    <div style={{
      ...styles.container,
      backgroundColor: darkMode ? '#000000' : '#FFFFFF',
      boxShadow: darkMode ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.1)',
      flex: '0 0 38%'
    }}>
      <h3 style={{...styles.title, color: darkMode ? '#FFFFFF' : '#111827'}}>Employee Composition</h3>
      
      <div style={styles.chartContainer}>
        {/* Donut Chart */}
        <div style={styles.donutWrapper}>
          <svg style={styles.donutChart} viewBox="0 0 200 200">
            {/* Center circle */}
            <circle 
              cx="100" 
              cy="100" 
              r="40" 
              fill={darkMode ? '#1F2937' : '#FFFFFF'} 
            />
            
            {/* Female portion - Purple (35%) */}
            <circle 
              cx="100" 
              cy="100" 
              r="60" 
              fill="transparent"
              stroke="#16C098"
              strokeWidth="20"
              strokeDasharray="219.8 408.2"
              strokeDashoffset="0"
              transform="rotate(-90 100 100)"
            />
            
            {/* Male portion - Gray (65%) */}
            <circle 
              cx="100" 
              cy="100" 
              r="60" 
              fill="transparent"
              stroke={'#5832E6'}
              strokeWidth="20"
              strokeDasharray="408.2 219.8"
              strokeDashoffset="-219.8"
              transform="rotate(-90 100 100)"
            />
          </svg>
        </div>
        
        {/* Percentage Labels */}
        <div style={styles.percentageContainer}>
          <div style={styles.percentageItem}>
            <img src ={male} width={12} height={18}/>
            {/* <div style={{...styles.colorIndicator, backgroundColor: '#5E48E8'}}></div> */}
            <span style={{color: darkMode ? '#FFFFFF' : '#111827'}}>65%</span>
          </div>
          <div style={styles.percentageItem}>
            <img src ={female} width={12} height={18}/>
            {/* <div style={{...styles.colorIndicator, backgroundColor: darkMode ? '#374151' : '#E5E7EB'}}></div> */}
            <span style={{color: darkMode ? '#FFFFFF' : '#111827'}}>35%</span>
          </div>
        </div>
      </div>
      
      {/* Total Employees */}
      <div style={{...styles.totalEmployees, color: darkMode ? '#9CA3AF' : '#6B7280'}}>
        856 employee total
      </div>
    </div>
  );
};

const styles = {
  container: {
    borderRadius: '12px',
    padding: '20px',
    marginTop: '20px',
    flex: { xs: '1 1 100%', sm: '0 0 38%' }, // Full width on mobile, 38% on larger
    width: '100%',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 20px 0',
  },
  chartContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  donutWrapper: {
    width: '140px',
    height: '140px',
  },
  donutChart: {
    width: '100%',
    height: '100%',
  },
  percentageContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  percentageItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  colorIndicator: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
  },
  totalEmployees: {
    fontSize: '14px',
    textAlign: 'center',
  },
};

export default EmployeeComposition;