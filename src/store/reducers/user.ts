import userActions from '../enums/user';
import { IUserAction } from '../../interfaces';
import { IUserState } from './interface';

const initialState: IUserState = {
  error: null,
  user: {},
  isAuth: false,
};

export const userReducer = (
  state: IUserState = initialState,
  action: IUserAction
) => {
  switch (action.type) {
    case userActions.REGISTER:
      return {
        ...state,
        error: null,
      };

    case userActions.REGISTER_SUCCESS:
      return {
        error: null,
        isAuth: true,
        user: action.payload,
      };

    case userActions.REGISTER_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case userActions.LOGIN:
      return {
        ...state,
        error: null,
      };
    case userActions.LOGIN_SUCCESS:
      return {
        error: null,
        isAuth: true,
        user: action.payload,
      };
    case userActions.LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case userActions.LOGOUT:
      return {
        ...state,
        error: null,
      };

    case userActions.LOGOUT_SUCCES:
      return {
        error: null,
        isAuth: false,
        user: {},
      };

    case userActions.LOGOUT_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case userActions.EDIT_USER:
      return {
        ...state,
        error: null,
      };

    case userActions.EDIT_USER_SUCCESS:
      return {
        error: null,
        isAuth: true,
        user: action.payload,
      };

    case userActions.EDIT_USER_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case userActions.GET_USER:
      return {
        ...state,
        error: null,
      };

    case userActions.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case userActions.GET_USER_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
