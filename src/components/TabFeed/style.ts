import styled from 'styled-components';
import { primary, secondary } from '../../colors';

export const StyledTabFeedContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const StyledInnerContainer = styled.div`
  margin: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background-color: ${secondary};
  border-radius: 50%;
  cursor: pointer;
  margin-bottom: 30px;
`;

export const StyledImage = styled.div`
  color: #c1c7d2;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${primary};
  }
`;

export const StyledDescription = styled.h4`
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 30px;
  max-width: 300px;
}
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid #c1c7d2;
  border-radius: 5px;
  background: none;
  text-transform: uppercase;
  font-weight: 700;
  height: 48px;
  padding-right: 16px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  svg {
    margin: 12px 18px 12px 18px;
    width: 24px;
    height: 24px;
    color: ${primary};
  }
  &:hover {
    color: ${primary};
  }
`;

export const StyledFeedContainer = styled.div`
  margin: 0 3vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: 320px;
  gap: 10px;
  padding: 20px;

  @media (max-width: 360px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledPostButtonContainer = styled.div`
  background-color: ${secondary};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 360px) {
    width: 100%;
  }
  button {
    border: none;
    flex-direction: column;
    height: fit-content;
    @media (max-width: 360px) {
      flex-direction: row;
      margin: 30px;
      padding-right: 0px;
    }
  }

  svg {
    width: 64px;
    height: 64px;
    @media (max-width: 360px) {
      width: 24px;
      height: 24px;
      margin: 0px 5px 0px 0px;
    }
  }
`;
