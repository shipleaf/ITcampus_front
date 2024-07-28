import axios from 'axios';

const API_URL = 'http://localhost:8080/'; 

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
