import api from '@/axios';
import { AxiosResponse } from 'axios';
import { IResponsePost } from '@/interfaces';

export const createPost = (postData: FormData) => {
  return api.post('post/create', postData);
};

export const getPost = async (id: string) => {
  return await api.get(`post/${id}`);
};

export const getPostServices = async (): Promise<AxiosResponse<IResponsePost>> => {
  return api.get<IResponsePost>('/post');
};

export const getPostByUserServices = async (_id: string): Promise<AxiosResponse<IResponsePost>> => {
  return api.get<IResponsePost>(`/post/user-post/${_id}`);
};
