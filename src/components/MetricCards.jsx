import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const MetricsCards = ({darkMode}) => {
  // Data for the metrics cards
  const metricsData = [
    {
      title: "Total Employees",
      value: 856,
      label: "Employee",
      change: 10.0,
      increasing: true
    },
    {
      title: "Job View",
      value: 3342,
      label: "Viewers",
      change: 22.0,
      increasing: true
    },
    {
      title: "Job Applied",
      value: 77,
      label: "Applicants",
      change: 12.0,
      increasing: true
    },
    {
      title: "Resigned Employees",
      value: 17,
      label: "Employee",
      change: 7.0,
      increasing: false
    }
  ];

  return (
    <div style={styles.metricsContainer}>
      {metricsData.map((metric, index) => (
        <div key={index} style={{...styles.metricCard, backgroundColor: darkMode ? '#000000' : '#ffffff'}}>
          <div style={{...styles.metricHeader,  color: darkMode ? '#ffffff' : '#374151',}}>
            <span style={styles.metricTitle}>{metric.title}</span>
            <div 
              style={{
                ...styles.changeIndicator,
                backgroundColor: metric.increasing ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                color: metric.increasing ? '#22c55e' : '#ef4444'
              }}
            >
              {metric.increasing ? (
                <ArrowUp size={16} style={styles.arrowIcon} />
              ) : (
                <ArrowDown size={16} style={styles.arrowIcon} />
              )}
              {metric.change}%
            </div>
          </div>
          <div style={{...styles.metricValue,  color: darkMode ? '#ffffff' : '#374151'}}>{metric.value.toLocaleString()}</div>
          <div style={{...styles.metricLabel,  color: darkMode ? '#ffffff' : '#374151'}}>{metric.label}</div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  metricsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '16px',
    width: '100%',
    maxWidth: '100%', // Ensure it doesn't overflow
  },
  metricCard: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    flex: 1,
    minWidth: '200px',
  },
  metricHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  metricTitle: {
    fontSize: '16px',
    fontWeight: '500',
   
  },
  changeIndicator: {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 8px',
    borderRadius: '16px',
    fontSize: '14px',
    fontWeight: '500',
  },
  arrowIcon: {
    marginRight: '4px',
  },
  metricValue: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '4px',
  },
  metricLabel: {
    fontSize: '14px',
    color: '#6b7280',
  }
};

export default MetricsCards;