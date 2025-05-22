export interface IRootState {
  user: {
    isAuth: boolean;
  };
}

export interface IProps {
  path: string;
  component: JSX.Element;
}
