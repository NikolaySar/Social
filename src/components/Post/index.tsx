import { StyledPost } from './style';
import { ReactNode } from 'react';

const Post = ({ children }: { children?: ReactNode }) => {
  return <StyledPost>{children}</StyledPost>;
};

export default Post;
