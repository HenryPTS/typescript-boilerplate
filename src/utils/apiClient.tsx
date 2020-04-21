import axios from 'axios';

const apiClient = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  withCredentials: false,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  }
});

apiClient.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['x-access-token'] = token;
    } else {
      delete apiClient.defaults.headers.common.Authorization;
      delete apiClient.defaults.headers.common['x-access-token']
    }
    return config;
  },
  error => Promise.reject(error)
);

export default apiClient;
