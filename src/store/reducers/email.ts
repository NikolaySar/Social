import emailEnums from '../enums/email';
import { IEmailState, IEmailAction } from './interface';

const initialState: IEmailState = {
  error: null,
  resetPasswordSuccess: false,
  email: null,
};

export const emailReducer = (
  state: IEmailState = initialState,
  action: IEmailAction
): IEmailState => {
  switch (action.type) {
    case emailEnums.FORGOT_PASSWORD:
      return { ...state, resetPasswordSuccess: false, error: null };
    case emailEnums.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: true,
        error: null,
        email: action.email,
      };
    case emailEnums.FORGOT_PASSWORD_ERROR:
      return { ...state, error: action.error, resetPasswordSuccess: false };
    default:
      return state;
  }
};
