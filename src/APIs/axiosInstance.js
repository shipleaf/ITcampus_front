import axios from 'axios';

// const API_URL = 'http://223.130.135.136:8080';

// const API_URL = 'http://223.130.153.246:8080';

const API_URL = 'https://mjcback.duckdns.org';
// const API_URL = 'http://localhost:8080';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
      'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default axiosInstance;