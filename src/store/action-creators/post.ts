import { IDispatch, IPostAction, IResponsePost } from '@/interfaces';
import {
  startFetchPost,
  fetchPostSuccess,
  fetchPostError,
  startFetchPostByUser,
  fetchPostByUserError,
  fetchPostByUserSuccess,
} from '../actions/post';
import { AxiosError } from 'axios';
import { getPostByUserServices, getPostServices } from '@/services/post';

export const getPosts = () => {
  return async (dispatch: IDispatch<IPostAction>) => {
    try {
      dispatch(startFetchPost());

      const response: { data: IResponsePost } = await getPostServices();
      dispatch(fetchPostSuccess(response.data));
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response && axiosError.response.data) {
        const errorText = axiosError.response.data.message;
        dispatch(fetchPostError(errorText));
      }
    }
  };
};

export const getPostsByUser = (_id: string) => {
  return async (dispatch: IDispatch<IPostAction>) => {
    try {
      dispatch(startFetchPostByUser());

      const response: { data: IResponsePost } =
        await getPostByUserServices(_id);

      dispatch(fetchPostByUserSuccess(response.data));
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response && axiosError.response.data) {
        const errorText = axiosError.response.data.message;
        dispatch(fetchPostByUserError(errorText));
      }
    }
  };
};
