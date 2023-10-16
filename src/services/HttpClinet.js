import axios from 'axios';
import {BASE_URL} from '@config/env.dev';
export const HttpClient = axios.create({
  baseURL: `${BASE_URL}/`,
  timeout: 60 * 1 * 1000,
  withCredentials: false,
});

HttpClient.interceptors.response.use(
  async response => response,
  async error => error,
);
