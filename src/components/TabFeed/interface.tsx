import { IResponsePost } from '@/interfaces';

export interface ITabFeedProps {
  setPostCount?: React.Dispatch<React.SetStateAction<number>>;
  userId?: string;
  posts: IResponsePost[];
  handleModalPost: () => void;
}
