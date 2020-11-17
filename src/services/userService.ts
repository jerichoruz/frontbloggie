import Axios, { AxiosResponse } from 'axios';
import { IUserProfile } from '../interfaces/UserProfile';
import { getConfig } from './appService';

export const signIn = async ({ email, password }): Promise<any> => {
  const resp = await Axios.post(`${process.env.REACT_APP_API_URL}/user/login`, {
    email,
    password,
  });
  return resp.data;
};

export const singUp = async (user: IUserProfile): Promise<any> => {
  const resp = await Axios.post(`${process.env.REACT_APP_API_URL}/user/`, user);
  return resp.data;
};

export const singInFG = async ({ email, accessToken }): Promise<any> => {
  const resp = await Axios.post(
    `${process.env.REACT_APP_API_URL}/users/loginfg`,
    {
      email,
      tokenfg: accessToken,
    },
  );
  return resp.data;
};

export const getMe = async (): Promise<IUserProfile> => {
  try {
    const resp = await Axios.get<IUserProfile>(
      `${process.env.REACT_APP_API_URL}/user/me`,
      getConfig(),
    );
    return resp.data;
  } catch (error) {
    console.log('remove token');
    localStorage.removeItem('token');
    window.location.reload();
    throw error;
  }
};

export const updateMe = async (
  user: IUserProfile,
): Promise<AxiosResponse<any>> => {
  delete user.password;
  const resp = await Axios.put<IUserProfile>(
    `${process.env.REACT_APP_API_URL}/user/me`,
    user,
    getConfig(),
  );
  return resp;
};
