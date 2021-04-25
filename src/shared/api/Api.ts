import axios from 'axios';

const starWarsApi = axios.create({
  baseURL: 'https://swapi.dev/api',
  headers: { 'Content-Type': 'application/json' }
});

export default starWarsApi;