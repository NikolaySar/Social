import { AxiosResponse } from 'axios';
import api from '@/axios';
import { ICreateCompany, ICreateCompanyWithoutId } from '@/interfaces';

export const postCompanyServices = async (
  companyData: ICreateCompanyWithoutId | FormData
): Promise<AxiosResponse<ICreateCompany>> => {
  return await api.post<ICreateCompany>('/company/create', companyData);
};

export const getCompanyByUserIdServices = async (
  userId: string
): Promise<AxiosResponse<ICreateCompany>> => {
  return await api.get(`/company/user/${userId}`);
};
