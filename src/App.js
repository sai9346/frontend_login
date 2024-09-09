import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import TokenDisplay from './components/TokenDisplay';
import Navbar from './components/Navbar'; // Navbar component
import { ToastContainer } from 'react-toastify';
<<<<<<< HEAD
import 'react-toastify/dist/ReactToastify.css';
=======
import 'react-toastify/dist/ReactToastify.css'; 
>>>>>>> 496f6d83b6d560a7828181ba384a813dd662a48e

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    // Check for token on initial load
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
<<<<<<< HEAD
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <ToastContainer />
=======
      <ToastContainer /> 
>>>>>>> 496f6d83b6d560a7828181ba384a813dd662a48e
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />} />
        <Route path="/tokens" element={<TokenDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
