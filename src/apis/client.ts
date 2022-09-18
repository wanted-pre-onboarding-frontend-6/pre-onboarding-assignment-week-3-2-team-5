import axios from 'axios';
import { SERVER_URL } from 'util/constants';

const client = axios.create({});

client.defaults.baseURL = SERVER_URL;

export default client;
