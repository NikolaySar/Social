import { primary } from '@/colors';
import { Button, Divider } from '@mui/material';
import styled from 'styled-components';

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
  padding: 35px 48px;
  min-width: 650px;
  border-radius: 30px;
  box-shadow: 8px 16px 40px 0px #19243624;
  z-index: 1001;
  overflow: scroll;
  max-height: 900px;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 100%;
    border-radius: 0;
  }
`;

export const StyledTitle = styled.h2`
  color: #2c323a;
  font-size: 20px;
  letter-spacing: 1px;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const StyledTitleModal = styled.h2`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    font-weight: 300;
    font-size: 14px;
    color: #2c323a;
    letter-spacing: 1px;
    margin-bottom: 10px;
    color: #78808d;
  }
`;

export const StyledDivider = styled(Divider)`
  display: none;

  @media (max-width: 768px) {
    display: inline;
    position: relative;
    width: 117%;
    left: -47px;
  }
`;

export const StyledSubtitle = styled.p`
  margin-top: -20px;
  color: #78808d;
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
`;

export const StyledFieldContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 500px) {
    padding: 0 110px;
  }
`;

export const StyledClose = styled.button`
  margin-left: auto;
  border: none;
  background: none;
  width: 24px;
  height: 24px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledCancelButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  color: #2c323a;
  border: none;
  border-radius: 5px;
  background: none;
  font-family: 'SF Pro Display', sans-serif;
  letter-spacing: 0.5px;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${primary};
  }
`;

export const StyledButtonSubmit = styled(Button)`
  && {
    min-width: 143px;
    height: 48px;
    padding: 16px 18px;
    font-weight: 700;
    background-color: #16993b;
    font-family: 'SF Pro Display', sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: #dbdbd9;
      color: #2c323a;
    }
  }
`;

export const StyledInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 30px;

  @media (max-width: 500px) {
  }
`;

export const StyledDescription = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  color: #2c323a;
`;

export const StyledImage = styled.img`
  margin-right: 15px;
`;

export const StyledText = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: #2c323a;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${primary};
  }
`;
