import React, { useState } from 'react';
// Icons would need to be imported or replaced with your own images

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  
  const menuItems = [
    { id: 'Dashboard', label: 'Dashboard', isActive: true },
    // { id: 'Finance', label: 'Finance', isActive: true },
    // { id: 'Employees', label: 'Employees', isActive: true },
    // { id: 'Company', label: 'Company' , isActive: true},
    // { id: 'Candidate', label: 'Candidate' , isActive: true},
    // { id: 'Calendar', label: 'Calendar' , isActive: true},
  ];
  
  const bottomMenuItems = [
    // { id: 'Profile', label: 'Profile' },
    // { id: 'Setting', label: 'Setting' },
  ];
  
  const handleMenuClick = (itemId) => {
    setActiveItem(itemId);
  };
  
  return (
    <div style={styles.sidebar}>
      {/* User profile section */}
      <div style={styles.profileSection}>
        <div style={styles.profileInfo}>
          <div style={styles.profileImage}>
            {/* Replace with actual image */}
            <div style={styles.avatarPlaceholder}></div>
          </div>
          <div>
            <h3 style={styles.profileName}>Gavano</h3>
            <p style={styles.profileTitle}>HR Manager</p>
          </div>
        </div>
        <button style={styles.moreButton}>•••</button>
      </div>
      
      {/* Main menu */}
      <div style={styles.menuContainer}>
        {menuItems.map(item => (
          <div 
            key={item.id}
            style={{
              ...styles.menuItem,
              ...(activeItem === item.id ? styles.activeMenuItem : {})
            }}
            onClick={() => handleMenuClick(item.id)}
          >
            <div style={styles.iconPlaceholder}>
              {/* Replace with actual icon */}
            </div>
            <span style={{
              ...styles.menuLabel,
              ...(activeItem === item.id ? styles.activeMenuLabel : {})
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
              ...(activeItem === item.id ? styles.activeMenuItem : {})
            }}
            onClick={() => handleMenuClick(item.id)}
          >
            <div style={styles.iconPlaceholder}>
              {/* Replace with actual icon */}
            </div>
            <span style={{
              ...styles.menuLabel,
              ...(activeItem === item.id ? styles.activeMenuLabel : {})
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
    top: '76px', // Adjust based on your header height
    height: 'calc(100vh - 76px)',
    borderRight: '1px solid #e5e7eb',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  profileSection: {
    padding: '20px',
    borderBottom: '1px solid #e5e7eb',
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
  avatarPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f3f4f6',
    borderRadius: '50%',
  },
  profileName: {
    fontSize: '18px',
    fontWeight: '600',
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
    padding: '8px',
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
    transition: 'background-color 0.2s',
  },
  activeMenuItem: {
    color: '#5E48E8',
  },
  iconPlaceholder: {
    width: '24px',
    height: '24px',
    marginRight: '12px',
    // Background color can be used to represent icons temporarily
    backgroundColor: '#e5e7eb',
    borderRadius: '4px',
  },
  menuLabel: {
    fontSize: '16px',
    fontWeight: 'normal',
  },
  activeMenuLabel: {
    fontWeight: '500',
  },
  bottomMenu: {
    borderTop: '1px solid #e5e7eb',
  },
};

export default Sidebar;