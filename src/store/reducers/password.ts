import passwordEnums from '../enums/password';
import { IPasswordAction } from '../../interfaces';

export interface IPasswordState {
  error?: null | string;
  password?: string | null;
}

const initialState: IPasswordState = {
  error: null,
  password: null,
};

export const passwordReducer = (
  state: IPasswordState = initialState,
  action: IPasswordAction
): IPasswordState => {
  switch (action.type) {
    case passwordEnums.RESET_PASSWORD:
      return { ...state, error: null };
    case passwordEnums.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        error: null,
        password: action.password,
      };
    case passwordEnums.RESET_PASSWORD_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
