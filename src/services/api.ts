import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.beta.mejorconsalud.com'
});

export default api;