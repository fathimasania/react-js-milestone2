import React, { useState } from 'react';
import profile from '../assets/images/human.jpg';
import icon1 from '../assets/images/Dashboard.svg';
import icon2 from '../assets/images/chart-square.svg';
import icon3 from '../assets/images/EmployeesIcon.svg';
import icon4 from '../assets/images/CompanyIcon.svg';
import icon5 from '../assets/images/CandidateIcon.svg';
import icon6 from '../assets/images/CalendarIcon.svg';
import icon7 from '../assets/images/EmployeesIcon.svg';
import icon8 from '../assets/images/SettingIcon.svg';

const Sidebar = ({darkMode}) => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  
  const menuItems = [
    { id: 'Dashboard', label: 'Dashboard', icon: icon1 },
    { id: 'Finance', label: 'Finance', icon: icon2 },
    { id: 'Employees', label: 'Employees', icon: icon3 },
    { id: 'Company', label: 'Company', icon: icon4 },
    { id: 'Candidate', label: 'Candidate', icon: icon5 },
    { id: 'Calendar', label: 'Calendar', icon: icon6 },
  ];
  
  const bottomMenuItems = [
    { id: 'Profile', label: 'Profile', icon: icon7 },
    { id: 'Setting', label: 'Setting', icon: icon8 },
  ];
  
  const handleMenuClick = (itemId) => {
    setActiveItem(itemId);
  };
  
  return (
    <div style={{
      ...styles.sidebar,
      backgroundColor: darkMode ? '#0D0D0D' : 'white',
      borderRight: darkMode ? '1px solid #374151' : '1px solid #e5e7eb'
    }}>
      {/* User profile section */}
      <div style={{
        ...styles.profileSection,
        borderBottom: darkMode ? '1px solid #374151' : '1px solid #e5e7eb'
      }}>
        <div style={styles.profileInfo}>
          <div style={styles.profileImage}>
            <img src={profile} alt="Profile" style={styles.profileImg} />
          </div>
          <div>
            <h3 style={{...styles.profileName,   color: darkMode ? '#ffffff' : '#000000',}}>Gavano</h3>
            <p style={styles.profileTitle}>HR Manager</p>
          </div>
        </div>
        <button style={{...styles.moreButton, color: darkMode? '#ffffff' : '#9ca3af'}}>•••</button>
      </div>
      
      {/* Main menu */}
      <div style={styles.menuContainer}>
        {menuItems.map(item => (
          <div 
            key={item.id}
            style={{
              ...styles.menuItem,
              ...(activeItem === item.id ? styles.activeMenuItem : styles.inactiveMenuItem)
            }}
            onClick={() => handleMenuClick(item.id)}
          >
            <img 
              src={item.icon} 
              alt={item.label} 
              style={{
                ...styles.icon,
                filter: activeItem === item.id ? 'brightness(0) saturate(100%) invert(31%) sepia(94%) saturate(1233%) hue-rotate(235deg) brightness(94%) contrast(93%)' : 'brightness(0) saturate(100%) invert(80%) sepia(6%) saturate(378%) hue-rotate(179deg) brightness(91%) contrast(86%)'
              }} 
            />
            <span style={{
              ...styles.menuLabel,
              ...(activeItem === item.id ? styles.activeMenuLabel : styles.inactiveMenuLabel)
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
      
      {/* Bottom menu */}
      <div style={styles.bottomMenu}>
        {bottomMenuItems.map(item => (
          <div 
            key={item.id}
            style={{
              ...styles.menuItem,
              ...(activeItem === item.id ? styles.activeMenuItem : styles.inactiveMenuItem)
            }}
            onClick={() => handleMenuClick(item.id)}
          >
            <img 
              src={item.icon} 
              alt={item.label} 
              style={{
                ...styles.icon,
                filter: activeItem === item.id ? 'brightness(0) saturate(100%) invert(31%) sepia(94%) saturate(1233%) hue-rotate(235deg) brightness(94%) contrast(93%)' : 'brightness(0) saturate(100%) invert(80%) sepia(6%) saturate(378%) hue-rotate(179deg) brightness(91%) contrast(86%)'
              }} 
            />
            <span style={{
              ...styles.menuLabel,
              ...(activeItem === item.id ? styles.activeMenuLabel : styles.inactiveMenuLabel)
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    position: 'fixed',
    left: 0,
    top: '74px',
    height: 'calc(100vh - 76px)',
    display: 'flex',
    flexDirection: 'column',
  },
  profileSection: {
    padding: '20px',
    // borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  profileImage: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginRight: '12px',
  },
  profileImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  profileName: {
    fontSize: '18px',
    fontWeight: '400',
    margin: 0,
  },
  profileTitle: {
    fontSize: '14px',
    color: '#9ca3af',
    margin: '4px 0 0 0',
  },
  moreButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    // padding: '8px',
    borderRadius: '8px',
  },
  menuContainer: {
    flex: 1,
    overflowY: 'auto',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 20px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  activeMenuItem: {
    color: '#5E48E8',
  },
  inactiveMenuItem: {
    color: '#9ca3af',
  },
  icon: {
    width: '24px',
    height: '24px',
    marginRight: '12px',
  },
  menuLabel: {
    fontSize: '16px',
    transition: 'all 0.2s',
  },
  activeMenuLabel: {
    fontWeight: '500',
  },
  inactiveMenuLabel: {
    fontWeight: 'normal',
  },
  bottomMenu: {
    borderTop: '1px solid #e5e7eb',
  },
};

export default Sidebar;