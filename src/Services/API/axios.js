import axios from 'axios';

const api_url = process.env.REACT_APP_API_URL;

const auth = axios.create({
  baseURL: api_url
});

export default auth;
