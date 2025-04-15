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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const JobStatistics = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Job View',
        data: [52, 62, 70, 58, 44, 58, 64, 77, 67, 58, 50, 72],
        backgroundColor: 'rgba(233, 232, 252, 1)',
        borderRadius: 10,
        barThickness: 30,
        categoryPercentage: 0.6,
        barPercentage: 1.0,
      },
      {
        label: 'Job Applied',
        data: [65, 77, 90, 72, 58, 72, 77, 102, 92, 80, 68, 75],
        backgroundColor: '#5E48E8',
        borderRadius: 10,
        barThickness: 20,
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
        stacked: true, // Changed from true to false for side-by-side bars
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
            <span style={{...styles.jobViewColor, border: '1px solid rgba(0,0,0,0.1)'}}></span>
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
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0px 1px 3px rgba(0,0,0,0.1)',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  title: {
    margin: 0,
    fontSize: '20px',
    fontWeight: 600,
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
    color: '#3B4EF6',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
  },
  downIcon: {
    marginLeft: '6px',
  },
  chartContainer: {
    height: '300px',
  },
};

export default JobStatistics;