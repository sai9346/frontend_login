import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Our Application</h1>
      <div style={{ marginTop: '20px' }}>
        <Link to="/login">
          <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>Login</button>
        </Link>
        <Link to="/register">
          <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
