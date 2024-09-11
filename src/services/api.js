import axios from 'axios';
import { getAccessToken, setAccessToken } from '../utils/auth';

const api = axios.create({
  baseURL: 'https://backend-login-lbxh.onrender.com/api', 
  withCredentials: true, 
});


api.interceptors.request.use(
  (config) => {
    const token = getAccessToken(); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response, 
  async (error) => {
    const originalRequest = error.config;

    
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken'); 
        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        
        const response = await axios.post(
          'https://backend-login-lbxh.onrender.com/api/refreshToken', 
          { refreshToken }, 
          { withCredentials: true } 
        );

        setAccessToken(response.data.accessToken); 

        
        originalRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
        return api(originalRequest); 
      } catch (err) {
        console.error('Error refreshing token:', err);
        
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/logIn'; 
      }
    }
    return Promise.reject(error); 
  }
);


export const login = (credentials) => api.post('/logIn', credentials); 
export const register = (userData) => api.post('/signUp', userData); 
export const getUser = () => api.get('/users'); 
export const logout = async () => {
  try {
    await api.post('/logout'); 
    localStorage.removeItem('accessToken'); 
    localStorage.removeItem('refreshToken');
    window.location.href = '/logIn'; 
  } catch (error) {
    console.error('Error during logout:', error);
  }
};
