import axios from 'axios';
import { getAccessToken, setAccessToken } from '../utils/auth';

const api = axios.create({
  baseURL: 'https://backend-login-lbxh.onrender.com/api', // Make sure the backend URL is correct
  withCredentials: true, // Include this to ensure cookies (refresh token) are sent
});

// Interceptor to attach the Authorization header with the access token
api.interceptors.request.use(
  (config) => {
    const token = getAccessToken(); // Retrieve access token from storage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor to handle responses, including token refreshing when a 401 error occurs
api.interceptors.response.use(
  (response) => response, // Return the response as it is
  async (error) => {
    const originalRequest = error.config;

    // Check if it's a 401 error and that we haven't retried this request already
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken'); // Retrieve refresh token
        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        // Call the refresh token endpoint
        const response = await axios.post(
          'https://backend-login-lbxh.onrender.com/api/refreshToken', 
          { refreshToken }, 
          { withCredentials: true } // Ensure cookies are sent with the request
        );

        setAccessToken(response.data.accessToken); // Update the access token in localStorage

        // Update the authorization header for the original request and retry
        originalRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
        return api(originalRequest); // Retry the original request
      } catch (err) {
        console.error('Error refreshing token:', err);
        // Remove tokens and redirect to login if refreshing fails
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login'; // Redirect to login page
      }
    }
    return Promise.reject(error); // Reject the error if not a 401 or if retry fails
  }
);

// API calls
export const login = (credentials) => api.post('/login', credentials); // Login
export const register = (userData) => api.post('/register', userData); // Register
export const getUser = () => api.get('/user'); // Get user details
export const logout = async () => {
  try {
    await api.post('/logout'); // Call logout API
    localStorage.removeItem('accessToken'); // Clear tokens
    localStorage.removeItem('refreshToken');
    window.location.href = '/login'; // Redirect to login page
  } catch (error) {
    console.error('Error during logout:', error);
  }
};
