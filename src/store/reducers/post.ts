import postActions from '../enums/post';
import { IPostAction } from '@/interfaces';
import { IPostState } from './interface';

const initialState: IPostState = {
  error: null,
  post: [],
  loading: false,
};

export const postReducer = (state: IPostState = initialState, action: IPostAction) => {
  switch (action.type) {
    case postActions.FETCH_POST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case postActions.FETCH_POST_SUCCESS:
      return {
        error: null,
        loading: false,
        post: action.payload,
      };

    case postActions.FETCH_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case postActions.FETCH_POST_BY_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case postActions.FETCH_POST_BY_USER_SUCCESS:
      return {
        error: null,
        loading: false,
        post: action.payload,
      };

    case postActions.FETCH_POST_BY_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
