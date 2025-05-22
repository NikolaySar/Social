import api from '../axios';
import { AxiosResponse } from 'axios';
import {
  IResponse,
  IUserData,
  IResponseLogin,
  IEditFormValue,
  IUser,
  IUserInfo,
} from '../interfaces';
import { IUserFilters } from '@/pages/UsersListing/interface';

export const registerUserService = async (
  userData: IUserData
): Promise<AxiosResponse<IResponse>> => {
  return await api.post<IResponse>('/auth/register', userData);
};

export const loginUserService = async (
  userData: IUserData
): Promise<AxiosResponse<IResponseLogin>> => {
  return api.post<IResponseLogin>('/auth/login', userData);
};

export const logoutUserService = async (): Promise<AxiosResponse<IResponse>> => {
  return api.get<IResponse>('/auth/logout');
};

export const getUserService = async (): Promise<AxiosResponse> => {
  return api.get<IUser>('/user');
};

export const editUserService = async (
  userData: IEditFormValue | IUserInfo | FormData
): Promise<AxiosResponse<IResponse>> => {
  return await api.patch<IResponse>('/user/update', userData);
};

export const getUsersByFiltersService = async (
  filters: IUserFilters
): Promise<AxiosResponse<IUser[]>> => {
  return api.get<IUser[]>('/user/filter', {
    params: filters,
    paramsSerializer: {
      indexes: true,
    },
  });
};
