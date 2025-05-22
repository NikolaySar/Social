import passwordEnums from '../enums/password';

export const startResetPassword = () => {
  return {
    type: passwordEnums.RESET_PASSWORD,
  };
};

export const resetPasswordSuccess = (password: string) => {
  return {
    type: passwordEnums.RESET_PASSWORD_SUCCESS,
    password,
  };
};

export const resetPasswordError = (error: string) => {
  return {
    type: passwordEnums.RESET_PASSWORD_ERROR,
    error,
  };
};
