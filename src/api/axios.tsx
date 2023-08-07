import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import Axios from 'axios';
import { servers } from '../../swagger.json';

const API_BASE_URL = servers[0].url;

export type CustomAxiosResponse<T = any> = AxiosResponse<T>;

export const AxiosInstance = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function request<T = any, R = CustomAxiosResponse<T>, D = any>(
  config: AxiosRequestConfig<D>,
  options?: AxiosRequestConfig<D>
): Promise<R> {
  return AxiosInstance
    .request({ ...config, ...options })
    .then(response => response as R)
    .catch((error) => {
      if (Axios.isAxiosError(error)) {
        throw error.response?.data;
      }

      throw error;
    });
}
