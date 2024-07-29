import axios from 'axios';

const API_URL = 'http://223.130.135.136:8080/';

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export default axiosInstance;
