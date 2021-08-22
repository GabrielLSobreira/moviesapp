import axios from 'axios';

export const API_KEY = '6b74722dde66c42c6dc3c8c621e04cd7';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});
