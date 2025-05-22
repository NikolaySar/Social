import styled from 'styled-components';
import { primary } from '../../colors';

export const StyledProfileInfoContainer = styled.div`
  margin-left: 15vw;
  display: flex;
  flex-direction: column;
  color: #2c323a;

  @media (max-width: 1000px) {
    margin-left: 2vw;
  }
`;

export const StyledTitleInfoContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const StyledTitleContainer = styled.div`
  display: flex;
`;

export const StyledTitle = styled.h2`
  padding: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 20px;
`;

export const StyledButtonEdit = styled.button`
  margin-left: 10px;
  cursor: pointer;
  background: none;
  border: 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${primary};
`;

export const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  padding: 24px 19px;
  width: 50vw;
  border: 2px dashed #c1c7d2;
  border-radius: 10px;
  margin-bottom: 10vh;
  @media (max-width: 1000px) {
    width: 95%;
  }
`;

export const StyledWrapperData = styled.div`
  ol {
    margin-left: 30px;
  }
`;

export const StyledUserData = styled.p`
  display: block;
  align-items: center;
  padding: 5px 10px;
  max-width: 650px;
  margin-bottom: 67px;
  overflow-wrap: anywhere;
`;
export const StyledText = styled.p`
  font-size: 0.9em;
`;

export const StyledFooterProfileContainer = styled.div`
  margin-top: 5vh;
  width: 100%;
  background-color: #fafafa;
  display: flex;
`;

export const StyledActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px 0px #19243614;
  width: 364px;
  height: 172px;
  border-radius: 5px;
  @media (max-width: 360px) {
    width: 328px;
  }
`;

export const StyledImageContainer = styled.div`
  margin: 20px;
  width: 56px;
  height: 56px;
  border: 2px dashed #c1c7d2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const StyledDescription = styled.p`
  margin-bottom: 10px;
  font-size: 1.1em;
  color: #78808d;
`;

export const StyledButton = styled.button`
  margin: 5px;
  background: none;
  border: 0;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${primary};
  }
`;

export const StyledContainer = styled.div`
  margin: 3vw 15vw;
  display: flex;
  gap: 10px;
  @media (max-width: 1000px) {
    margin: 3vh 0;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
