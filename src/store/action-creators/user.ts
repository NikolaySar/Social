import { AxiosError } from 'axios';
import { IDispatch, IEditFormValue, IUserEditAction, IUserInfo } from '../../interfaces';
import {
  startRegisterUser,
  registerSuccess,
  registerError,
  startAuthorizationUser,
  loginSuccess,
  loginError,
  startLogoutUser,
  logoutSuccess,
  logoutError,
  startEditUser,
  editUserSucces,
  editUserError,
  startGetUser,
  getUserSuccess,
  getUserError,
} from '../actions/user';

import {
  registerUserService,
  loginUserService,
  logoutUserService,
  getUserService,
  editUserService,
} from '@/services/user';

import {
  IResponse,
  IResponseLogin,
  IUserAction,
  IUserActionLogin,
  IUserData,
} from '../../interfaces';

export const registerUser = (userData: IUserData) => {
  return async (dispatch: IDispatch<IUserAction>) => {
    try {
      dispatch(startRegisterUser());

      const response: { data: IResponse } = await registerUserService(userData);

      dispatch(registerSuccess(response.data));

      localStorage.setItem('token', response.data.accessToken);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response && axiosError.response.data) {
        const errorText = axiosError.response.data.message;
        dispatch(registerError(errorText));
      }
    }
  };
};

export const loginUser = (userData: IUserData) => {
  return async (dispatch: IDispatch<IUserActionLogin>) => {
    try {
      dispatch(startAuthorizationUser());

      const response: { data: IResponseLogin } = await loginUserService(userData);

      dispatch(loginSuccess(response.data));
      localStorage.setItem('token', response.data.accessToken);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response && axiosError.response.data) {
        const errorText = axiosError.response.data.message;
        dispatch(loginError(errorText));
      }
    }
  };
};

export const logoutUser = () => {
  return async (dispatch: (action: IUserAction) => void) => {
    try {
      dispatch(startLogoutUser());

      const response: { data: IResponse } = await logoutUserService();

      dispatch(logoutSuccess(response.data));
      localStorage.removeItem('token');
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response && axiosError.response.data) {
        const errorText = axiosError.response.data.message;
        dispatch(logoutError(errorText));
      }
    }
  };
};

export const getUser = () => {
  return async (dispatch: IDispatch<IUserAction>) => {
    try {
      dispatch(startGetUser());

      const response: { data: IResponse } = await getUserService();
      dispatch(getUserSuccess(response.data));
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response && axiosError.response.data) {
        const errorText = axiosError.response.data.message;
        dispatch(getUserError(errorText));
      }
    }
  };
};

export const editUser = (userData: IEditFormValue | IUserInfo | FormData) => {
  return async (dispatch: IDispatch<IUserEditAction>) => {
    try {
      dispatch(startEditUser());

      const response = await editUserService(userData);

      dispatch(editUserSucces(response.data.user));
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response && axiosError.response.data) {
        const errorText = axiosError.response.data.message;
        dispatch(editUserError(errorText));
      }
    }
  };
};
