import { ReactNode } from 'react';

export interface IStrongButtonProps {
  children: ReactNode;
  handleClick?: () => void;
}
