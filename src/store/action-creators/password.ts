import { AxiosError } from 'axios';
import {
  startResetPassword,
  resetPasswordError,
  resetPasswordSuccess,
} from '../actions/password';
import { resetPasswordService } from '@/services/password';
import {
  IDispatch,
  IPasswordAction,
  IPasswordResponse,
} from '../../interfaces';

export const resetPassword = (password: string, token: string) => {
  return async (dispatch: IDispatch<IPasswordAction>) => {
    try {
      dispatch(startResetPassword());

      const response: { data: IPasswordResponse } = await resetPasswordService(
        password,
        token
      );
      console.log(response, 'REsponsE');
      dispatch(resetPasswordSuccess(response.data.password));
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response && axiosError.response.data) {
        const errorText = axiosError.response.data.message;
        dispatch(resetPasswordError(errorText));
      }
    }
  };
};
