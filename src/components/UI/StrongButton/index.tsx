import { IStrongButtonProps } from './interface';
import { StyledStrongButton } from './style';

const StrongButton = ({ children, handleClick }: IStrongButtonProps) => {
  return (
    <StyledStrongButton onClick={handleClick}>{children}</StyledStrongButton>
  );
};

export default StrongButton;
