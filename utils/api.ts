import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_KEY}`,
    'Content-Type': 'application/json',
  },
});

export default api;