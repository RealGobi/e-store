import axios from 'axios';

const dev = 'https://campus-molndal.herokuapp.com/';

const backend = axios.create({
  baseURL: dev,
  headers: { 'Content-Type': 'application/json' }
});

export default backend;