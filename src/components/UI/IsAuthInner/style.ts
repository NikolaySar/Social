import styled from 'styled-components';

export const StyledAuthContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledCreateButton = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: unset;
  color: rgba(44, 50, 58, 1);
  border-radius: 20px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9em;
  font-weight: 700;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;

  @media (max-width: 968px) {
    display: none;
  }
`;

export const StyledAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
`;

export const StyledAvatarProfile = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

export const StyledIconContainer = styled.div`
  margin: 10px;
  position: relative;
  cursor: pointer;
`;

export const StyledCounter = styled.div`
  position: absolute;
  top: -8px;
  right: -10px;
  width: 16px;
  height: 16px;
  background-color: rgba(22, 153, 59, 1);
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const StyledAvatarContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 968px) {
    display: none;
  }
`;

export const StyledOnline = styled.div`
  position: absolute;
  top: 23px;
  left: 30px;
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

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 115px;
  margin-left: 15px;

  @media (max-width: 768px) {
    width: 100px;
    margin-left: 50vw;
  }

  @media (max-width: 560px) {
    margin-left: 15vw;
  }

  @media (max-width: 360px) {
    margin-left: 5vw;
  }
`;
