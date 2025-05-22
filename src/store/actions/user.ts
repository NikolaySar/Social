import userActions from '../enums/user';
import {
  IResponse,
  IResponseLogin,
  IUser,
  IUserEditAction,
} from '../../interfaces';

export const startRegisterUser = () => ({
  type: userActions.REGISTER,
});

export const registerSuccess = (payload: IResponse) => ({
  type: userActions.REGISTER_SUCCESS,
  payload,
});

export const registerError = (error: string) => ({
  type: userActions.REGISTER_ERROR,
  error,
});

export const startAuthorizationUser = () => ({
  type: userActions.LOGIN,
});

export const loginSuccess = (payload: IResponseLogin) => ({
  type: userActions.LOGIN_SUCCESS,
  payload,
});

export const loginError = (error: string) => ({
  type: userActions.LOGIN_ERROR,
  error,
});

export const startLogoutUser = () => ({
  type: userActions.LOGOUT,
});

export const logoutSuccess = (payload: IResponse) => ({
  type: userActions.LOGOUT_SUCCES,
  payload,
});

export const logoutError = (error: string) => ({
  type: userActions.LOGOUT_ERROR,
  error,
});

export const startEditUser = () => ({
  type: userActions.EDIT_USER,
});

export const editUserSucces = (payload: IUser): IUserEditAction => ({
  type: userActions.EDIT_USER_SUCCESS,
  payload,
});

export const editUserError = (error: string) => ({
  type: userActions.EDIT_USER_ERROR,
  error,
});

export const startGetUser = () => ({
  type: userActions.GET_USER,
});

export const getUserSuccess = (payload: IResponse) => ({
  type: userActions.GET_USER_SUCCESS,
  payload,
});

export const getUserError = (error: string) => ({
  type: userActions.GET_USER_ERROR,
  error,
});
