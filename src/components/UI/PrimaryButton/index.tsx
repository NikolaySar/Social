import { ReactNode } from 'react';
import { StyledPrimaryButton } from './style';
import { ButtonBase } from '@mui/material';

interface IPrimaryButtonProps {
  children: ReactNode;
  handleClick?: () => void;
}

const PrimaryButton = ({ children, handleClick }: IPrimaryButtonProps) => {
  return (
    <ButtonBase>
      <StyledPrimaryButton onClick={handleClick}>
        {children}
      </StyledPrimaryButton>
    </ButtonBase>
  );
};

export default PrimaryButton;
