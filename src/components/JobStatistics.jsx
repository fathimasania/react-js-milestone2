import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const JobStatistics = () => {
  // Sample data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Job View',
        data: [52, 62, 70, 58, 44, 58, 64, 77, 67, 58, 50, 72],
        backgroundColor: '#5E48E8',
        borderRadius: 3,
        barThickness: 40,
        categoryPercentage: 0.6,
        barPercentage: 1.0,
      },
      {
        label: 'Job Applied',
        data: [65, 77, 90, 72, 58, 72, 77, 102, 92, 80, 68, 75],
        backgroundColor: "rgba(233, 232, 252, 1)",
        borderRadius: 3,
        barThickness: 40,
        categoryPercentage: 0.6,
        barPercentage: 1.0,
      }
    ]
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: '#222B45',
        titleColor: '#fff',
        bodyColor: '#fff',
        displayColors: false,
        callbacks: {
          label: (context) => context.raw,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 110,
        ticks: {
          stepSize: 20,
          color: '#999',
        },
        grid: {
          color: 'rgba(0,0,0,0.05)',
          borderDash: [4, 4],
        },
      },
      x: {
        stacked: true, 
        grid: { display: false },
        ticks: { color: '#999' },
      }
    },
    maintainAspectRatio: false,
  };


  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <h3 style={styles.title}>Job Statistics</h3>
        <div style={styles.legendContainer}>
          <span style={styles.legendItem}>
            <span style={styles.jobViewColor}></span>
            Job View
          </span>
          <span style={styles.legendItem}>
            <span style={styles.jobAppliedColor}></span>
            Job Applied
          </span>
          <div style={styles.dropdown}>
            This Month
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={styles.downIcon}>
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <div style={styles.chartContainer}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    marginTop: '20px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '18px',
    fontWeight: '600',
    margin: 0,
    color: '#111827',
  },
  legendContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    color: '#6B7280',
  },
  jobViewColor: {
    width: '12px',
    height: '12px',
    backgroundColor: 'rgba(233, 232, 252, 1)',
    borderRadius: '3px',
  },
  jobAppliedColor: {
    width: '12px',
    height: '12px',
    backgroundColor: '#5E48E8',
    borderRadius: '3px',
  },
  dropdown: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: '#3B4EF6',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
  },
  downIcon: {
    marginLeft: '4px',
  },
  chartContainer: {
    height: '300px',
    width: '100%',
  },
};

export default JobStatistics;