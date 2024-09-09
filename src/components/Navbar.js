// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.navLink}>Home</Link>
      <Link to="/login" style={styles.navLink}>Login</Link>
      <Link to="/register" style={styles.navLink}>Register</Link>
    </nav>
  );
};

// Styles for Navbar
const styles = {
  navbar: {
    width: '100%',
    backgroundColor: '#007bff',
    padding: '10px 0',
    textAlign: 'center',
    position: 'fixed',  // Fix the navbar to the top of the page
    top: 0,  // Align at the top
    left: 0,  // Make sure it spans from the left
    zIndex: 1000,  // Ensure the navbar stays on top of other content
  },
  navLink: {
    color: '#fff',
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
};

export default Navbar;
