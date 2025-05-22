import styled from 'styled-components';
import { primary, secondary } from '../../colors';

export const StyledHeaderProfile = styled.div<{ $hasCover: boolean }>`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  color: #2c323a;
  box-shadow: 0px 1px 4px 0px #19243614;
  margin-top: ${props => (props.$hasCover ? '-126px' : '0')};
  @media (max-width: 768px) {
    margin-top: ${props => (props.$hasCover ? '-165px' : '0')};
  }
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledBackButton = styled.button<{ $hasCover: boolean }>`
  margin-left: 10px;
  background: none;
  border: none;
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
  background-color: ${props => props.$hasCover && `${secondary}`};

  svg {
    width: 24px;
    height: 24px;
  }
  &:hover {
    color: ${primary};
  }
`;

export const StyledProfileInfo = styled.div`
  margin-top: 20px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    margin-top: 7vh;
  }
  @media (max-width: 576px) {
    align-items: center;
    margin-top: 2vh;
    margin-left: 0;
    text-align: center;

    &h1 {
      color: #000;
    }
  }
`;

export const StyledAvatarProfile = styled.div<{ $hasCover: boolean }>`
  display: flex;
  margin-left: 15vw;
  width: 192px;
  height: 192px;
  border-radius: 50%;
  margin-bottom: 10px;
  position: relative;
  background-color: ${props => props.$hasCover && '#fff'};

  @media (max-width: 768px) {
    margin-left: 2vw;
    margin-top: 5vh;
    width: 168px;
    height: 168px;

    img {
      width: 158px;
      height: 158px;
    }
  }

  @media (max-width: 576px) {
    margin-left: 0;
    margin-top: 2vh;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    width: 138px;
    height: 138px;

    img {
      width: 128px;
      height: 128px;
    }
  }
`;

export const StyledAvatarImg = styled.img<{ $hasCover: boolean }>`
  top: 10px;
  border-radius: 50%;
  position: ${props => (props.$hasCover ? '' : 'relative')};
  width: 180px;
  height: 180px;
  margin: auto;
`;

export const StyledUserName = styled.h1<{ $hasCover: boolean }>`
  font-size: 1.9em;
  margin-bottom: 6px;
  letter-spacing: 1px;
  color: ${props => (props.$hasCover ? '#fff' : '#000')};
  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 576px) {
    color: #000;
  }
`;

export const StyledStatus = styled.p<{ $hasCover: boolean }>`
  margin: 10px 0;
  color: ${props => (props.$hasCover ? '#fff' : '#000')};
  @media (max-width: 576px) {
    color: #000;
  }
`;

export const StyledEditProfileButton = styled.button`
  background: none;
  border: 1px solid #16993b;
  border-radius: 5px;
  padding: 16px 18px;
  color: #16993b;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  margin: 20px 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: ${primary};
    color: #ffffff;
  }
`;

export const StyledFollowersInfo = styled.div`
  margin: 10px 0px 20px -5px;
  span {
    margin: 0 5px;
  }
`;

export const StyledContactInfo = styled.div`
  border: none;
  background: none;
  margin-top: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  font-size: 14px;
  svg {
    width: 16px;
    height: 16px;
  }
`;

export const StyledContactText = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: #2c323a;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${primary};
  }
`;

export const StyledButtonEdit = styled.button`
  margin-left: 10px;
  cursor: pointer;
  background: none;
  border: 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${primary};
  }
`;

export const StyledButtonContainer = styled.div<{ $hasCover: boolean }>`
  display: flex;
  margin-right: ${props => (props.$hasCover ? '0' : '15vw')};
  @media (max-width: 1000px) {
    margin-right: 0;
  }
`;

export const StyledIcon = styled.div<{ $hasCover: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  border-radius: 50%;
  background-color: ${props => props.$hasCover && `${secondary}`};

  &:hover {
    color: ${primary};
  }
`;

export const StyledHeaderButtonContainer = styled.div<{ $hasCover: boolean }>`
  display: flex;
  width: 97%;
  position: absolute;
  justify-content: space-between;
  top: 0;
  margin-top: ${props => (props.$hasCover ? '25px' : '0')};
`;

export const StyledAdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    margin-bottom: 10px;
    align-items: center;
  }
`;

export const StyledText = styled.div`
  color: #2c323a;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  svg {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
`;

export const StyledDot = styled.div`
  margin: 0 5px;
  font-weight: bold;
  font-size: 20px;
`;

export const StyledLocation = styled.div`
  display: flex;
`;

export const StyledEditAvatar = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${primary};
  }
`;

export const StyledCoverImage = styled.div`
  width: 100%;
  height: 320px;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease-in-out;
  object-fit: cover;
`;

export const StyledCoverEditButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
`;

export const StyledContainerMenuItem = styled.div`
  margin: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
`;

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 5px 0;
  img {
    padding-right: 20px;
  }
  &:hover {
    background-color: rgba(241, 243, 247, 1);
  }
`;
