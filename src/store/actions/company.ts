import { ICreateCompany } from '@/interfaces';
import companyActions from '../enums/company';

export const startCreateCompany = () => ({
  type: companyActions.COMPANY_CREATE,
});

export const createCompanySuccess = (payload: ICreateCompany) => ({
  type: companyActions.COMPANY_CREATE_SUCCESS,
  payload,
});

export const createCompanyError = (error: string) => ({
  type: companyActions.COMPANY_CREATE_ERROR,
  error,
});

export const startGetCompanyByUserId = (userId: string) => ({
  type: companyActions.START_GET_COMPANY,
  userId,
});

export const getCompanyByUserIdSuccess = (payload: ICreateCompany) => ({
  type: companyActions.GET_COMPANY_SUCCESS,
  payload,
});

export const getCompanyByUserIdError = (error: string) => ({
  type: companyActions.GET_COMPANY_ERROR,
  error,
});
