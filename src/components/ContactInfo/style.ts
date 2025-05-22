import { primary } from '@/colors';
import { Divider } from '@mui/material';
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
  }
`;

export const StyledTitleModal = styled.h2`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 16px;
    color: #2c323a;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
`;

export const StyledSubtitle = styled.p`
  margin-top: -10px;
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

export const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-right-color: #c1c7d2;
  border-top-color: none;
  border-bottom-color: #ffffff;
  border-left-color: #ffffff;
  border-top-color: #ffffff;
  width: 331px;
  @media (max-width: 768px) {
    border: none;
  }
`;

export const StyledDescription = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  color: #2c323a;
`;

export const StyledImage = styled.img`
  margin-right: 15px;
`;

export const StyledText = styled.a`
  margin-right: 5px;
  font-size: 18px;
  text-decoration: none;
  color: #2c323a;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${primary};
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

export const StyledClose = styled.button`
  margin-left: auto;
  border: none;
  background: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
