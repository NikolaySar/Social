import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IProps, IRootState } from '../interface';

const WithAuthPublic = ({ path, component }: IProps) => {
  const isAuth = useSelector((state: IRootState) => state.user.isAuth);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      return navigate(path);
    }
  }, [isAuth]);

  return component;
};

export default WithAuthPublic;
