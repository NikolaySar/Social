export interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IsNotAuthInnerProps {
  handleModalAuth: () => void;
  handleModalRegister: () => void;
  confirmPassword?: string;
}

export interface IUserInfo {
  avatarUrl?: string;
  coverUrl?: string;
  bornDate?: string;
  lastWork?: {
    title: string;
    company: string;
  };
  education?: {
    specialization?: string;
    institution?: string;
  };
  location?: string;
  aboutMe?: string;
  interests?: string;
  gender?: string;
  languages?: string[];
  ahubLink: string;
  contactInfo?: {
    phone?: string;
    ahubMarketLink?: string;
  };
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isEmailConfirmed: boolean;
  userInfo: IUserInfo;
}

export interface IResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface IUserLogin {
  id: string;
  email: string;
  password: string;
}

export interface IResponseLogin {
  accessToken: string;
  refreshToken: string;
  user: IUserLogin;
}

export interface IUserActionLogin {
  type: string;
  payload?: IResponseLogin;
  error?: string;
}

export interface IUserAction {
  type: string;
  payload?: IResponse;
  error?: string;
}

export interface IUserData {
  email: string;
  password: string;
}

export interface IDispatch<T> {
  (action: T): void;
}

export interface ISnackbar {
  open: boolean;
  message: string;
}

export interface IRootReduxState {
  user: {
    user: IUser;
    error: string[];
    isAuth: boolean;
  };
}

export interface ICompanyRootReduxState {
  company: {
    company: ICreateCompany;
    error: string[];
    loading: boolean;
  };
}

export interface ITabFeed {
  post: {
    post: IResponsePost[];
    error?: string[];
    loading?: boolean;
  };
}
export interface IFormInputs {
  password: string;
  confirmPassword: string;
}

export interface IPasswordAction {
  type: string;
  password?: string;
  error?: string;
}

export interface IPasswordResponse {
  password: string;
  token: string;
}

export interface IEditFormValue {
  firstName?: string;
  lastName?: string;
  avatarUrl?: File;
  coverUrl?: File;
  bornDate?: string;
  lastWork?: {
    company?: string;
    title?: string;
  };
  education?: {
    institution?: string;
    specialization?: string;
  };
  location?: string;
  languages?: string[];
  ahubLink?: string;
  gender?: string;
}

export interface IUserEditAction {
  type: string;
  payload?: IUser;
  error?: string;
}

export interface IResponsePost {
  _id: string;
  description: string;
  images: string[];
  videos: string[];
  documents: string[];
  author: IUser;
  createdAt: string;
}

export interface IPostAction {
  type: string;
  payload?: IResponsePost;
  error?: string;
}

export interface ICreateCompany {
  _id: string;
  companyName: string;
  phoneNumber: string;
  website?: string;
  ahubCompanyLink?: string;
  industry?: string[];
  companyType?: string[];
  companySize?: string[];
  companyLocation?: string;
  aboutCompany?: string;
  companyInterests?: string;
  companyAvatarUrl?: string | File | undefined;
  companyCoverUrl?: string;
  isRepresentative: boolean;
  author?: IUser;
}

export interface ICompanyAction {
  type: string;
  payload?: ICreateCompany;
  error?: string;
}

export interface ICreateCompanyWithoutId extends Omit<ICreateCompany, '_id'> {}
