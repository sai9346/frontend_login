import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';
import { toast } from 'react-toastify'; 

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const res = await axios.post('https://backend-login-lbxh.onrender.com/api/auth/login', { email, password });

      if (res.status === 200) {
        setIsLoggedIn(true);  
        toast.success('Login successful!'); 
        navigate('/dashboard'); 
      } else {
        toast.error('Login failed! Please try again.');  
      }
    } catch (err) {
      toast.error('Login failed! Please check your credentials.');  
    }
  };

  return (
    <div>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
