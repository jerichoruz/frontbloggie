import { AxiosRequestConfig } from 'axios';

export const getConfig = (): AxiosRequestConfig => {
  const token = localStorage.getItem('token');
  return {
    headers: { 'api-token': token },
  };
};
