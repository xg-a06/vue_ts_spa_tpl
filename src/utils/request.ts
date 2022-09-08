import axios from 'axios';
import type { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create();

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 可以处理token
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

service.interceptors.response.use(
  async (response: AxiosResponse) => {
    console.log(response);

    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default service;
