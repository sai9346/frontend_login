import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);  // Reset login state
    navigate('/');  // Redirect to home after logout
  };

  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
