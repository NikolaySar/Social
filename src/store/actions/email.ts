import emailEnums from "../enums/email";

export const startForgotPassword = () => {
  return {
    type: emailEnums.FORGOT_PASSWORD,
  };
};

export const forgotPasswordSuccess = (email: string) => {
  return {
    type: emailEnums.FORGOT_PASSWORD_SUCCESS,
    email,
  };
};

export const forgotPasswordError = (error: string) => {
  return {
    type: emailEnums.FORGOT_PASSWORD_ERROR,
    error,
  };
};
