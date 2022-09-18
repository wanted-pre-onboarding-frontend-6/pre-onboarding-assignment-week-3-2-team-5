import axios from 'axios';

const commentApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export { commentApi };
