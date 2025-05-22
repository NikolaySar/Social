export interface IOpenEmail {
  email: {
    email: string;
    error?: string[];
  };
}

export interface IOpenEmailProps {
  handleClose: () => void;
}
