import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1', // Set base URL for all requests
  headers: {
    'Content-Type': 'application/json', // Set default content type (optional)
  },
});

export default api;