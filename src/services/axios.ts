import axios from 'axios';
import { parseCookies } from 'nookies';

export function getAPIClient(context?: any) {
  const { 'lysei:token': token } = parseCookies(context);

  const api = axios.create({
    baseURL: process.env.API_ENDPOINT,
  });

  api.interceptors.request.use(config => config);

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }

  return api;
}
