// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to Our Platform</h1>
        <p style={styles.paragraph}>
          We aim to provide the best service to our users with easy access to features.
          Please register if you're new here, or log in to access your dashboard.
        </p>

        <div style={styles.buttonContainer}>
          <Link to="/login">
            <button style={styles.button}>Login</button>
          </Link>
          <Link to="/register">
            <button style={styles.button}>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
    padding: '0 20px',
  },
  content: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
    fontFamily: 'Roboto, sans-serif',
  },
  paragraph: {
    fontSize: '1.1rem',
    marginBottom: '40px',
    color: '#555',
    lineHeight: '1.6',
    fontFamily: 'Roboto, sans-serif',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Home;
