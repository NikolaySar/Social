import api from '../axios';
import { AxiosResponse } from 'axios';
import { IPasswordResponse } from '../interfaces';

export const resetPasswordService = async (
  password: string,
  token: string
): Promise<AxiosResponse<IPasswordResponse>> => {
  const response = await api.patch<IPasswordResponse>(
    `auth/change?token=${token}`,
    {
      password,
    }
  );
  return response;
};
