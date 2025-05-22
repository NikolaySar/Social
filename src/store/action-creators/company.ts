import { ICompanyAction, ICreateCompany, ICreateCompanyWithoutId, IDispatch } from '@/interfaces';
import {
  createCompanyError,
  createCompanySuccess,
  getCompanyByUserIdError,
  getCompanyByUserIdSuccess,
  startCreateCompany,
  startGetCompanyByUserId,
} from '../actions/company';
import { AxiosError } from 'axios';
import { getCompanyByUserIdServices, postCompanyServices } from '@/services/company';

export const createCompany = (companyData: ICreateCompanyWithoutId | FormData) => {
  return async (dispatch: IDispatch<ICompanyAction>) => {
    try {
      dispatch(startCreateCompany());

      const response: { data: ICreateCompany } = await postCompanyServices(companyData);

      dispatch(createCompanySuccess(response.data));
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response && axiosError.response.data) {
        const errorText = axiosError.response.data.message;

        dispatch(createCompanyError(errorText));
      }
    }
  };
};

export const getCompanyByUserId = (userId: string) => {
  return async (dispatch: IDispatch<ICompanyAction>) => {
    try {
      dispatch(startGetCompanyByUserId(userId));

      const response: { data: ICreateCompany } = await getCompanyByUserIdServices(userId);

      dispatch(getCompanyByUserIdSuccess(response.data));
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response && axiosError.response.data) {
        const errorText = axiosError.response.data.message;

        dispatch(getCompanyByUserIdError(errorText));
      }
    }
  };
};
