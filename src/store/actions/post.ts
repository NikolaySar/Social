import { IResponsePost } from '@/interfaces';
import postActions from '../enums/post';

export const startFetchPost = () => ({
  type: postActions.FETCH_POST,
});

export const fetchPostSuccess = (payload: IResponsePost) => ({
  type: postActions.FETCH_POST_SUCCESS,
  payload,
});

export const fetchPostError = (error: string) => ({
  type: postActions.FETCH_POST_ERROR,
  error,
});

export const startFetchPostByUser = () => ({
  type: postActions.FETCH_POST_BY_USER,
});

export const fetchPostByUserSuccess = (payload: IResponsePost) => ({
  type: postActions.FETCH_POST_BY_USER_SUCCESS,
  payload,
});

export const fetchPostByUserError = (error: string) => ({
  type: postActions.FETCH_POST_BY_USER_ERROR,
  error,
});
