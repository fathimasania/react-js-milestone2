import React from 'react';
import filtersort from '../assets/images/filtersort.svg';

const EmployeeStatus = ({ darkMode }) => {
  const employees = [
    { name: 'Justin Lipshutz', department: 'Marketing', age: 22, discipline: '+100%', status: 'Permanent' },
    { name: 'Marcus Culhane', department: 'Finance', age: 24, discipline: '+95%', status: 'Contract' },
    { name: 'Leo Stanton', department: 'R&D', age: 28, discipline: '+89%', status: 'Permanent' }
  ];

  return (
    <div style={{
      ...styles.container,
      backgroundColor: darkMode ? '#000000' : '#FFFFFF',
      boxShadow: darkMode ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.1)',
      // width: '60%',
      marginRight: '20px' 
    }}>
      <div style={styles.header}>
        <h3 style={{...styles.title, color: darkMode ? '#FFFFFF' : '#111827'}}>Employee Status</h3>
        <div style={styles.filterContainer}>
          <span style={{...styles.filterText, color: darkMode ? '#9CA3AF' : '#6B7280'}}>Filter & Short</span>
          <img src={filtersort} alt="Filter & Sort" width={12} height={12} style={styles.filterIcon} />
        </div>
      </div>
      
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={{
              ...styles.tableHeader,
              borderBottom: darkMode ? '1px solid #374151' : '1px solid #E5E7EB'
            }}>
              <th style={{...styles.th, color: darkMode ? '#9CA3AF' : '#6B7280'}}>Employee Name</th>
              <th style={{...styles.th, color: darkMode ? '#9CA3AF' : '#6B7280'}}>Department</th>
              <th style={{...styles.th, color: darkMode ? '#9CA3AF' : '#6B7280'}}>Age</th>
              <th style={{...styles.th, color: darkMode ? '#9CA3AF' : '#6B7280'}}>Discipline</th>
              <th style={{...styles.th, color: darkMode ? '#9CA3AF' : '#6B7280'}}>Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr 
                key={index}
                style={{
                  ...styles.tableRow,
                  borderBottom: darkMode ? '1px solid #374151' : '1px solid #E5E7EB'
                }}
              >
                <td style={{...styles.td, color: darkMode ? '#F3F4F6' : '#111827'}}>{employee.name}</td>
                <td style={{...styles.td, color: darkMode ? '#9CA3AF' : '#6B7280'}}>{employee.department}</td>
                <td style={{...styles.td, color: darkMode ? '#9CA3AF' : '#6B7280'}}>{employee.age}</td>
                <td style={{...styles.td, color: '#10B981'}}>{employee.discipline}</td>
                <td>
                  <span style={{
                    ...styles.statusBadge,
                    backgroundColor: employee.status === 'Permanent' 
                      ? (darkMode ? '#1E40AF' : '#EFF6FF') 
                      : (darkMode ? '#374151' : '#F3F4F6'),
                    color: employee.status === 'Permanent' 
                      ? (darkMode ? '#60A5FA' : '#1E40AF') 
                      : (darkMode ? '#9CA3AF' : '#6B7280')
                  }}>
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    borderRadius: '12px',
    padding: '20px',
    marginTop: '20px',
    flex: { xs: '1 1 100%', sm: '0 0 60%' }, // Full width on mobile, 60% on larger
    width: '100%',
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '18px',
    fontWeight: '600',
    margin: 0,
  },
  filterContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
  },
  filterText: {
    fontSize: '14px',
  },
  filterIcon: {
    marginLeft: '4px',
  },
  tableContainer: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    // textAlign: 'left',
  },
  th: {
    padding: '8px 0',
    fontSize: '14px',
    fontWeight: '500',
  },
  tableRow: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  td: {
    padding: '16px 0',
    fontSize: '14px',
  },
  statusBadge: {
    padding: '6px 12px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '500',
    display: 'inline-block',
  },
};

export default EmployeeStatus;