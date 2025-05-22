export interface IForgotPasswordProps {
  handleClose: () => void;
  handleModalEmail: () => void;
  handleBackForgotPas: () => void;
}

export interface IFormForgot {
  email: string;
}

export interface IEmailReduxState {
  email: {
    error: string[];
  };
}
