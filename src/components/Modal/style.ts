import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { primary } from '../../colors';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 40px 50px;
  max-width: 460px;
  border-radius: 30px;
  z-index: 1001;

  @media (max-width: 490px) {
    max-width: 400px;
  }

  @media (max-width: 400px) {
    max-width: 350px;
    padding: 20px 30px;
  }
`;

export const StyledTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 1px;
  text-align: center;
  margin: 0 0 5px 0;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

export const StyledSuptitle = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  text-align: center;
  margin: 0 0 30px 0;
`;

export const StyledButton = styled.button`
  width: 100px;
  background-color: #fff;
  cursor: pointer;
  border: 2px solid #00000033;
`;

export const StyledButtonSubmit = styled(Button)`
  && {
    min-width: 143px;
    height: 48px;
    padding: 16px 18px;
    background-color: #16993b;
    margin-left: auto;
    font-family: 'SF Pro Display', sans-serif;

    &:hover {
      background-color: #dbdbd9;
      color: #2c323a;
    }
  }
`;

export const StyledTextButton = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: center;
`;
export const StyledImage = styled.img`
  margin-bottom: 30px;
`;
export const StyledWrapper = styled.div`
  text-align: center;
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  gap: 25px;
  text-align: center;
  justify-content: center;
  margin: 30px;

  @media (max-width: 400px) {
    margin: 20px;
    gap: 20px;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLinkText = styled.p`
  max-width: 200px;
  font-size: 13px;
  font-weight: 300;
  line-height: 16px;
  text-align: left;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  transition:
    text-decoration 0.4s ease-in-out,
    transform 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
    transform: translateY(-5px);
  }
`;

export const StyledWrapperText = styled.div`
  max-width: 360px;
`;

export const StyledButtomBack = styled(Button)`
  && {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: #2c323a;
    &:hover {
      color: ${primary};
      background: transparent;
    }
  }
`;

export const StyledButtonOpenModal = styled.button`
  position: fixed;
  margin: 24px;
  min-width: 90px;
  min-height: 50px;
  border-radius: 5px;
  border: none;
  background-color: #ffffff;
  padding: 16px 18px 16px 18px;
  cursor: pointer;
`;

export const StyledButtonOpenModalText = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: center;
`;

export const StyledContainer = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 10px;
`;
