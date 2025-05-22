import { ICreateCompany, IResponsePost, IUser } from '../../interfaces';

export interface IUserState {
  error?: null | string;
  user: IUser | {};
  isAuth: boolean;
}

export interface IEmailState {
  error?: null | string;
  email?: string | null;
  resetPasswordSuccess: boolean;
}

export interface IEmailAction {
  type: string;
  email?: string;
  error?: string;
}

export interface IPostState {
  error?: null | string;
  post: IResponsePost | {};
  loading: boolean;
}

export interface ICompanyState {
  error?: null | string;
  company: ICreateCompany | {};
  loading: boolean;
}
