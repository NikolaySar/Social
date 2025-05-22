import { IsNotAuthInnerProps } from '../../../interfaces';
import { StyledNotAuthContainer, StyledButton, StyledDivider } from './style';

const IsNotAuthInner: React.FC<IsNotAuthInnerProps> = ({
  handleModalAuth,
  handleModalRegister,
}) => {
  return (
    <StyledNotAuthContainer>
      <StyledButton onClick={handleModalAuth}>Вход</StyledButton>
      <StyledDivider>|</StyledDivider>
      <StyledButton onClick={handleModalRegister}>Регистрация</StyledButton>
    </StyledNotAuthContainer>
  );
};

export default IsNotAuthInner;
