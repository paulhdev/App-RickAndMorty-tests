import axios from 'axios';
const baseUrl = 'https://rickandmortyapi.com/api';

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
