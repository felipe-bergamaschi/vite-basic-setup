import type { AxiosRequestConfig } from 'axios';
import Axios from 'axios';
import { servers } from '../../swagger.json';

const API_BASE_URL = servers[0].url;

export const AxiosInstance = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function request<T = any>(
  config: AxiosRequestConfig,
): Promise<T> {
  return AxiosInstance
    .request({ ...config })
    .then(response => response.data as T)
    .catch((error) => {
      if (Axios.isAxiosError(error)) {
        throw error.response?.data;
      }

      throw error;
    });
}
