import axios from 'axios';

const API_URL = 'http://223.130.135.136:8080'; 

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
      'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default axiosInstance;