import React from 'react';
import { Search, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/ThemeContext';
import bellIcon from '../assets/images/notification_icon.svg';

const Header = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header style={{
      ...styles.header,
      backgroundColor: darkMode ? '#0D0D0D' : '#ffffff',
      color: darkMode ? '#f9fafb' : '#ffffff'
    }}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <div style={styles.logoCircle}>
          <span style={styles.logoText}>C</span>
        </div>
        <span style={{
          ...styles.brandName,
          color: darkMode ? '#f9fafb' : '#000000'
        }}>Circle Soft</span>
      </div>

      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <div style={styles.searchIconContainer}>
          <Search style={{
            ...styles.searchIcon,
            color: darkMode ? '#ffffff' : '#9ca3af'
          }} />
        </div>
        <input
          type="text"
          style={{
            ...styles.searchInput,
            backgroundColor: darkMode ? '#2D2D2D' : '#f3f4f6',
            // border: darkMode ? '1px solid #4b5563' : '1px solid #e5e7eb',
            color: darkMode ? '#ffffff' : '#374151'
          }}
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Action Icons */}
      <div style={styles.actionContainer}>
        <button 
          style={styles.imageButton}
          onClick={toggleTheme}
        >
          {darkMode ? (
            <Sun style={{ color: '#fbbf24' }} size={20} />
          ) : (
            <Moon style={{ color: '#4b5563' }} size={20} />
          )}
        </button>
        <button style={styles.notificationButton}>
          <img 
            src={bellIcon}
            alt="Notifications" 
            style={{
              ...styles.iconImage,
              filter: darkMode ? 'invert(100%)' : 'none'
            }} 
          />
        </button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display:'flex',
    width:'100vw',
    height:'25px',
    padding: 25,
    top:0,
    left:0,
    position:'fixed',
    backgroundColor: '#ffffff',
    justifyContent:'space-between'
  },
  
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoCircle: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'linear-gradient(to right, #8b5cf6, #3b82f6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '8px',
  },
  logoText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  brandName: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000000',
  },
  searchContainer: {
    position: 'relative',
    flex: '1',
    maxWidth: '576px',
    margin: '0 16px',
  },
  searchIconContainer: {
    position: 'absolute',
    left: '12px',
    top: '8px',
    pointerEvents: 'none',
  },
  searchIcon: {
    width: '20px',
    height: '20px',
    color: '#9ca3af',
  },
  searchInput: {
    width: '100%',
    padding: '8px 16px 8px 40px',
    backgroundColor: '#f3f4f6',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#374151',
    outline: 'none',
  },
  actionContainer: {
    display: 'flex',
  },
  imageButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationButton: {
    position: 'relative',
    marginLeft: '8px',
    marginRight:'20px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: '30px',
    height: '30px',
  },
  notificationDot: {
    position: 'absolute',
    top: '2px',
    right: '4px',
    width: '8px',
    height: '8px',
    backgroundColor: '#ef4444',
    borderRadius: '50%',
  }
};

export default Header;