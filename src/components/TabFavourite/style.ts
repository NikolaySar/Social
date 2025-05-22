import styled from 'styled-components';
import { primary, secondary } from '../../colors';

export const StyledTabFavouriteContainer = styled.div`
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
