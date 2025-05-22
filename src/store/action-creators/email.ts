import { AxiosError } from 'axios';
import {
  startForgotPassword,
  forgotPasswordSuccess,
  forgotPasswordError,
} from '../actions/email';
import { IEmailResponse, sendEmailService } from '../../services/email';
import { IEmailAction } from '../reducers/interface';
import { IDispatch } from '../../interfaces';

export const sendEmail = (email: string) => {
  return async (dispatch: IDispatch<IEmailAction>) => {
    try {
      dispatch(startForgotPassword());

      const response: { data: IEmailResponse } = await sendEmailService(email);

      dispatch(forgotPasswordSuccess(response.data.accepted[0]));
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response && axiosError.response.data) {
        const errorText = axiosError.response.data.message;
        dispatch(forgotPasswordError(errorText));
      }
    }
  };
};
