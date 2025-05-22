import api from '../axios';
import { AxiosResponse } from 'axios';

export interface IEmailResponse {
  accepted: string[];
  success: boolean;
  email: string;
}

export const sendEmailService = async (
  email: string
): Promise<AxiosResponse<IEmailResponse>> => {
  const response = await api.post<IEmailResponse>('auth/restore', {
    email,
  });
  return response;
};
